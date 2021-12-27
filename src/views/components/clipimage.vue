<!--
 * @Author: renlina
 * @Date: 2021-11-10 19:00:00
 * @LastEditors: renlina
 * @LastEditTime: 2021-11-16 16:03:49
 * @Description: 裁剪组件
-->
<template>
  <div class="bord">
      <div class="detail" @touchstart="touchstart" @touchmove="touchmove">
          <canvas :width="cW " :height="cH" ref="canvas" ></canvas>
          <div v-if="showMark" class="mark" :style="{width: mW+ 'px',height: mH + 'px',left: mL+ 'px', top: mT+ 'px'}"></div>
      </div>
      <div class="btns">
          <div class="input">
            <input  type="file" accept="image/*" ref="uploadfile" @change="fileOnchange">
          </div>
          <button>选择图片</button>
          <button @click="changeImage(1)">放大</button>
          <button @click="changeImage(0)">缩小</button>
          <button @click="keepSave">保存图片</button>
      </div>
  </div>
</template>

<script>
import { reactive, ref,toRefs ,defineComponent,} from 'vue'

export default defineComponent ({
    emits:["transmit"],
    setup(prpos,{emit}){
        let winW = document.documentElement.clientWidth
        let canvasW = winW 
        let  markW = canvasW * 0.7
        console.log(winW,canvasW,markW)
        const data = reactive({
            cW : canvasW,
            cH : canvasW,
            mW : markW,
            mH : markW,
            mL : (canvasW - markW)/2,
            mT : (canvasW - markW)/2,
            showMark: false,
            iW: 0,
            iH: 0,
            iL: 0,
            iT: 0,
            IMAGE:null,
            CTX:null,
            curX:0,
            curY:0,
            newDataUrl:null,
        })
        let uploadfile = ref(null)
        const fileOnchange = (evt)=>{
            data.showMark  = true
            // 获取上传返回的文件
            let file = uploadfile.value.files[0]
            if(!file) return
            // 将文件设置成base64的格式
            let fileExample = new FileReader()
            fileExample.readAsDataURL(file)
            fileExample.onload = (e)=>{
                // 创建图片，进行赋值
                data.IMAGE = new Image()
                data.IMAGE.src = e.target.result
                data.IMAGE.onload = ()=>{
                    data.iW = data.IMAGE.width
                    data.iH = data.IMAGE.height
                    // 设置图片最宽等于画布的宽，高等比缩放，最高等于画布的高，宽等比缩放
                    if(data.iW > data.cW){
                        let n = data.iW / data.cW //计算图片比例
                        data.iW = data.cW
                        data.iH = data.iH / n
                    }else if(data.iH > data.cH){
                        let n = data.iH / data.cH
                        data.iH = data.cH
                        data.iW = data.iW / n
                    }
                    data.iL = (data.cW - data.iW)/2 //计算图片居中的位置
                    data.iT = (data.cW - data.iW)/2
                    toDrawImage()
                }
            }

        }
        const changeImage = (flag)=>{
            if(!data.IMAGE) return
            let n = data.iW / data.iH
            let scaleW = 20 
            let scaleH = scaleW / n 
            if(flag){
                // 放大
                data.iW += scaleW
                data.iH += scaleH
            }else{
                // 缩小
                data.iW -= scaleW
                data.iH -= scaleH
            }
            toDrawImage()
        }
        const touchstart = (e)=>{
            if(!data.IMAGE) return
            data.curX = e.touches[0].clientX
            data.curY = e.touches[0].clientY
        }
        const touchmove = (e)=>{
            if(!data.IMAGE) return
            let moveX = e.touches[0].clientX - data.curX
            let moveY = e.touches[0].clientY - data.curY
            data.iL = data.iL + moveX
            data.iT = data.iT + moveY
            toDrawImage()
            data.curX = e.touches[0].clientX
            data.curY = e.touches[0].clientY
        }
        const keepSave = ()=>{
            if(!data.IMAGE) return
            // 利用canvas画布获取指定区域的图像信息
            let newImageData = data.CTX.getImageData(data.mL,data.mT,data.mW,data.mH)
            // 创建新的画布
            let newCanvas = document.createElement('canvas')
            newCanvas.width = data.mW
            newCanvas.height = data.mH
            let newCanvasContext = newCanvas.getContext('2d')
            // 把像素信息放在画布中
            newCanvasContext.putImageData(newImageData,0,0,0,0,data.mW,data.mH)
            data.newDataUrl = newCanvas.toDataURL("image/png")
            emit("transmit",data.newDataUrl)

        }
        let canvas = ref(null)
        const toDrawImage = ()=>{
            // 创建2d画布
            data.CTX = canvas.value.getContext("2d")
            // console.log(canvas)
        //    清除画布内容，方便下次在进行绘制
            data.CTX.clearRect(0,0,data.cW,data.cH)
        //    CTX.drawImage(data.Image,data.iL,data.iT,data.iW,data.iH)
            data.CTX.drawImage(data.IMAGE,data.iL,data.iT,data.iW,data.iH)

        }
        return{
            ...toRefs(data),
            fileOnchange,
            uploadfile,
            changeImage,
            touchstart,
            touchmove,
            keepSave,
            canvas
        }
    }

})
</script>
<style lang="less" scoped>
.bord{
    box-sizing: border-box;
    .detail{
        box-sizing: border-box;
        position: relative;
        border: 1px solid #999;
        margin-bottom: 20px;
        .mark{
            box-sizing: border-box;
            width: 70%;
            height: 70%;
            box-sizing: border-box;
            border: 1px solid #999;
            background: rgba(0,0,0,0.2);
            position: absolute;

        }
    }
    .btns{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        position: relative;
         .input{
            width: 80px;
            height: 40px;
            position: absolute;
            left: 0;
            opacity: 0;
            overflow: hidden;
            
        }
        button{
            width: 80px;
            height: 40px;
            background-color: antiquewhite;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
   
}
</style>