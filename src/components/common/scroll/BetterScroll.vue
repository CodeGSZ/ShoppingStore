<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
// 引入better-scroll插件
import BScroll from 'better-scroll';
import PullUp from '@better-scroll/pull-up';
BScroll.use(PullUp);

    export default {
        name: 'BetterScroll',
        props: {
            probeType: {
                type: Number,
                default: 0,
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            },
            
        },

        data () {
            return {
                scroll: null,
            }
        },
        mounted () {
            // 1.创建better-scorll对象
            this.scroll = new BScroll(this.$refs.wrapper, {
                click: true,
                probeType: this.probeType,
                pullUpLoad: this.pullUpLoad
                // pullUpLoad: true
            });
            // 2.监听滚动的位置
            this.scroll.on ('scroll', (position) => {
                // console.log(position)
                this.$emit('betterScroll', position)
            });
            // 3. 监听上拉事件
            this.scroll.on('pullingUp', () => {
                // console.log('上拉加载更多');
                this.$emit('pullingUp');
            })
        },
        methods: {
            scrollTo (x, y, time=300) {
                this.scroll.scrollTo (x, y, time)
            },
            finishPullUp () {
                this.scroll.finishPullUp();
            },
            refresh () {
                this.scroll.refresh();
            } 
        }
    }
</script>

<style scoped>
    .wrapper {
        height: 490px;
        overflow: hidden;
    }
</style>