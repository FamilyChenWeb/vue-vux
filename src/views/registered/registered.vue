<template>
  <div class="registered">
    <!--header-->
    <x-header :left-options="{showBack: false}">注 册</x-header>
    <!--logo-->
    <div class="registered_logo">
      <img src="../../assets/logo.png" />
    </div>
    <!--input-->
    <div class="registered_input">
      <x-input placeholder="请输入手机号码" class="weui-vcode">
        <i slot="label" class="icon icon-yinhangqia1"></i>
        <x-button slot="right" type="primary" mini class="but">发送验证码</x-button>
      </x-input>
      <x-input placeholder="请输入手机验证码">
        <i slot="label" class="icon icon-yinhangqia1"></i>
      </x-input>
      <x-input placeholder="请输入登录密码">
        <i slot="label" class="icon icon-yinhangqia1"></i>
      </x-input>
      <x-input placeholder="请再次输入登录密码">
        <i slot="label" class="icon icon-yinhangqia1"></i>
      </x-input>
      <x-input placeholder="请输入邀请码">
        <i slot="label" class="icon icon-yinhangqia1"></i>
      </x-input>
    </div>
    <box gap="10px 10px">
      <x-button type="primary" class="but">注 册</x-button>
    </box>
    <div class="registered_features">
      <router-link to="/login">登 录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "registered"
}
</script>

<style scoped lang="less">
  .registered {
    height: 100%;
    background-color: #fff;
    .registered_logo {
      img {
        display: block;
        margin: 0 auto;
      }
    }
    .registered_input {
      padding-right: 10px;
      i {
        margin-right: 10px;
      }
    }
    .but {
      background-color: @but;
      color: #fff;
    }
    .registered_features {
      text-align: center;
      a {
        color: @tabbar-text-active-color;
      }
    }
  }
</style>
