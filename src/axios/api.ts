/*
 * @Author: renlina
 * @Date: 2022-02-08 14:02:02
 * @LastEditors: renlina
 * @LastEditTime: 2022-02-08 15:50:47
 * @Description: 
 */
import axios from './axios'
export const TestApi = async function (params:any) {
    const resp = await axios.post('/dmz/v1/product/search',params)
    return resp
}