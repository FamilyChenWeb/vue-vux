<template>
  <div id="app">
    <router-view></router-view>
    <!--<view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="50px">
      <x-header slot="header" style="width: 100%; position: absolute; left: 0; top: 0; z-index: 100;"></x-header>
      <router-view></router-view>
      <tabbar slot="bottom">
        <tabbar-item>
          <span slot="label">Wechat</span>
        </tabbar-item>
        <tabbar-item show-dot>
          <span slot="label">Message</span>
        </tabbar-item>
        <tabbar-item selected link="/component/demo">
          <span slot="label">Explore</span>
        </tabbar-item>
        <tabbar-item badge="2">
          <span slot="label">News</span>
        </tabbar-item>
      </tabbar>
    </view-box>-->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  background-color: @box_background;
  #app {
    height: 100%;
  }
}
.weui-toast {
  top: 40%;
}
</style>
