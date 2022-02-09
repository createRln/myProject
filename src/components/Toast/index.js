/*
 * @Author: renlina
 * @Date: 2022-02-09 15:35:10
 * @LastEditors: renlina
 * @LastEditTime: 2022-02-09 16:55:50
 * @Description: 
 * 使用方式：
 * import TOAST from '@components/Toast/index'
 * TOAST({
            message:'传过来的', //需要提示的信息
            isSucc:false, //可以不传。不传默认不显示图标。true是显示成功的图标。false是显示失败的图标
            duration:3000, //延时，可以不传，默认是2秒钟
            onClose:function(){ //toast关闭之后想要执行的一些操作
                console.log('关闭了关闭了')
            }
        })
 */
import { createVNode, render } from "vue";
import ToastVue from './toast.vue'
const TOAST = function(opts){
    const options = {
        ...opts
    }
    if(document.getElementById('mytoast')) return
    const container = document.createElement('div')
    const vm = createVNode(ToastVue,options)
    vm.props.onDestroy = () => {
        render(null, container)
    }
    render(vm,container)
    document.body.appendChild(container.firstChild)
}   
export default TOAST