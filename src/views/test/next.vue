<!--
 * @Author: renlina
 * @Date: 2021-08-16 15:22:04
 * @LastEditors: renlina
 * @LastEditTime: 2021-10-12 19:17:57
 * @Description: 
-->
<template>
    <div> 
        <button @click="modaClick">点我弹出遮罩层</button>
        <div>页面横坐标X：{{page.x}}</div>
        <div>页面纵坐标Y：{{page.y}}</div>

        <teleport to='body'>
            <div v-if="isShow" class="modal" @click="closeModal">
                ddd 
            </div>
        </teleport>
    </div>
  
</template>

<script>
import { reactive, toRefs } from 'vue'
import getxy from "../../hooks/pagePosition.js"
export default {
    name: 'Next',
    setup(){
        const data = reactive({
            isShow:false,
            page:getxy()
        })
        function modaClick(){
            data.isShow = true
        }
        function closeModal(){
            data.isShow = false
        }
        return{
            ...toRefs(data),
            modaClick,
            closeModal
        }
    }
}
</script>

<style scoped>
.modal{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0,0,0,.5);
}
</style>
