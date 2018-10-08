<template>
  <div class="login">
    <group title="验证码">
      <x-input title="验证码">
        <img slot="right-full-height" src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg">
      </x-input>
      <x-input title="发送验证码" class="weui-vcode">
        <x-button slot="right" type="primary" mini>发送验证码</x-button>
      </x-input>
    </group>
    <div class="cs">
      <span>一个块级元素</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped lang="less">
  .cs {
    width: 200px; /*px*/
    height: 200px; /*px*/
    font-size: 24px; /*no*/
    border: 1px solid #ddd; /*no*/
    margin: 10px auto;
  }
</style>
