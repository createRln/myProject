<!--
 * @Author: renlina
 * @Date: 2021-12-20 15:07:51
 * @LastEditors: renlina
 * @LastEditTime: 2021-12-20 16:49:26
 * @Description: 线性小球
-->
<template>
    <div class="index">
        <div>线性小球</div>
        <canvas ref="canvas" width="600" height="600" style="border: 1px solid red;">如果显示这段文字代表你不支持哈哈哈</canvas>
    </div>
</template>

<script>
import { ref,toRefs,reactive,onMounted,defineComponent} from 'vue'
export default defineComponent({
    setup(){
        const data=reactive({
            CTX:null,
            W:600,
            H: 600,
        })
        const canvas = ref(null)
        function Tcolor(){
            return '#' + parseInt(Math.random()*0xffffff).toString(16)
        }
        const textarr=['1号种子选手','1号种子选手','3号种子选手','4号种子选手','5号种子选手','6号种子选手','7号种子选手','8号种子选手','9号种子选手','10号种子选手',]
        const toshow = ()=>{
            let ballList = []
            for(let i = 0;i<10;i++){
                let ball = new Ball(textarr[i])
                ball.show()
                ballList.push(ball)
                for(let j=0;j<i; j++){
                    var preBall=ballList[j]
                    drawLine(ball.x,ball.y,preBall.x,preBall.y,Tcolor())
                }
            }
            setInterval(()=>{
                data.CTX.clearRect(0,0,data.W,data.H)
                ballList.forEach((item,index)=>{
                    item.show()
                    for(let j=0;j<index; j++){
                        var preBall=ballList[j]
                        drawLine(item.x,item.y,preBall.x,preBall.y,Tcolor())
                    }
                })
            },50)
            
        }
        onMounted(()=>{
            data.CTX = canvas.value.getContext('2d')
            toshow()
            // drawLine(20,20,100,20,'red')
            // drawCircle(100,100,50)
            // drawText(200,150,'你好奶豆子')
        })
        
        // 产生随机数
        function suijiNum(num){
            return parseInt(Math.random()*num)
        }
        // 创建一个小球的类
        function Ball (text){
            this.x = suijiNum(550) + 50
            this.y = suijiNum(550) + 50
            this.r = suijiNum(30) +10
            this.speedX = suijiNum(10)
            this.speedY = suijiNum(10)
            this.color = '#' + parseInt(Math.random()*0xffffff).toString(16)
            this.text = text
        }
        Ball.prototype.show = function(){
            this.run()
            drawCircle(this.x,this.y,this.r,this.color)
            drawText(this.x + this.r,this.y,this.text)
        }
        Ball.prototype.run = function(){
            if(this.x - this.r <= 0 || this.x + this.r >= data.W){
                this.speedX = -this.speedX
            }
            this.x = this.x + this.speedX
            if(this.y - this.r <= 0 || this.y + this.r >= data.H){
                this.speedY = -this.speedY
            }
            this.y = this.y + this.speedY
        }
        // 直线
        function drawLine(beginX,beginY,toX,toY,color){
            console.log(beginX,beginY,toX,toY)
            let ctx = data.CTX
            ctx.beginPath()
            ctx.moveTo(beginX,beginY)
            ctx.lineTo(toX,toY)
            ctx.strokeStyle=color || 'red'
            ctx.stroke()
            ctx.lineWidth = 1
            ctx.closePath()
            
        }
        // 圆形
        function drawCircle(x,y,r,color){
            let ctx = data.CTX
            ctx.beginPath()
            ctx.arc(x,y,r,0,2*Math.PI,true)
            ctx.fillStyle = color || 'blue'
            ctx.fill()
            ctx.closePath()
        }
        // 文字
        function drawText(x,y,text){
            let ctx = data.CTX
            ctx.beginPath()
            ctx.font = "20px 微软雅黑"
            ctx.textAlign = "top"
            ctx.textBaseline = "middle"
            ctx.fillStyle = "red"
            ctx.fillText(text,x,y)
            ctx.closePath()
        }
        return{
            ...toRefs(data),
            canvas,
            Ball,
            toshow,
            drawLine
        }
    }
})
</script>
<style lang="less" scoped>
.index{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
</style>