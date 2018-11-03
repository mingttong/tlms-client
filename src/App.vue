<template>
    <el-container class="container">
        <el-aside
            class="aside menuBar"
            width="200px">
            <app-menu></app-menu>
        </el-aside>
        <el-container>
            <router-view></router-view>
        </el-container>
    </el-container>
</template>

<script>
import appMenu from '@/components/menu/AppMenu';

export default {
    components: {
        appMenu,
    },
};
</script>

<style lang="scss">
@import './assets/common.scss';
.container {
    height: 100%;
    .aside {
        height: 100%;
        background-color: #545C64;
    }
}
</style>

