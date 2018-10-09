// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router/index'
import App from './App'
import './utils/request'
import './assets/icon/iconfont.css'
import {
  // AjaxPlugin,
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
  XButton,
  Cell,
  Marquee,
  MarqueeItem
} from 'vux'

// Vue.use(AjaxPlugin)
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
Vue.component('cell', Cell)
Vue.component('marquee', Marquee)
Vue.component('marquee-item', MarqueeItem)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  /*created: function () {
    var docEl = document.documentElement
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = 20 * (clientWidth / 375) + 'px'
    // 判断是否在安卓和ios运行
    var u = navigator.userAgent
    if (!(u.indexOf('Android') > -1 || u.indexOf('Adr') > -1)) {
      if (!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        docEl.style.fontSize = 40 + 'px'
      }
    }
  },*/
  render: h => h(App)
}).$mount('#app-box')
