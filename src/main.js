import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import Router from './router/router'

//import "./assets/fontAwesomeIcon.js"
// import { library, dom } from '@fortawesome/fontawesome-svg-core'
// import { faAngry } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faAngry)
// dom.watch()

// Vue.config.productionTip = false
// Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
  router: Router,
  render: h => h(App),
}).$mount('#app')
