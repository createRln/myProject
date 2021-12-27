<!--
 * @Author: renlina
 * @Date: 2021-11-16 15:45:28
 * @LastEditors: renlina
 * @LastEditTime: 2021-11-17 16:47:57
 * @Description: canvas的碰撞检测
-->
<template>
  <div class="box">
        <canvas width="300" height="600" class="canvas" ref="canvas" >你不支持哈</canvas>
        <!-- <div class="num">{{((curNum / maxNum) * 100).toFixed(2)}} %</div> -->
  </div>
</template>

<script>
import { reactive, ref,toRefs ,defineComponent,onMounted} from 'vue'

export default defineComponent({
  setup(){
    const data = reactive({
        Ctx:null,
        W: 300,
        H: 600,
        speedX: 10,
        speedY: 10,
        r: 20,
        curX: 50,
        curY: 50,
        timer : null
    })
    let  canvas = ref(null)
    onMounted(()=>{
        // 碰撞检测
        data.Ctx = canvas.value.getContext("2d")
        // for( let i=0; i <10; i ++){
        //    let 
        //         curX = Math.random() * (data.W - data.r) + data.r,
        //         curY = Math.random() * (data.H - data.r) + data.r;
        //         // speedX = Math.random() * (data.speedX - 5) + 5,
        //         // speedY = Math.random() * (data.speedY - 5) + 5
        // }
        toDrawCirle(data.W,data.H,data.speedX,data.speedY,data.r)
    })
    const toDrawCirle = (W,H,speedX,speedY,r)=>{
        let curX = data.curX
        let curY = data.curY
        data.timer = setInterval(()=>{
            data.Ctx.clearRect(0,0,W,H)
            // for(let i =0;i<1; i ++){
                // let curX = data.curX
                // let curY = data.curY
                // let curX = Math.random() * (data.W ),
                //     curY = Math.random() * (data.H);
                if(curX -r <= 0 || curX + r >= W){
                    speedX = -speedX
                }
                curX = curX + speedX
                if(curY - r <= 0 || curY + r >= H){
                    speedY = -speedY
                }
                curY = curY + speedY
                brawCircle({
                    centerX : curX,
                    centerY : curY,
                    radius : r,
                    startAngle : 0 ,
                    endAngle :  Math.PI * 2,
                    type : false,
                    color: 'pink',
                    isFill : true
                })
            // }
            // clearInterval(data.timer)
            
        },10)
        
    }
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