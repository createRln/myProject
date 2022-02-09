/*
 * @Author: renlina
 * @Date: 2022-02-09 10:29:41
 * @LastEditors: renlina
 * @LastEditTime: 2022-02-09 16:56:48
 * @Description: 
 * 使用方式：
 * import LOADING from '@components/Loading/index'
 * LOADING.show() //表示展示loading态
 * LOADING.hide() //表示隐藏loading态
 */
import { createVNode, render } from 'vue'
import loadingVue from './loading.vue'
const mountLoading = function (opts) {
    let options = {
        ...opts,
    }
    if(document.getElementById('myloading')) return
    const container = document.createElement('div')
    const vm  = createVNode(loadingVue, options)

    vm.props.onDestroy = () => {
        render(null, container)
    }

    render(vm, container)
    document.body.appendChild(container.firstChild)
    let obj={}
    obj.show = ()=>{
        vm.component.proxy.show()
    }
    obj.hide = ()=>{
        vm.component.proxy.hide()
    }
    return obj
}
let LOADING=mountLoading()
export default LOADING