<!--
 * @Author: renlina
 * @Date: 2021-11-16 15:45:28
 * @LastEditors: renlina
 * @LastEditTime: 2021-11-17 10:24:18
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
       
        // 画统计图
        Ctx.beginPath()
        Ctx.moveTo(10,200)
        Ctx.lineTo(10,580)
        Ctx.lineTo(500,580)
        Ctx.stroke()
        Ctx.closePath()


        // Ctx.fillRect(30,400,20,180)
        // Ctx.fillRect(60,400,20,180)
        // Ctx.fillRect(90,400,20,180)
        // Ctx.fillRect(120,400,20,180)
        // Ctx.fillRect(150,400,20,180)
        // Ctx.fillRect(180,400,20,180)
        // Ctx.fillRect(210,400,20,180)


        for (let i =0; i<7;i++){
            let randomheight = Math.random()*370 + 10
            // 先求出0-十六进制ffffff之间的随机数，然后取整之后在转换为16进制数
            Ctx.fillStyle = '#' + parseInt(Math.random()*0xffffff).toString(16)
            Ctx.fillRect(30+30*i,580 - randomheight,20,randomheight)
        }

        // Ctx.fillRect(30,400,20,180)

    
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