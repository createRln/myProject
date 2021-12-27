<!--
 * @Author: renlina
 * @Date: 2021-08-16 15:07:54
 * @LastEditors: renlina
 * @LastEditTime: 2021-08-16 20:00:09
 * @Description: 
-->
<template>
  <div>
      <div>
          <div>新的数值：{{newval}}</div>
          <div> 旧的数值：{{old}}</div>
          <input type="text" v-model="name">
      </div>
      <div v-for="(item,index) in nameArr" :key= "index">
          <p>{{item}}</p>
      </div>
      <button @click="pushClick">点击push arr</button>
      <button @click="nextPage">点击跳转下一页{{nameChange}}</button>
      <div>{{bbb}}</div>
  </div>
</template>

<script>
import { reactive ,toRefs, computed,watch,watchEffect} from 'vue'
import { useRouter,useRoute } from 'vue-router'
export default {
    name: 'Test',
    setup(){
        const data = reactive({
            name: '我是啊啊啊',
            nameArr:[],
            aaa: 1,
            bbb:0,
            newval: '',
            old: ''
        })
        const route = useRoute()
        const router = useRouter()
        
        // alert (route.name)
        function pushClick(){
            data.nameArr.push(data.name)
            data.name = ''
            data.aaa += 1
        }
        const nameChange = computed(()=>{
                return data.aaa 
        })
        const watchName = watch(()=>data.name,(val,old)=>{
            data.newval = val
            data.old = old
        })
        watchEffect(()=>{
            data.bbb = data.aaa + 1
        })
        
        function nextPage(){
            router.push({
                path: '/next',
            })
        }
        return {
            ...toRefs(data),
            nameChange,
            pushClick,
            nextPage,
        }
    }
}
</script>

<style>

</style>