/*
 * @Author: renlina
 * @Date: 2022-02-08 14:02:02
 * @LastEditors: renlina
 * @LastEditTime: 2022-02-08 14:07:30
 * @Description: 
 */
import axios from './axios'
export const TestApi = async function (params:any) {
    console.log(params,'params==')
    // const resp = {a:111}
    const resp = await axios.post('/dmz/v1/product/search',params)
    console.log(resp,'resp====')
    return resp
}