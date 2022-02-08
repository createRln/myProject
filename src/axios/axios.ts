/*
 * @Author: renlina
 * @Date: 2022-02-08 10:39:09
 * @LastEditors: renlina
 * @LastEditTime: 2022-02-08 11:06:57
 * @Description: 
 */
import axios from 'axios'
import { reject, resolve } from 'core-js/fn/promise'

let nAxios = axios.create({
    withCredentials: true,
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    }
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