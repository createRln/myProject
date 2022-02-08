/*
 * @Author: renlina
 * @Date: 2022-02-08 17:05:03
 * @LastEditors: renlina
 * @LastEditTime: 2022-02-08 17:39:27
 * @Description: 
 */
import { createRouter, createWebHistory } from 'vue-router'
import IndexRoutes from './routes'
const routes = [...IndexRoutes]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((from,to,next)=>{
    to.meta.title ? (document.title = to.meta.title)  : (document.title = '')
    next()

})
export default router