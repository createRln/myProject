/*
 * @Author: renlina
 * @Date: 2022-02-08 15:30:02
 * @LastEditors: renlina
 * @LastEditTime: 2022-02-11 15:18:19
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'; // 主要用于alias文件路径别名
import postCssPxToRem from "postcss-pxtorem"; //注意postCssPxToRem在vue2中是直接require的形式，但是这种方式在vue3中不被支持，需要改成import的形式

const Resolve = (dir)=>{
  return resolve(__dirname,dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      "@":Resolve("src/"),
      "@axios":Resolve("src/axios"),
      "@views":Resolve("src/views"),
      "@styles":Resolve("src/styles"),
      "@components":Resolve("src/components"),
    }
    
  },
  css: {
    postcss: {
        plugins: [
            postCssPxToRem({
              // rootValue: 37.5,
              rootValue ({ file }) {
                return file.indexOf('element') !== -1 ? 18.75 : 37.5
              }, // （设计稿/10）1rem的大小
              propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
              minPixelValue: 12,
            })
        ]
    }
},
  server:{
    host:'0.0.0.0',
    proxy:{
      '/dmz':{
        target:'aaaa',
        changeOrigin:true,
        secure:true
      }
    }
  },
  build:{
    cssCodeSplit:false,
    //开始 解决Some chunks are larger than 500 KiB after minification    https://blog.csdn.net/Dawnchen1/article/details/118994062
    chunkSizeWarningLimit:1500,
    rollupOptions:{
      output:{
        manualChunks(id) {
          if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
    //开始 解决Some chunks are larger than 500 KiB after minification
  }
})
