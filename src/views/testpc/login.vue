<!--
 * @Author: renlina
 * @Date: 2021-12-29 14:40:20
 * @LastEditors: renlina
 * @LastEditTime: 2021-12-29 15:28:00
 * @Description: 登录页面
-->
<template>
    <div class="main">
        <div class="login">
            <el-input v-model="account.accNumber" :maxlength="20" clearable @input="accNumberInput" placeholder="请输入账号" />
            <el-input v-model="account.accPassword" :maxlength="20" clearable @input="accPasswordInput" placeholder="请输入密码" />
            <el-button type="primary" style="width: 100%" @click="toLogin">登录</el-button>
        </div>
    </div>
</template>

<script>
import {defineComponent,ref,toRefs,reactive} from 'vue'
import {useRoute ,useRouter} from 'vue-router'
import { ElMessage } from 'element-plus'
export default defineComponent({
    setup(){
        const data=reactive({
            account:{
                accNumber: '',
                accPassword: '',
            }
        })
        const router = useRouter()
        const toLogin = ()=>{
            let account = data.account.accNumber
            let accPassword = data.account.accPassword
            if(account != '' && accPassword != ''){
                router.push('/goods-index')
            }else{
                ElMessage.error('请先完善个人信息！')
            }
        }
        const accNumberInput = (value)=>{
            value = value.trim()
            data.account.accNumber = value
        }
        const accPasswordInput = (value)=>{
            value = value.trim()
            data.account.accPassword = value
        }
        return{
            toLogin,
            accNumberInput,
            accPasswordInput,
            ...toRefs(data)
        }
    }
})
</script>
<style lang="less" scoped>
.main{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background-image: linear-gradient(90deg, #d8ebf2 1%, #acc2ee 97%);
    .login{
        width: 400px;
        height: 200px;
        border-radius: 5px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
    }
}
</style>