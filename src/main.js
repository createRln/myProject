/*
 * @Author: renlina
 * @Date: 2021-08-16 19:06:22
 * @LastEditors: renlina
 * @LastEditTime: 2022-02-08 18:09:53
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@styles/index.css'
//组件引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.mount('#app')

