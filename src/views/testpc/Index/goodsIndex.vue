<!--
 * @Author: renlina
 * @Date: 2021-12-29 13:38:47
 * @LastEditors: renlina
 * @LastEditTime: 2022-02-08 14:40:15
 * @Description: 
-->
<template>
    <div>
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
import {defineComponent,ref,toRefs,reactive,onMounted} from 'vue'
import {Search } from '@element-plus/icons-vue'
// import { TestApi } from '@axios/api'
export default defineComponent({
    components:{
        Search
    },
    setup(){
        const searchValue = ref('')
        const searchValueInput = (value)=>{
            value = value.trim()
            searchValue.value = value
        }
        onMounted(()=>{
            console.log('1111111')
            // let res = TestApi({'参数':'canshu'})
            // console.log(res,'res===')
        })
        return{
            searchValue,
            searchValueInput
        }
    }
})
</script>

<style lang="less" scoped>
.search_title{
    align-items: center;
    .search_input{
        display: flex;
        align-items: center;
    }
    
}
</style>
