<!--
 * @Author: renlina
 * @Date: 2021-11-16 15:45:28
 * @LastEditors: renlina
 * @LastEditTime: 2021-12-20 16:51:48
 * @Description: canvas的矩形+统计图
-->
<template>
  <div >
      <canvas width="300" height="600" class="canvas" ref="canvas" >你不支持哈</canvas>
  </div>
</template>

<script>
import { reactive, ref,toRefs ,defineComponent,onMounted} from 'vue'

export default defineComponent({
  setup(){
    const data = reactive({
    })
    let  canvas = ref(null)
    onMounted(()=>{
        // 画支持实心和边框的矩形
        let Ctx = canvas.value.getContext("2d")
        Ctx.beginPath()
        Ctx.arc(100,100,100,0,Math.PI/2,false)
        Ctx.lineWidth = 2
        Ctx.stroke()
        Ctx.beginPath()
        Ctx.arc(200,100,100,0,Math.PI/2,false)
        Ctx.lineWidth = 2
        Ctx.stroke()
        // Ctx.fillStyle = 'red'
        // Ctx.fill()
        
        Ctx.beginPath()
        Ctx.arc(150,300,50,0,Math.PI*2,false)
        Ctx.stroke()
        Ctx.beginPath()
        Ctx.arc(150,300,100,0,Math.PI*2,false)
        Ctx.stroke()
        Ctx.beginPath()
        Ctx.arc(150,300,150,0,Math.PI*2,false)
        Ctx.stroke()
        Ctx.beginPath()
        Ctx.arc(150,300,100,0,Math.PI*2,false)
        Ctx.stroke()

    
    })
    
   
    return{
      ...toRefs(data),
      canvas,
      // drawLine
    }
  }
}) 
</script>

<style lang="less" scoped>
.canvas{
  border: 2px solid #666;
}
</style>