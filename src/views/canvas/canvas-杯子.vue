<!--
 * @Author: renlina
 * @Date: 2021-11-16 15:45:28
 * @LastEditors: renlina
 * @LastEditTime: 2021-11-17 14:09:33
 * @Description: canvas的杯子
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
        Ctx:null
    })
    let  canvas = ref(null)
    onMounted(()=>{
        // 画支持实心和边框的矩形
        data.Ctx = canvas.value.getContext("2d")
        data.Ctx.beginPath()
        data.Ctx.strokeStyle ='gold'
        data.Ctx.stroke()
        data.Ctx.strokeRect(20,125,200,200)
     
        
        // 画烟雾
        for(let i = 0;i < 4; i ++){
                brawCircle({
                    centerX : 45 + i*50,
                    centerY : 50,
                    radius : 25,
                    startAngle : Math.PI * 1.5,
                    endAngle : Math.PI / 2,
                    type : true,
                    color: 'red',
                })
                brawCircle({
                    centerX : 45 + i* 50,
                    centerY : 100,
                    radius : 25,
                    startAngle : Math.PI * 1.5,
                    endAngle : Math.PI / 2,
                    type : false,
                    color: 'red',
                })
        }
        // 画杯子耳朵
        data.Ctx.beginPath()
        // data.Ctx.stroke()
        brawCircle({
            centerX :220,
            centerY : 225,
            radius : 50,
            startAngle : Math.PI * 1.5,
            endAngle : Math.PI / 2,
            type : false,
            color: 'red',
            isFill : true,
            lineWidth: 3,
        })
    
    })
    const brawCircle = ({centerX,centerY,radius,startAngle,endAngle,type = false,color = red,lineWidth = 1,isFill = false})=>{
        let RCtx = data.Ctx
        RCtx.beginPath()
        RCtx.arc(centerX,centerY,radius,startAngle,endAngle,type)
        if (isFill){
            RCtx.fillStyle = color  
            RCtx.fill()
        }else{
            RCtx.strokeStyle = color
        }
        RCtx.lineWidth = lineWidth
        RCtx.stroke()
    }
    
   
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