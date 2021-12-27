<!--
 * @Author: renlina
 * @Date: 2021-11-16 15:45:28
 * @LastEditors: renlina
 * @LastEditTime: 2021-11-22 19:05:24
 * @Description: canvas的多只球碰撞检测
-->
<template>
  <div class="box">
        <canvas width="800" height="800" class="canvas" ref="canvas" >你不支持哈</canvas>
        <!-- <div class="num">{{((curNum / maxNum) * 100).toFixed(2)}} %</div> -->
  </div>
</template>

<script>
import { reactive, ref,toRefs ,defineComponent,onMounted} from 'vue'

export default defineComponent({
  setup(){
    const data = reactive({
        Ctx:null,
        W: 800,
        H: 800,
        timer : null,
        ballArr : []
    })
    let  canvas = ref(null)
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
    const random = (num)=>{
        return Math.random() * num
    }
    function createBall(){
        this.X = random(500) + 60,
        this.Y = random(500) + 60,
        this.speedX = random(3)+2
        this.speedY = random(3)+1
        this.radius = random(50) + 10,
        this.color = '#' +  parseInt(random(0xffffff) ).toString(16)
    }
    createBall.prototype.show = function(){
        this.run()

        brawCircle({
            centerX : this.X,
            centerY: this.Y,
            radius: this.radius,
            startAngle: 0,
            endAngle: Math.PI * 2,
            isFill: true,
            color: this.color
        })
    }
    createBall.prototype.run = function(){
        console.log('qiqiqi')
       
            if(this.X - this.radius <= 0 || this.X + this.radius >= data.W ){
                this.speedX = -this.speedX
            }
            this.X += this.speedX
            if(this.Y - this.radius <= 0 || this.Y + this.radius >= data.H ){
                this.speedY = -this.speedY
            }
            this.Y += this.speedY
            // this.show()
        
        
    }
    
    onMounted(()=>{
        data.Ctx = canvas.value.getContext("2d")
        toShow()
        
    })
    const toShow = () =>{
        for(let i = 0; i < 30;i ++){
            let BALL = new createBall()
            data.ballArr.push(BALL)
            BALL.show()

        }
         data.timer = setInterval(()=>{
            data.Ctx.clearRect(0,0,data.W,data.H)
            if(data.ballArr.length > 0){
                data.ballArr.forEach((item,index)=>{
                    // item.run()
                    item.show()
                })
            }
         },5)
        
        console.log(data.ballArr)
        
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