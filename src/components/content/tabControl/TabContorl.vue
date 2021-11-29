<template>
    <div class="tab-control">
        <div v-for = "(item, index) in titles" class="tab-control-item" :class="{active : index === current}" @click="itemClick(index)"> 
            <span>{{item}}</span>
        </div>
    </div>    
</template>

<script>
    export default {
        name: 'TabControl',
        data () {
            return {
                current: 0      
            }
        },
        props: {
            titles: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        methods: {
            itemClick (index) {
                this.current = index;
                // 将子组件的点击事件传入到父组件
                this.$emit('itemClick', index);
            }
        }
    }
</script>

<style scoped>
    .tab-control {
        display: flex;
        text-align: center;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
    }

    .tab-control span {
        padding: 3px;
    }
 
    .tab-control-item {
        flex: 1;
    }

    .tab-control .active {
        color: deeppink;
    }

    .tab-control .active span {
        border-bottom: 3px solid deeppink;
        border-radius: 5%;
    }
</style>