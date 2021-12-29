<!--
 * @Author: renlina
 * @Date: 2021-12-29 10:56:37
 * @LastEditors: renlina
 * @LastEditTime: 2021-12-29 16:02:03
 * @Description: pc断项目测试
-->
<template>
    <div class="main">
        <el-container>
             <el-header>
                 <el-row class="row-bg" justify="center" align="middle">
                    <el-col :span="6">
                        hi~小转！
                    </el-col>
                    <el-col :span="12">
                        <el-menu
                            :default-active="activeIndex"
                            class="el-menu-demo"
                            mode="horizontal"
                            router
                            @select="handleSelect"
                        >
                            <el-menu-item index="/goods-index" >选品库</el-menu-item>
                            <el-menu-item index="/goods-inde" >选品1库</el-menu-item>

                            <!-- <el-sub-menu index="2">
                                <template #title>Workspace</template>
                                <el-menu-item index="2-1">item one</el-menu-item>
                                <el-menu-item index="2-2">item two</el-menu-item>
                                <el-menu-item index="2-3">item three</el-menu-item>
                                <el-sub-menu index="2-4">
                                    <template #title>item four</template>
                                    <el-menu-item index="2-4-1">item one</el-menu-item>
                                    <el-menu-item index="2-4-2">item two</el-menu-item>
                                    <el-menu-item index="2-4-3">item three</el-menu-item>
                                </el-sub-menu>
                            </el-sub-menu>
                            <el-menu-item index="3" disabled>Info</el-menu-item>
                            <el-menu-item index="4">Orders</el-menu-item> -->
                        </el-menu>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <el-row  justify="center" >
                    <el-col :span="18">
                        <router-view/>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import {defineComponent,ref,toRefs,reactive} from 'vue'
export default defineComponent({
    setup(){
        const activeIndex = ref('/goods-index')
        const handleSelect = (key, keyPath) => {
            activeIndex.value = key
        }
        return{
            activeIndex,
            handleSelect,
        }
    }
})
</script>

<style lang="less" scoped>
.main{
    min-height: 100vh;
    background-image: linear-gradient(90deg, #d8ebf2 1%, #acc2ee 97%);
}
</style>

<style lang="less" scoped>
// 样式修改
.el-header{
    --el-header-padding: 0px;
}
.el-main{
    --el-main-padding: 0px;
}
.el-menu-demo{
    display: flex;
    justify-content: flex-end;
}
.row-bg{
    background-color: #fff;
}
</style>


