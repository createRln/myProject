<!--
 * @Author: renlina
 * @Date: 2021-08-16 19:06:22
 * @LastEditors: renlina
 * @LastEditTime: 2021-12-17 15:32:03
 * @Description: 
-->
<template>
<div id="app" style="margin: 0px;">
    <router-view  :key="$route.meta.fullPath"/>
</div>
  

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
<style>
  body{
    margin: 0px;
  }
</style>
<style lang="less" scoped>
</style>
