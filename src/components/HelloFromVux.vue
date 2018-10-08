<template>
  <div class="box">
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
    </div>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
    </group>
    <flexbox>
      <flexbox-item>
        <div class="flex-demo">1</div>
      </flexbox-item>
      <flexbox-item>
        <div class="flex-demo">2</div>
      </flexbox-item>
    </flexbox>
    <divider>这是底线了</divider>
    <divider>这是底线了</divider>
    <divider>这是底线了</divider>
    <divider>这是底线了</divider>
    <divider>这是底线了</divider>
    <divider>这是底线了</divider>
    <divider>这是底线了</divider>
    <divider>这是底线了</divider>
    <divider>这是底线了</divider>
    <divider>这是底线了</divider>
    <divider>这是底线了</divider>
    <grid :cols="2" :show-lr-borders="true">
      <grid-item v-for="i in 6" :key="i">
        <span class="grid_center">{{i}}</span>
      </grid-item>
    </grid>
    <divider>这是底线了</divider>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<style lang="less">
  .box {
    padding: 0 15px;
  }
  .vux-demo {
    text-align: center;
  }
  .logo {
    width: 100px;
    height: 100px
  }
  .flex-demo {
    text-align: center;
    color: #fff;
    background-color: #20b907;
    border-radius: 4px;
    background-clip: padding-box;
  }
  .grid_center {
    display: block;
    text-align: center;
    color: #666;
  }
</style>
