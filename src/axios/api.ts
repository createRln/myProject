/*
 * @Author: renlina
 * @Date: 2022-02-08 14:02:02
 * @LastEditors: renlina
 * @LastEditTime: 2022-02-11 14:10:02
 * @Description: 
 */
import axios from './axios'
export const TestApi = async function (params:any) {
    const resp = await axios.post('mjdcjdkcj k',params)
    return resp
}