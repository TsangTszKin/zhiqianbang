/**
 * This js base on jquery and jquery ui.
 */
(function($) {
	$.pop = {
		_warnBoxId : "jquery-popup-alerts-warn",
		_okBoxId : "jquery-popup-alerts-ok",
		_errorBoxId : "jquery-popup-alerts-error",
		_confirmBoxId : "jquery-popup-alerts-confirm",
		_dialogBoxId : "jquery-popup-dialog",
		init : function() {
			if ($("#" + this._warnBoxId).length == 0) {
				var box = '<div id="'
					+ this._warnBoxId
					+ '" class="pops" style="display:none;"><div class="popsAlert popWarning">'
					+ '<div class="popsIcon"><i></i></div>'	
					+ '<div class="popsClose"><button class="closeBtn" title="关闭"></button></div>'
					+ '<div class="popsTxt"><span class="popup-message"><span></div>'
					+ '<div class="popsBtn"><button class="closeBtn grayBtn-o">我知道了</button></div>'
					+ '</div></div>';
				$(box).appendTo("body");
			}

			if ($("#" + this._okBoxId).length == 0) {
				var box = '<div id="'
						+ this._okBoxId
						+ '" class="pops" style="display:none;"><div class="popsAlert popSucceed">'
						+ '<div class="popsIcon"><i></i></div>'	
						+ '<div class="popsClose"><button class="closeBtn" title="关闭"></button></div>'
						+ '<div class="popsTxt"><span class="popup-message"><span></div>'
						+ '<div class="popsBtn"><button class="closeBtn grayBtn-o">我知道了</button></div>'
						+ '</div></div>';
				$(box).appendTo("body");
			}

			if ($("#" + this._errorBoxId).length == 0) {
				var box = '<div id="'
						+ this._errorBoxId
						+ '" class="pops" style="display:none;"><div class="popsAlert popFailure">'
						+ '<div class="popsIcon"><i></i></div>'	
						+ '<div class="popsClose"><button class="closeBtn" title="关闭"></button></div>'
						+ '<div class="popsTxt"><span class="popup-message"><span></div>'
						+ '<div class="popsBtn"><button class="closeBtn grayBtn-o">我知道了</button></div>'
						+ '</div></div>';
				$(box).appendTo("body");
			}

			if ($("#" + this._confirmBoxId).length == 0) {
				var box = '<div id="'
						+ this._confirmBoxId
						+ '" class="pops" style="display:none;"><div class="popsAlert popWarning">'
						+ '<div class="popsIcon"><i></i></div>'	
						+ '<div class="popsClose"><button class="closeBtn" title="关闭"></button></div>'
						+ '<div class="popsTxt"><span class="popup-message"><span></div>'
						+ '<div class="popsBtn"><button class="okBtn blueBtn">确定</button><button class="cancelBtn grayBtn-o">取消</button></div>'
						+ '</div></div>';
				$(box).appendTo("body");
			}
			
			if ($("#" + this._dialogBoxId).length == 0) {
				var box = '<div id="' + this._dialogBoxId + '" class="pops" style="display: none;">'
					+ '<div class="popsBuild" style="display: block; top: 50px; width: 400px">'
					+ '<div class="popsToper"><i class="fa fa-file-text fa-lg" aria-hidden="true"></i><span id="popTitle"></span></div>'
					+ '<div class="popsClose"><button title="关闭" class="closeBtn"></button></div>'
					+ '<div id="editContent"/>'
					+ '<ul class="form clearfix"><li><div class="formTxt fl"/>'
					+ '<div class="formIpt fr"><button class="okBtn blueBtn">提交</button><button class="cancelBtn grayBtn-o">取消</button></div>'
					+ '</li></ul>'
					+ '</div>'
					+ '</div>';
				$(box).appendTo("body");
			}
			
		},
		ok : function(data) {
			var id = "#" + this._okBoxId;
			var msg = typeof (data) == "string" ? data : data.message;

			$(id + " .popup-message").html(msg);
			$(id).on('click', '.closeBtn', function() {
				$(id).find(".popup-message").html('');
				$(id).fadeOut();
				if (data.close && typeof (data.close) == "function") {
					data.close();
				}
			});
			$(id).fadeIn();
		},
		error : function(data) {
			var id = "#" + this._errorBoxId;
			var msg = typeof (data) == "string" ? data : data.message;

			$(id + " .popup-message").html(msg);
			$(id + " .closeBtn").click(function() {
				$(id).find(".popup-message").html('');
				$(id).fadeOut();
				if (data.close && typeof (data.close) == "function") {
					data.close();
				}
			});
			$(id).fadeIn();
		},
		warn : function(data) {
			var id = "#" + this._warnBoxId;
			var msg = typeof (data) == "string" ? data : data.message;

			$(id + " .popup-message").html(msg);
			$(id + " .closeBtn").click(function() {
				$(id).find(".popup-message").html('');
				$(id).fadeOut();
				if (data.close && typeof (data.close) == "function") {
					data.close();
				}
			});
			$(id).fadeIn();
		},
		confirm : function(data) {
			var id = "#" + this._confirmBoxId;
			var msg = typeof (data) == "string" ? data : data.message;

			var okBtn = data.ok && data.ok.label ? data.ok.label : "确认";
			var cancelBtn = data.cancel && data.cancel.label ? data.cancel.label : "取消";
			
			$(id + " .okBtn").click(function() {
				$(id).fadeOut();
				if (data.ok && typeof (data.ok) == "function") {
					data.ok();
				} else if (data.ok && data.ok.callback && typeof (data.ok.callback) == "function") {
					data.ok.callback();
				};
			})

			$(id + " .popup-message").html(msg);
			$(id + " .okBtn").text(okBtn);
			$(id + " .cancelBtn").text(cancelBtn);
			$(id + " .cancelBtn").click(function() {
				$(id).fadeOut();
				if (data.cancel && typeof (data.cancel) == "function") {
					data.cancel();
				} else if (data.cancel && data.cancel.callback && typeof (data.cancel.callback) == "function") {
					data.cancel.callback()
				}
				$(id).find(".popup-message").html('');
			});
			$(id + " .closeBtn").click(function() {
				$(id).fadeOut();
				$(id).find(".popup-message").html('');
			});
			$(id).fadeIn();
		},
		dialog: function(data) {
			var id = "#" + this._dialogBoxId;
			var msg = typeof (data) == "string" ? data : data.message;

			var okBtn = data.ok && data.ok.label ? data.ok.label : "确认";
			var cancelBtn = data.cancel && data.cancel.label ? data.cancel.label : "取消";
			
			if (data.title) {
				$(id + " #popTitle").text(data.title);
			}
			
			if (data.width) {
				$(id + " .popsBuild").css("width", data.width + "px");
			}

			if (data.url) {
				$(id + " #editContent").load(data.url, function(response, status, xhr) {
					if (status == "error") {
						$.pop.error("加载页面失败. url: " + data.url + ", msg: " + xhr.statusText);
					}
				});
			}
			
			$(id + " .okBtn").click(function() {
				if (data.ok && typeof (data.ok) == "function") {
					data.ok();
				} else if (data.ok && data.ok.callback && typeof (data.ok.callback) == "function") {
					data.ok.callback();
				};
			})

			$(id + " .okBtn").text(okBtn);
			$(id + " .cancelBtn").text(cancelBtn);
			$(id + " .cancelBtn").click(function() {
				if (data.cancel && typeof (data.cancel) == "function") {
					data.cancel();
				} else if (data.cancel && data.cancel.callback && typeof (data.cancel.callback) == "function") {
					data.cancel.callback()
				}
				$(id).fadeOut();
				$(id).find("#editContent").html('');
			});
			$(id + " .closeBtn").click(function() {
				$(id).fadeOut();
				$(id).find("#editContent").html('');
			});
			$(id).fadeIn();
			return $(id);
		}
	}
})($);
$().ready(function() {
	$.pop.init();
	//垂直居中
	var H = $(window).height();
	var popsH = $('.popsAlert').height();
	var popsBuildH = $('.popsBuild').height();
	console.log(H, popsBuildH);
	$('.popsAlert').css('top',(H-popsH)/5);
	$('.popsBuild').css('top',(H-popsBuildH)/5-23);
});