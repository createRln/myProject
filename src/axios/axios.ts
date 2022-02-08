/*
 * @Author: renlina
 * @Date: 2022-02-08 10:39:09
 * @LastEditors: renlina
 * @LastEditTime: 2022-02-08 17:16:38
 * @Description: 
 */
import axios from 'axios'
import qs from 'qs'
let nAxios = axios.create({
    withCredentials: true,
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    }
})
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
    return response

},err =>{
    if(err && err.response){
        switch(err.response.status){
            default:
                // 弹窗提示，
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