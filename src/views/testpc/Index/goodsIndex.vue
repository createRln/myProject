<!--
 * @Author: renlina
 * @Date: 2021-12-29 13:38:47
 * @LastEditors: renlina
 * @LastEditTime: 2022-02-11 14:17:37
 * @Description: 
-->
<template>
    <div>
        <div class="title">我是需要转换的标题</div>
        <el-row class="search_title">
            <el-col :span="8">
                <h2>选品库11</h2>
            </el-col>
            <el-col :span="8">
                <div class="search_input">
                    <el-input class="input" v-model="searchValue"  clearable @input="searchValueInput" placeholder="请输入关键词" />
                    <el-icon :size="20" :color="'blue'">
                        <search ></search>
                    </el-icon>
                </div>
            </el-col>
            <el-col :span="8"></el-col>
        </el-row>
    </div>
</template>

<script>
import {defineComponent,ref,toRefs,reactive,onMounted,getCurrentInstance} from 'vue'
import {Search } from '@element-plus/icons-vue'
import { TestApi } from '@axios/api'
import LOADING from '@components/Loading/index'
import TOAST from '@components/Toast/index'
// import LOADING from '@components/Loading/loading.js'
export default defineComponent({
    components:{
        Search
    },
    methods:{
        
    },
    setup(){
        // setTimeout(()=>{
        //     LOADING.hide()
        // },3000)
        // TOAST({
        //     message:'传过来的',
        //     isSucc:false,
        //     duration:3000,
        //     onClose:function(){
        //         console.log('关闭了关闭了')
        //     }
        // })
        // instance.proxy
        let searchValue = ref(false)
        const searchValueInput = (value)=>{
            value = value.trim()
            searchValue.value = value
        }
        onMounted(async()=>{
            LOADING.show()
            let res = await TestApi({'参数':'canshu'})
            LOADING.hide()
            console.log(res,'res===')
        })
        return{
            searchValue,
            searchValueInput
        }
    }
})
</script>

<style lang="less" scoped>
.title{
    font-size: 64px;
}
.search_title{
    align-items: center;
    .search_input{
        display: flex;
        align-items: center;
    }
    
}
</style>
