<!--
 * @Author: renlina
 * @Date: 2021-12-20 13:44:57
 * @LastEditors: renlina
 * @LastEditTime: 2021-12-20 14:23:46
 * @Description: 元素特性
-->
<template>
    <div>
        <div>
            块级元素：<br>
            1、总是从新的一行开始，2、高度宽度都是可以控制的。3、宽度没有设置的时候，默认是100% 4、块级元素中可以包含块级元素也可以包含行内元素。
            <br>    行内元素<br>
            1、和其他元素在一行显示。2、高度和宽度都是不可以控制的。3、宽高都是内容的高度，不可以改变。4、行内元素都只能是行内元素，不能包含块级元素。

        </div>
        <div class="red">块级元素（p、div、ul、li、h1-h6、table、form、hr、pre、marquee、center、address、）</div>
        <div>水平分割线标签</div>
        <hr>
        <div>预格式化标签</div>
        <pre>
            &lt;html&gt;
            &lt;head&gt;
            &lt;script type=&quot;text/javascript&quot; src=&quot;loadxmldoc.js&quot;&gt;
            &lt;/script&gt;
            &lt;/head&gt;

            &lt;body&gt;

            &lt;script type=&quot;text/javascript&quot;&gt;
                xmlDoc=<a href="dom_loadxmldoc.asp">loadXMLDoc</a>(&quot;books.xml&quot;);
                document.write(&quot;xmlDoc is loaded, ready for use&quot;);
            &lt;/script&gt;

            &lt;/body&gt;

            &lt;/html&gt;
        </pre>
        <div>滚动标签</div>
        <marquee style="width:300px;">
            北京豪放不羁还不放假不吃就会爆发后家常便饭才能到接口能促进妇女就好矗接电话方便 v
        </marquee>
        <div>自动居中的标签</div>
        <center>不能参加湖南凤凰金额分别会被 v 还将发布 v 交话费</center>
        <div>地址标签</div>
        <address>河南省商丘市夏邑县</address>
        <div class="red">行内元素标签：（a、span、i、em、strong、b、br、sup、sub、del、u、textarea、select）</div>
        <div class="red">i标签、em标签都是表示斜体</div>
        <i>我是斜体i</i>
        <br>
        <em>我是斜体 em</em>
        <div class="red">strong、b标签都是加粗标签</div>
        <strong>我是加粗strong标签</strong>
        <br>
        <b>我是加粗b标签</b>
        <div class="red">sup上标,sub下标标签</div>
        <div>1111<sup>我是上标</sup></div>
        <div>2222<sub>我是下标</sub></div>
        <div class="red">del 删除  u下划线</div>
        <del>我是删除标签</del>
        <br>
        <u>我是下划线标签</u>
        <br>
        <textarea>我是textarea多行文本标签</textarea>
        <br>
        <select style="width: 200px">
            <option value="1">1111</option>
            <option value="2">22</option>
            <option value="3">333</option>
            <option value="4">4444</option>
        </select>
    </div>
</template>

<script>
import {ref,toRefs,reactive,defineComponent,onMounted} from 'vue'
export default defineComponent({
    setup(){
        return{
        
        }
    }
    
})
</script>
<style lang="less" scoped>
.red{
    color: red;
    font-weight: 500;
    font-size: 18px;
}
</style>