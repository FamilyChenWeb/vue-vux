<template>
  <div class="login" style="height: 100%; background-color: #fff;">
    <!--logo-->
    <div class="login_logo">
      <img src="../../assets/logo.png" />
    </div>
    <div>
      <x-input placeholder="请输入登录账号">
        <i slot="label" class="icon icon-yinhangqia1"></i>
      </x-input>
      <x-input placeholder="请输入登录密码">
        <i slot="label" class="icon icon-yinhangqia1"></i>
      </x-input>
      <x-input placeholder="请输入验证码">
        <i slot="label" class="icon icon-yinhangqia1"></i>
        <img slot="right-full-height" src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg">
      </x-input>
    </div>
    <box gap="10px 10px">
      <x-button type="primary">primary</x-button>
    </box>
  </div>
</template>

<script>
export default {
  name: "registered"
}
</script>

<style scoped>
  .login_logo {
  img {
    display: block;
    margin: 0 auto;
  }
  }
</style>
