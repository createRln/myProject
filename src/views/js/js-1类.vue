<!--
 * @Author: renlina
 * @Date: 2021-12-23 14:21:34
 * @LastEditors: renlina
 * @LastEditTime: 2021-12-23 17:09:36
 * @Description: 创建一个类
-->
<template>
    <div>
        创建一个类
    </div>
</template>

<script>
import {reactive,toRefs,ref,defineComponent,onMounted} from 'vue'
export default defineComponent({
    setup(){
        onMounted(()=>{
            // 创建一个类
            creatClass()
            // 二，类的继承
            toExtends()
            

        })
        function creatClass(){
             console.log(1111)
            //一 · 创建一个类class，创建一个明星类
            // · 利用类创建对象，通过new的方式
            // （1）通过class关键字创建类，类名习惯性定义为首字母大写的形式
            // （2）类里面有个constructor函数，可以接受传递过来的参数，同时返回实例对象
            // （3）constructor函数只要new生成实例时，就会自动调用这个函数，如果我们不写这个函数，类也会自动生成这个函数
            // （4）生成实例的过程中，new不能省略
            let Star = class Start {
                constructor(name,age){
                    this.state = {
                        name: name,
                        age: age
                    }
                }
                // 类里面定义的函数是不需要写function的，也不需要加逗号的
                sing(song){
                    console.log(this.state.name + '唱歌：' + song)
                }
            }
            let yangmi = new Star('杨幂')
            yangmi.sing('斛珠夫人')
            // console.log(yangmi.state,'----')

        }
        function toExtends(){
            let Father = class Father{
                constructor(x,y){
                    this.x = x
                    this.y = y
                }
                tosum(){
                    console.log(this.x + this.y + '计算结果')
                }
            }
            // 子类继承父类的时候要是想继承父类的一些属性和方法的话，需要在创建子类的时候用关键字extends去继承父类。
            // 并且需要在constructor里面加上super(props).如下
            let Son = class Son extends Father{
                constructor(x,y){
                    super(x,y)//调用了父类中的构造函数
                }
            }
            let son = new Son(100,200)
            son.tosum()
            
        }
        return{

        }
    },
})
</script>

<style>

</style>