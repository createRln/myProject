/*
 * @Author: renlina
 * @Date: 2021-08-16 19:06:22
 * @LastEditors: renlina
 * @LastEditTime: 2022-02-09 16:22:50
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@styles/index.css'
//组件引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 全局组件的引入
// import Loading from '@components/Loading/index'
// import Toast from '@components/Toast/index'
const app = createApp(App)
// app.use(Toast)
// app.use(Loading)
app.use(ElementPlus)
app.use(router)
app.mount('#app')

