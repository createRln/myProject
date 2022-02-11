/*
 * @Author: renlina
 * @Date: 2022-02-08 10:39:09
 * @LastEditors: renlina
 * @LastEditTime: 2022-02-11 14:19:55
 * @Description: 
 */
import axios from 'axios'
import qs from 'qs'
import Toast from '@components/Toast/index'
import Loading from '@components/Loading/index'
let nAxios = axios.create({
    withCredentials: true,
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    }
})
const errMsg = {
    400: '错误请求',
    401: '身份验证错误',
    403: '禁止访问',
    404: '资源未找到',
    405: '方法禁用',
    406: '不接受的请求',
    407: '需要代理授权',
    408: '请求超时',
    409: '请求时发生冲突',
    410: '请求资源已删除',
    411: '需要有效长度',
    412: '未满足前提条件',
    413: '请求实体过大',
    414: '请求的 URI 过长',
    415: '不支持的媒体类型',
    416: '请求范围不符合要求',
    417: '未满足期望值',
    500: '服务器内部错误',
    501: '尚未实施',
    502: '错误网关',
    503: '服务不可用',
    504: '网关超时',
    505: 'HTTP 版本不受支持'
  }
let cancel: any
const promiseAll:any = {}
nAxios.interceptors.request.use((config)=>{
    config.method === 'post' ?
    config.data = qs.stringify({...config.data},{arrayFormat: 'brackets'})
    : config.params = {...config.params}
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    if(promiseAll[config.url as string]){
        promiseAll[config.url as string]('操作取消')
        promiseAll[config.url as string] = cancel
    }else{
        promiseAll[config.url as string] = cancel
    }
    return config
},error =>{
    return Promise.reject(error)
})

nAxios.interceptors.response.use(response =>{
    if(!response.data) return Promise.reject(JSON.stringify(response))
    const status = response.status
    if(status){
        Loading.hide()
        switch(status){
            case 0:
                break;
            case 9998://未登录
                let currentpath = encodeURIComponent(location.href)
                let url = ''
                // 生产环境
                if(process.env.NODE_ENV == 'production'){
                    const from =response.data.data.from || 0
                    if(from !== undefined || from !== null || from !== '' ){
                        if(currentpath.includes('%3F')){
                            currentpath += '&from=' + from
                        }else{
                            currentpath += '?from=' + from
                        }
                    }
                }
                url = window.location.protocol + '//' + window.location.host + '/#/account/login?redirect=' + currentpath
                window.location.replace(url)
                break;
            default:
                //弹窗提醒
                break;
        }
    }
    
    return response

},err =>{
    if(err && err.response){
        switch(err.response.status){
            default:
                Loading.hide()
                Toast({
                    message:err.response.status + errMsg[err.response.status]
                })
                break;
        }
    }
    return Promise.reject(err.response)
})


export default {
    post(url:any, data:any ){
        return new Promise((resolve,reject)=>{
            nAxios.post(url,data).then(res =>{
                resolve(res)
            }).catch(err =>{
                console.log(err)
            }).finally(()=>{
                // 清除loading态
            })
        })
    },
    get(url:any,params:any){
        return new Promise((resolve,reject)=>{
            nAxios.get(url,params).then(res =>{
                resolve(res)
            }).catch(err =>{
                console.log(err)
            }).finally(()=>{
                // 清除loading态度
            })
        })
    }
}