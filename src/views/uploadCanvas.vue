<!--
 * @Author: renlina
 * @Date: 2021-11-10 18:45:51
 * @LastEditors: renlina
 * @LastEditTime: 2021-11-12 18:13:13
 * @Description: canvas实现图片上传并拖拽剪裁
-->
<template>
  <div class="test">
      <ClipImage @transmit="transmit" v-if="!showImg"></ClipImage>
      <div class="img" v-if="showImg">
          <img :src="dataUrl" alt="">
      </div>
  </div>
</template>

<script>
import ClipImage from './components/clipimage.vue'
import {toRefs,reactive} from 'vue'
export default {
    components:{
        ClipImage,
    },
    setup(){
        const data = reactive({
            showImg:false,
            dataUrl:''
        })
        const transmit = (url)=>{
            if(url){
                data.showImg = true
                data.dataUrl = url
            }
        }
        return{
            ...toRefs(data),
            transmit

        }
    }

}
</script>

<style lang="less" scoped>
.test{
    .img{
        img{
            width: 200px;
            height: 200px;
        }
    }
}
</style>