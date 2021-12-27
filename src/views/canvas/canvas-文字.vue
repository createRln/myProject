<!--
 * @Author: renlina
 * @Date: 2021-11-24 14:33:26
 * @LastEditors: renlina
 * @LastEditTime: 2021-11-24 16:16:51
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
                ctx.font = "100px 微软雅黑"
                // let gradient = ctx.createLinearGradient(0,0,canvas.width,0)
                // gradient.addColorStop('0','yellow')
                // gradient.addColorStop('0.5','red')
                // gradient.addColorStop('1','#666')
                ctx.textAlign = 'center'
                ctx.textBaseline = 'middle'
                ctx.fillStyle = 'red'
                ctx.fillText('你好可爱多',400,100)
                ctx.strokeStyle = '#666'
                ctx.strokeText('我也 u 犹如恶意',400,300,400)
                
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
