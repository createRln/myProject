<!--
 * @Author: renlina
 * @Date: 2021-08-16 15:22:04
 * @LastEditors: renlina
 * @LastEditTime: 2021-10-12 18:36:26
 * @Description: 
-->
<template>
    <div>
        <button @click="modaClick">点我弹出遮罩层</button>
        <teleport to='body'>
            <div class="modal" v-if="isShow" @click="closeModal">
                ddd 
            </div>
        </teleport>
    </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
export default {
    name: 'Next',
    setup(){
        const data = reactive({
            isShow:false
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

<style lang="less" scoped>
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
