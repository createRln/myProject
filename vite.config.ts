/*
 * @Author: renlina
 * @Date: 2022-02-08 11:41:02
 * @LastEditors: renlina
 * @LastEditTime: 2022-02-08 14:38:57
 * @Description: 
 */
// import { defineConfig } from 'vite';  // 帮手函数，这样不用 jsdoc 注解也可以获取类型提示
import { resolve } from 'path'; // 主要用于alias文件路径别名
import vue from '@vitejs/plugin-vue'; 

function pathResolve(dir){
    return resolve(__dirname,dir)
}
module.exports = {
    base: './',
    plugin:[vue()],// 配置需要使用的插件列表，这里将vue添加进去
    resolve:{
        alias:{
            "@":pathResolve("src/"),
            "@axios":pathResolve("src/axios"),
            "@router":pathResolve("src/router"),
            "@views":pathResolve("src/views"),
            "@components":pathResolve("src/components"),
        }
    },
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue ({ file }) {
                            return file.indexOf('vant') !== -1 ? 37.5 : 75
                        },
                        propList: ['*'], // 设置px转换成rem的属性值，*表示所有属性的px转换为rem
                        minPixelValue: 12, //px小于12的不会被转换
                    })
                ]
            }
        }
    },
    server:{
        host:'0.0.0.0',
        proxy:{
            '/dmz':{
                target:"http://yapi.rong360.com/mock/1939",//代理的host
                changeOrigin:true,//意味着host设置成target
                secure:true
            }
        }
    },
    build: {
        cssCodeSplit: false,//代码分割，一般指 webpack 进行打包时的代码分割功能
    }
}
// export default defineConfig ({
    
// })

