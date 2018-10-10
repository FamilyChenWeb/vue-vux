<template>
  <div class="announcement">
    <!--header-->
    <x-header :left-options="{backText: ''}">公 告</x-header>
    <!--内容-->
    <group>
      <cell :title="1" inline-desc='2018-01-01'></cell>
      <cell :title="2" inline-desc='2018-01-01'></cell>
      <cell :title="3" inline-desc='2018-01-01'></cell>
    </group>
  </div>
</template>

<script>
export default {
  name: 'announcement'
}
</script>

<style scoped lang="less">
  .announcement {
    .announcement_input {
      background-color: #fff;
    }
  }
</style>
