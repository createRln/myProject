<!--
 * @Author: renlina
 * @Date: 2021-11-24 14:33:26
 * @LastEditors: renlina
 * @LastEditTime: 2021-12-27 15:39:08
 * @Description: 文字
-->
<template>
    <div >
      <canvas width="800" height="600" class="canvas" ref="canvas" >你不支持哈</canvas>
      <div>11</div>
  </div>
</template>

<script>
import { reactive, ref,toRefs ,defineComponent,onMounted} from 'vue'

export default defineComponent({
    setup(){
         const data = reactive({
                Ctx: null 
            })
            let canvas = ref(null)
            onMounted(()=>{
                let ctx = data.Ctx
                ctx = canvas.value.getContext("2d")
                let img = new Image()
                img.src = ''
                img.onload = (e)=>{
                    console.log(img.width,img.height,'0000')
                    ctx.drawImage(img,0,0)
                }
                
            })
        return {
            ...toRefs(data),
            canvas
        }
    }
})
</script>


<style lang="less" scoped>
.canvas{
  border: 2px solid #666;
}
</style>
