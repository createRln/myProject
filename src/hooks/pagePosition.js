/*
 * @Author: renlina
 * @Date: 2021-10-12 19:08:53
 * @LastEditors: renlina
 * @LastEditTime: 2021-10-12 19:17:11
 * @Description: 
 */
import {onBeforeUnmount,onMounted,ref} from "vue";
export default function () {
    let x = ref("0")
    let y = ref("0")
    let pageHander = (e)=>{
        console.log(e)
        x.value=e.pageX;
        y.value=e.pageY;
    }
    // 需要使用生命周期函数，页面加载完成
    onMounted(()=>{
        window.addEventListener("click",pageHander)
    })
    // 在页面即将卸载时，移除事件的监听
    onBeforeUnmount(()=>{
        window.removeEventListener("click",pageHander )
    })
    return {x,y}
}