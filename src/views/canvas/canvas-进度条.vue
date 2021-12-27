<!--
 * @Author: renlina
 * @Date: 2021-11-16 15:45:28
 * @LastEditors: renlina
 * @LastEditTime: 2021-11-17 15:03:13
 * @Description: canvas的圆形进度条
-->
<template>
  <div class="box">
        <canvas width="300" height="600" class="canvas" ref="canvas" >你不支持哈</canvas>
        <div class="num">{{((curNum / maxNum) * 100).toFixed(2)}} %</div>
  </div>
</template>

<script>
import { reactive, ref,toRefs ,defineComponent,onMounted} from 'vue'

export default defineComponent({
  setup(){
    const data = reactive({
        Ctx:null,
        maxNum: 1000,
        curNum: 400,
    })
    let  canvas = ref(null)
    onMounted(()=>{
        // 画进度条
        data.Ctx = canvas.value.getContext("2d")
        data.Ctx.beginPath()
        brawCircle({
            centerX : 120,
            centerY : 120,
            radius : 50,
            startAngle : 0 - Math.PI /2,
            endAngle :  Math.PI * 1.5,
            type : false,
            color: '#e2e2e2',
            lineWidth : 10,
        })
        let deg = Math.PI * 2 / 100
        let count = 0
        let timer = null
        timer = setInterval(()=>{
                count ++
                brawCircle({
                    centerX : 120,
                    centerY : 120,
                    radius : 50,
                    startAngle : 0 - Math.PI /2,
                    endAngle :  count * deg - Math.PI /2,
                    type : false,
                    color: 'gold',
                    lineWidth : 10,
                })
                console.log('没暂停==')
        if(count >= (data.curNum / data.maxNum * 100)){
                console.log('暂停了')
                clearInterval(timer)
            }
        },10)
    })
    const brawCircle = ({centerX,centerY,radius,startAngle,endAngle,type = false,color = 'red',lineWidth = 1,isFill = false})=>{
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
.box{
    .canvas{
        border: 2px solid #666;
    }
    .num{
        position: absolute;
        top: 165px;
        left: 130px;
        color: red;
    }

}

</style>