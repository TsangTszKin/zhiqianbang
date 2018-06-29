
import Vue from 'vue'
import "babel-polyfill"
import App from './tunnelApp'
import pop from '@/utils/pop'
import auth from '@/ssoAuth.js'
import {findGetParameter} from '@/utils/common'

Vue.prototype.$pop = pop;
new Vue({
  el: '#app',
  render: h => h(App)
})

var ticket = findGetParameter("ticket")[0];
if (ticket) {
	auth.checkTicket(ticket);
}
if(!auth.loggedIn()) {
	auth.goLogin()
}
