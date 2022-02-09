<!--
 * @Author: renlina
 * @Date: 2022-02-09 10:29:24
 * @LastEditors: renlina
 * @LastEditTime: 2022-02-09 17:05:12
 * @Description: 
-->
<template>
    <div class="loading" id="myloading" v-if="isShow">
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F69%2F57%2F595f8af616db7_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646989210&t=e190c5f4c434b05567b313fc4ae7ab55" alt="">
    </div>
</template>

<script>
import {defineComponent,ref} from 'vue'
export default {
    name: 'Loading',
    setup(){
        let isShow = ref(false)
        const show = ()=>{
            isShow.value = true
        }
        const hide = ()=>{
            isShow.value = false
        }
        return {
            isShow,
            show,
            hide
        }
    }
}
</script>

<style lang="less" scoped>
.loading{
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    img{
        width: 80px;
        animation: Round 0.8s linear infinite;
        @keyframes Round {
            0%{
                transform: rotate(0deg);
            }
            100%{
                transform: rotate(360deg);
            }
        }
    }
}
</style>