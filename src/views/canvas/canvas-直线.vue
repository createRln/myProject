<!--
 * @Author: renlina
 * @Date: 2021-11-16 15:45:28
 * @LastEditors: renlina
 * @LastEditTime: 2021-11-16 18:31:16
 * @Description: canvas的基本用法
-->
<template>
  <div >
      <canvas width="300" height="300" class="canvas" ref="canvas" >你不支持哈</canvas>
  </div>
</template>

<script>
import { reactive, ref,toRefs ,defineComponent,onMounted} from 'vue'

export default defineComponent({
  setup(){
    const data = reactive({
      mydata: '1'
    })
    let  canvas = ref(null)
    let drawLine = (beginX,beginY,toX,toY,color,width)=>{
      let Ctx = canvas.value.getContext("2d")
      Ctx.beginPath()
      Ctx.moveTo(beginX,beginY)
      Ctx.lineTo(toX,toY)
      Ctx.strokeStyle = color
      Ctx.lineWidth = width
      Ctx.stroke()
      Ctx.closePath()

    }
    onMounted(()=>{
      drawLine(20,20,100,20,'red')
      drawLine(100,20,100,100,'green')
      drawLine(100,100,20,100,'gray')
      drawLine(20,100,20,20,'blue')
      for( let i = 0 ;i<20; i++){
        // 虚线
        drawLine(30+10*i,30,35+10*i,30,"red")
        // 斜虚线
        drawLine(30+10*i,30+10*i,35+10*i,35+10*i,"red")
      }
     

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