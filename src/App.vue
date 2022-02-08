<!--
 * @Author: renlina
 * @Date: 2021-08-16 19:06:22
 * @LastEditors: renlina
 * @LastEditTime: 2022-02-08 17:09:42
 * @Description: 
-->
<template>
<div id="app" style="margin: 0px;">
    <router-view  :key="$route.name"/>
</div>
  

</template>

<script>
export default {
  name: 'App',
  components: {
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
