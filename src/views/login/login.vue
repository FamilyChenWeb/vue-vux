<template>
  <div class="login">
    <!--header-->
    <x-header :left-options="{showBack: false}">登 录</x-header>
    <!--logo-->
    <div class="login_logo">
      <img src="../../assets/logo.png" />
    </div>
    <!--input-->
    <div class="login_input">
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
    <!--按钮-->
    <box gap="10px 10px">
      <x-button class="but">登 录</x-button>
    </box>
    <div class="login_features">
      <router-link to="/registered">注册</router-link>
      <router-link to="">忘记密码</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped lang="less">
  .login {
    height: 100%;
    background-color: #fff;
    .login_logo {
      img {
        display: block;
        margin: 0 auto;
      }
    }
    .login_input {
      padding-right: 10px;
      i {
        margin-right: 10px;
      }
    }
    .login_features {
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      a {
        color: @tabbar-text-active-color;
      }
    }
    .but {
      background-color: @but;
      color: #fff;
    }
  }
</style>
