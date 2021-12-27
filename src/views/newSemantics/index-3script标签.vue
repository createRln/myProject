<!--
 * @Author: renlina
 * @Date: 2021-12-20 14:43:04
 * @LastEditors: renlina
 * @LastEditTime: 2021-12-20 14:43:05
 * @Description: script标签
-->
<template>
    <div>
        <div>页面中的script标签加载的内容都是自上而下同步进行加载的。就是一个加载完成之后，才会去加载下一个。</div>
        <div>async和defer属性可以使script变成异步加载。</div>
        <div>async:异步加载，不需要等待当前的script加载完，就可以同时向后加载另一个script了</div>
        <div>defer: 当所有页面内容都加载完毕之后执行当前的js内容，【页面上所有的内容都加载完成了，它最后一个执行】</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>