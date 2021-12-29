/*
 * @Author: renlina
 * @Date: 2021-08-16 19:10:18
 * @LastEditors: renlina
 * @LastEditTime: 2021-12-29 14:44:13
 * @Description: 
 */
import { createRouter, createWebHistory } from 'vue-router'
  // canvas学习
  const routeCanvas = [
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: import(/* webpackChunkName: "about" */ '../views/test/test.vue')
    //   },
    {
        path: '/next',
        name: 'Next',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/test/next.vue')
      },
    {
      path: '/test',
      name: 'Test',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/test/test.vue')
    },
    {
        path: '/aaa',
        name: 'Aaa',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/aaa.vue')
      },
      {
        path: '/detail-img',
        name: 'DetailImg',
        component: () => import(/* webpackChunkName: "about" */ '../views/uploadCanvas.vue')
      },
      {
        path: '/canvas',
        name: 'Canvasa',
        component: () => import(/* webpackChunkName: "about" */ '../views/canvas/canvas-直线.vue')
      },
      {
        path: '/canvas-juxing',
        name: 'Canvasb',
        component: () => import(/* webpackChunkName: "about" */ '../views/canvas/canvas-矩形.vue')
      },
      {
        path: '/canvas-suiji',
        name: 'Canvasc',
        component: () => import(/* webpackChunkName: "about" */ '../views/canvas/canvas-随机.vue')
      },
      {
        path: '/canvas-yuan',
        name: 'Canvasd',
        component: () => import(/* webpackChunkName: "about" */ '../views/canvas/canvas-圆形.vue')
      },
      {
        path: '/canvas-beizi',
        name: 'Canvase',
        component: () => import(/* webpackChunkName: "about" */ '../views/canvas/canvas-杯子.vue')
      },
      {
        path: '/canvas-jindutiao',
        name: 'Canvasf',
        component: () => import(/* webpackChunkName: "about" */ '../views/canvas/canvas-进度条.vue')
      },
      {
        path: '/canvas-pengzhuang',
        name: 'Canvasg',
        component: () => import(/* webpackChunkName: "about" */ '../views/canvas/canvas-碰撞检测.vue')
      },
      {
        path: '/canvas-duopengzhuang',
        name: 'Canvash',
        component: () => import(/* webpackChunkName: "about" */ '../views/canvas/canvas-多只球碰撞检测.vue')
      },
      {
        path: '/canvas-wenzi',
        name: 'Canvasi',
        component: () => import(/* webpackChunkName: "about" */ '../views/canvas/canvas-文字.vue')
      },
      {
        path: '/canvas-img',
        name: 'Canvasj',
        component: () => import(/* webpackChunkName: "about" */ '../views/canvas/canvas-图片.vue')
      },
      {
        path: '/canvas-linecircle',
        name: 'Canvask',
        component: () => import(/* webpackChunkName: "about" */ '../views/canvas/canvas-线性小球.vue')
      },
    
  ]
  // html5新特性+块级元素
  const routeSewseman = [
    {
      path: '/newseman-1',
      name: 'newseman-1',
      component: () => import(/* webpackChunkName: "about" */ '../views/newSemantics/index-1语义标签.vue')
    },
    {
      path: '/newseman-2',
      name: 'newseman-2',
      component: () => import(/* webpackChunkName: "about" */ '../views/newSemantics/index-2元素类型.vue')
    },
    {
      path: '/newseman-3',
      name: 'newseman-3',
      component: () => import(/* webpackChunkName: "about" */ '../views/newSemantics/index-3script标签.vue')
    },
  ]
  // js相关的知识点
  const routeJs = [
    {
      path: '/js_1',
      name: 'js_1',
      component: () => import('../views/js/js-1类.vue')
    }
  ]
  // 在线聊天相关的知识点
  const routeWs = [
    {
      path: '/wechat',
      name: 'wechat',
      component: () => import('../views/wechat/wechat01.vue')
    }
  ]

  // pc端项目
  const routePc = [
    {
      path: '/login',
      name: 'login',
      component: ()=> import('../views/testpc/login.vue')
    },
    {
      path: '/',
      name: 'main',
      redirect: '/goods-index',
      component: () => import('../views/testpc/testpc01.vue'),
      children:[
        {
          path: '/goods-index',
          name: 'index',
          component: ()=> import('../views/testpc/Index/goodsIndex.vue')
        },
        {
          path: '/goods-inde',
          name: 'inde',
          component: ()=> import('../views/testpc/Index/goodsIndex.vue')
        },
      ]
    }
  ]
  const routes=[
    ...routeCanvas,
    ...routeSewseman,
    ...routeJs,
    ...routeWs,
    ...routePc,
  ]

  const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes,
  })
  export default router