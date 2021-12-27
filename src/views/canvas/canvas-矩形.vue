<!--
 * @Author: renlina
 * @Date: 2021-11-16 15:45:28
 * @LastEditors: renlina
 * @LastEditTime: 2021-11-16 20:06:22
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
        Ctx.rect(100,100,100,100)
        Ctx.fillStyle = 'green'
        Ctx.fill()
        Ctx.strokeStyle = "red"
        Ctx.lineWidth = 1
        Ctx.stroke()
        // 清除画布
        Ctx.clearRect(120,120,60,60)

        // 画仅支持实心的矩形
        Ctx.fillStyle = "gold"
        Ctx.fillRect(20,200,100,100)
        // 画一个仅支持边框的矩形
        Ctx.strokeStyle = "blue"
        Ctx.strokeRect(120,200,100,100)


        // 画统计图
        Ctx.beginPath()
        Ctx.moveTo(10,350)
        Ctx.lineTo(10,580)
        Ctx.lineTo(500,580)
        Ctx.stroke()
        Ctx.closePath()

        Ctx.fillRect(30,400,20,180)

    
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