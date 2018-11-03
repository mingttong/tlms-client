<template>
    <el-menu
        background-color="#545C64"
        text-color="#FFFFFF"
        active-color="#434A50">
        <el-menu-item index="remain-item">
            <span slot="title">遗留事项</span>
        </el-menu-item>
        <el-tree
            :data="task.data"
            :props="task.props"
            :node-key="'id'"
            :highlight-current="true"
            @node-click="handleTaskClick"></el-tree>
    </el-menu>
</template>

<script>

export default {
    data() {
        return {
            task: {
                data: [{
                    name: '任务列表',
                    children: [
                        {
                            name: '2018-10-24',
                        },
                        {
                            name: '2018-10-25',
                        },
                        {
                            name: '2018-10-26',
                        },
                    ],
                }],
                props: {
                    label: 'name',
                    children: 'children',
                },
            },
        };
    },

    methods: {
        handleTaskClick() {},
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
