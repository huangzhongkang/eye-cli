// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/css/common/common-css.scss'
import './assets/css/common/element-cover.scss'
import 'bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min.css'
import 'bootstrap-switch/dist/js/bootstrap-switch.min.js'

Vue.use(elementUi, {size: 'small'});

Vue.prototype.$http = axios;
axios.defaults.timeout = 10000;

window.Bus = new Vue();
// axios.defaults.baseURL = 'http://test.laravel.com'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
