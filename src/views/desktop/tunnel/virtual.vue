<template>
	<div class="virtualCont" :id="token" style="diplay: none;height:100%;"></div>
</template>
<script>
import env from "@/config/env";

export default {
  props: ["token"],
  data() {
    return {
      client: null,
      active: false,
      keyboard: null
    };
  },
  created() {
    var self = this;
    this.$parent.$on("setClipboardEvent", (token, data) => {
      if (self.token === token) {
        this.paste(data);
      }
    });
    this.$parent.$on("activateTokenEvent", token => {
      if (self.token === token) {
        self.active = true;
      } else {
        self.active = false;
      }
    });
	self.setValidTime();
  },
  mounted() {
    let windowWidth = 0;
    if (window.innerWidth) windowWidth = window.innerWidth;
    else if (document.body && document.body.clientWidth)
      windowWidth = document.body.clientWidth;
    var self = this;
    var display = document.getElementById(this.token);

    // Instantiate client, using an HTTP tunnel for communications.
    var guac = new Guacamole.Client(
      new Guacamole.HTTPTunnel(
        env.gwApiPrefix + "/desktop/tunnel/" + self.token
      )
    );

    // Add client to display div
    display.appendChild(guac.getDisplay().getElement());

    // Error handler
    guac.onerror = function(error) {
      console.log(error);
    };

    guac.onclipboard = function(stream, mimetype) {
      if (mimetype === "text/plain") {
        var content = "";
        var reader = new Guacamole.StringReader(stream);
        reader.ontext = function(text) {
          content += text;
        };
        reader.onend = function() {
          if (content === "zhisu_resize_request") {
        	  guac.setClipboard("zhisu_resize_" + windowWidth + "x" + window.innerHeight);
          } else {
	          self.$parent.$emit("recieveClipboardEvent", self.token, content);
          }
        };
      }
    };

    // Connect
    guac.connect();

    // Disconnect on close
    window.onunload = function() {
      guac.disconnect();
    };

    // Mouse
    var mouse = new Guacamole.Mouse(guac.getDisplay().getElement());

    mouse.onmousedown = mouse.onmouseup = mouse.onmousemove = function(
      mouseState
    ) { 
      self.setOperateTime();
      guac.sendMouseState(mouseState);
    };

    // Keyboard
    this.keyboard = new Guacamole.Keyboard(document);

    guac.onstatechange = function(currentState) {
      if (currentState == 3 || currentState == 2) {
        self.$parent.$emit("virtualReadyEvent", self.token);
      } else if (currentState == 5){
          self.$parent.$emit("virtualErrorEvent", self.token);
      }
    };

    this.client = guac;

	// display.style.minWidth = windowWidth + "px";
	// guac.getDisplay().getElement().style.minWidth = windowWidth + "px";
  },
  methods: {
    paste(data) {
      this.client.setClipboard(data);
    },
    setOperateTime() {
    	var self = this;
    	var experimentId = self.$parent.experimentId;
    	var now = new Date();
        var operateTimeString = localStorage.getItem(experimentId+"_operateTime");
        if (operateTimeString == null) {
      	  var operateTimeObject = {};
      	  operateTimeObject.startTime = now.getTime();
      	  operateTimeObject.lastTime = now.getTime();
      	  operateTimeObject.validTime = 0;
        } else {
    	      var operateTimeObject = JSON.parse(operateTimeString);
        }
        var lastTime = operateTimeObject.lastTime;
        var intervalTime = now.getTime() - lastTime;
        if (intervalTime <= 1*60*1000) {
      	  operateTimeObject.lastTime = now.getTime();
        } else {
      	  operateTimeObject.validTime = operateTimeObject.validTime + (lastTime - operateTimeObject.startTime);
      	  operateTimeObject.startTime = now.getTime();
      	  operateTimeObject.lastTime = now.getTime();
        }
        
        operateTimeString = JSON.stringify(operateTimeObject);
        localStorage.setItem(experimentId+"_operateTime", operateTimeString);
    },
    setValidTime() {
    	var self = this;
    	var userExperimentId = self.$parent.experimentId;
    	var validTime = 0;
    	var operateTimeString = localStorage.getItem(userExperimentId+"_operateTime");
    	if (operateTimeString != null) {
    		var operateTimeObject = JSON.parse(operateTimeString);
    		validTime = operateTimeObject.validTime + operateTimeObject.lastTime - operateTimeObject.startTime;
    	}
    	$.ajax({
    		type:"post",
    		url:env.gwApiPrefix + "/api/zsapi/practice/userExperiments/validTime",
    		data:JSON.stringify({"validTime": validTime, "userExperimentId": userExperimentId}),
    		contentType:'application/json;charset=utf-8',
    		dataType:"json",
    	});
    	setTimeout(function() {
    		self.setValidTime();
    	},60000);
    }
  },
  watch: {
    active(newVal, oldVal) {
      if (newVal === oldVal) return;
      var self = this;
      if (newVal) {
        self.keyboard.onkeydown = function(keysym) {
          self.client.sendKeyEvent(1, keysym);
        };
        self.keyboard.onkeyup = function(keysym) {
          self.client.sendKeyEvent(0, keysym);
        };
      } else {
        self.keyboard.onkeydown = null;
        self.keyboard.onkeyup = null;
      }
    }
  }
};

</script>