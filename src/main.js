// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router/index'
import App from './App'
import {
  Flexbox,
  FlexboxItem,
  Group,
  Divider,
  Grid,
  GridItem,
  Drawer,
  ViewBox,
  XHeader,
  Tabbar,
  TabbarItem,
  XInput,
  XButton
} from 'vux'

Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)
Vue.component('group', Group)
Vue.component('divider', Divider)
Vue.component('grid', Grid)
Vue.component('grid-item', GridItem)
Vue.component('drawer', Drawer)
Vue.component('view-box', ViewBox)
Vue.component('x-header', XHeader)
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.component('x-input', XInput)
Vue.component('x-button', XButton)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
