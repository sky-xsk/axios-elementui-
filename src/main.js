// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-default/index.css'
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import store from './store'

window.$ = $
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(VueResource)

//user
Vue.filter('isEnabledFormatter', function(value) {
    if (value == true) {
        return "启用";
    } else return "停用";
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
  
})
