<!--
 * @Author: renlina
 * @Date: 2021-12-17 15:18:56
 * @LastEditors: renlina
 * @LastEditTime: 2021-12-27 15:39:15
 * @Description: 新的语义标签
-->
<template>
    <div>
        <!-- <header> 页眉，可能包含标题元素，也可以包含其他元素，像logo、分节头部、搜索表单等 -->
        <header>
            <!-- <hgroup>标签用于对网页或区段（section）的标题进行组合。使用新的HTML5元素hgroup，可以为header元素添加更多的信息。（头部主标题/副标题） -->
            <hgroup>
                <h2>我是一级标题</h2>
                <h3>我是二级标题</h3>
                <!-- <nav> 定义主体模块或者导航链接的集合 -->
                <nav>
                    <div v-for="(item,index) in navs" :key="item.id" @click="toChangeNav(item,index)" :class="{navactive:curNav == item.id}">{{item.name}}</div>
                </nav>
            </hgroup>
        </header>
        <!-- <main> 定义主要内容 -->
        <main>
            <!-- <aside>与一个和其余页面内容几乎无关的部分，被认为是独立于该内容的一部分并且可以被单独的拆分出来而不会使整体受影响。其通常表现为侧边栏或者嵌入内容。 -->
            <aside>
                <div v-for="(item,index) in asides" :key="item.id">
                    <div class="ftitle" :class="{active_ftitle: item.id == curFtitle }" @click="changeFtitle(item,index)">{{item.title}}</div>
                    <template v-if="item.list && item.list.length > 0 && item.showList">
                        <div class="ctitle" :class="{active_ctitle: oitem.id == curCtitle}" @click="curCtitle = oitem.id" v-for="(oitem,oindex) in item.list" :key="oindex">
                            {{oitem.childTitle}}
                        </div>
                    </template>
                </div>
            </aside>
            <div class="red">article>是一个特殊的section标签，它比section具有更明确的语义，它代表一个独立的、完整的相关内容块，可独立于页面其它内容使用。例如一篇完整的论坛帖子，一篇博客文章，一个用户评论等等。一般来说，article会有标题部分（通常包含在header内），有时也会包含footer。article可以嵌套，内层的article对外层的article标签有隶属关系。例如，一篇博客的文章，可以用article显示，然后一些评论可以以article的形式嵌入其中。 正文信息</div>
            <article>
                <div class="red">实现提示语,datalist选项列表标签，id绑定到input的list上去，会出现提示语。</div>
                <input class="input" type="text" list="list" @blur="inputBlur">
                <datalist id="list" class="input_tishi">
                    <option v-for="(item,index) in inputOPtions" :key="index" :value="item"></option>
                </datalist>
                <div class="red">figure> 元素代表一段独立的内容.用于对元素进行组合。多用于图片与图片描述组合。</div>
                <figure>
                    <img src="" alt="">
                    <figcaption>
                        <div>这是一个描述信息 </div>
                    </figcaption>
                </figure>
                <div class="red">details> 标签：用于描述文档或文档某个部分的细节。<summary> 标签：包含<details> 标签的标题。</div>
                <details>
                    <summary>
                        点击展示隐藏
                    </summary>
                    <p>需要展示或者隐藏的内容·哈哈哈哈哈··</p>
                </details>
                <div class="red">mark> 标签：定义带有记号的文本。 --></div>
                <div>北京的<mark>强风雨</mark>将持续至3日8时</div>
                <div><time datetime="2021-10-01">国庆节</time>会放假</div>
                <div class="red">meter 标签：定义度量衡。 </div>
                <meter value="70" max="100" min="0" high="80" low="50"></meter>
                <br/>
                <div class="red">rogress标签是HTML5中新增的标签，是使用来定义运行中的任务进度/进程，通常和JavaScript一起使用来实现进度条。</div>
                <progress value="0.9" max="1"></progress>
            </article>
            
        </main>
            <!-- <footer> 定义了整个页面或其中一部分的页脚（并且通常包含原创作者，版权信息，联系方式和站点地图,文档相关的链接等信息） -->
        <footer>我是底部</footer>
    </div>
</template>

<script>
import { reactive, ref,toRefs ,defineComponent,onMounted} from 'vue'

export default defineComponent({
  setup(){
    const data = reactive({
        navs:[
            {
                name: '首页',
                id: 'shouye'
            },
             {
                name: '热门',
                id: 'remen'
            },
             {
                name: '收藏',
                id: 'shoucang'
            },
             {
                name: '个人中心',
                id: 'center'
            },
        ],
        asides:[
            {
                title: '需选择项一',
                id: 'select1',
                showList:false,
                list:[
                    {
                        childTitle: '子选择一',
                        id: 'childSelect1',
                    },
                    {
                        childTitle: '子选择二',
                        id: 'childSelect2',
                    },
                    {
                        childTitle: '子选择三',
                        id: 'childSelect3',
                    },
                    {
                        childTitle: '子选择四',
                        id: 'childSelect4',
                    },
                ]
            },
            {
                title: '需选择项二',
                id: 'select2',
                showList:false,
                
            }
        ],
        curNav:'shouye',
        curFtitle: 'select1',
        curCtitle: '',
        inputOPtions:['小明','小红','小兰','小刚','小李','小翠','小明','小红','小兰','小刚','小李','小翠']
    })
    const toChangeNav = (item,index)=>{
        data.curNav = item.id
    }
    const changeFtitle = (item,index)=>{
        data.curCtitle = ''
        data.curFtitle = item.id
        item.showList = !item.showList
    }
    function inputBlur(e){
        console.log(e.target.value)
    }
    return{
        ...toRefs(data),
        toChangeNav,
        changeFtitle,
        inputBlur
    }

}
})
</script>
<style lang="less" scoped>
header{
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 100;
    hgroup{
        padding: 10px 10px 20px 10px;
        background-color: #eee;
        border-bottom: 2px solid #999;
        nav{
            display: flex;
            justify-main: flex-start;
            align-items: center;
            div{
                width: 200px;
                cursor: pointer;
                text-align: center;
                font-size: 28px;
                line-height: 40px;
                margin-right: 10px;
                // &:hover{
                //     background-color: #fff;
                //     color: blue;

                // }
                &.navactive{
                    background-color: #fff;
                    color: blue;
                }
            }
        }
    }
    
}
main{
    position: relative;
    aside{
        position: fixed;
        left: 0px;
        top: 190px;
        width: 200px;
        height: 100vh;
        background-color: #eee;
        .ftitle{
            height: 40px;
            padding-left: 10px;
            line-height: 40px;
            border-bottom: 1px solid #e2e2e2;
            cursor: pointer;
            &.active_ftitle{
                background-color: #fff;
                border-right: 3px solid blue;
            }
        }
        .ctitle{
                cursor: pointer;
                height: 40px;
                padding-right: 30px;
                line-height: 40px;
                text-align: right;
                border: 1px solid #eee;
                &.active_ctitle{
                    background-color: #fff;
                }
            }
            
    }
    article{
        padding: 40px;
        position: absolute;
        right: 0px;
        top: 190px;
        width: calc(100vw - 200px);
        min-height: 100vh;
        box-sizing: border-box;
        .input{
            width:200px;
        }
        .input_tishi{
            height: 200px;
            overflow: hidden;
            
        }
        figure{
            width: 400px;
            height: 300px;
            padding: 10px;
            background-color: cornsilk;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            img{
                width: 300px;
                height: 200px;
            }
            figcaption{
                // margin-top: ;
            }
                
        }
        details{
            cursor: pointer;
            summary{
                &::marker{
                    background-color: cornsilk;
                }
            }
        }
    }
}
footer{
    position: fixed;
    bottom: 0;
}
.red{
    color: red;
    font-size: 18px;
    font-weight: 500;
}
</style>