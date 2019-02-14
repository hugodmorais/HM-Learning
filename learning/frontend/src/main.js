import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikh1Z28gTW9yYWlzIiwiZW1haWwiOiJodWdvQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1NTAxNDg1NjUsImV4cCI6MTU1MDQwNzc2NX0.ZV8zKH8YRn8rKFcT299Xtd2aq4gRZq-YTOpSG0ETK2U'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')