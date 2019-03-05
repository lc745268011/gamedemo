// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */

// Vue.component('square', {
//   render (createEle) {
//     return createEle('div', {
//       attrs: {
//         class: 'square'
//       },
//       on: {
//         click: this.handleClick
//       }
//     }, name)
//   },
//   data: function () {
//     return {
//       name: '123'
//     }
//   },
//   methods: {
//     handleClick: function () {
//       console.log('clicked')
//       this.name = '555'
//     }
//   }
// })
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
