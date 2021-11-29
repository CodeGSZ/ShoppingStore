<template>
    <div id="home">
        <nav-bar class="home-nav">
            <template v-slot:center>
                <div>购物街</div>
            </template>
        </nav-bar>
        <better-scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @betterScroll="contentScroll" @pullingUp="loadMore"> 
             <home-swiper :banners="banners" />
               <recommends :recommends="recommends"></recommends>
               <feature></feature>
               <tab-control :titles="['流行', '新款', '精选']" class="tab-control" @itemClick="itemClick"></tab-control>
               <goods-list :goods="goods[currentType].list"></goods-list>
          <ul>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>测试一</li>
            <li>测试三</li>
            <li>测试三</li>
            <li>测试四</li>
            <li>测试五</li>
            <li>测试六</li>
            <li>测试七</li>
            <li>测试八</li>
            <li>测试九</li>
            <li>测试九</li>
            <li>测试十</li>
            <li>测试十一</li>
            <li>测试十二</li>
            <li>测试十三</li>
            <li>测试十四</li>
            <li>测试十五</li>
            <li>测试一</li>
            <li>测试三</li>
            <li>测试三</li>
            <li>测试四</li>
            <li>测试五</li>
            <li>测试六</li>
            <li>测试七</li>
            <li>测试八</li>
            <li>测试九</li>
            <li>测试九</li>
            <li>测试十</li>
            <li>测试十一</li>
            <li>测试十二</li>
            <li>测试十三</li>
            <li>测试十四</li>
            <li>测试十五</li>
             <li>测试一</li>
            <li>测试三</li>
            <li>测试三</li>
            <li>测试四</li>
            <li>测试五</li>
            <li>测试六</li>
            <li>测试七</li>
            <li>测试八</li>
            <li>测试九</li>
            <li>测试九</li>
            <li>测试十</li>
            <li>测试十一</li>
            <li>测试十二</li>
            <li>测试十三</li>
            <li>测试十四</li>
            <li>测试十五</li>
            <li>测试一</li>
            <li>测试三</li>
            <li>测试三</li>
            <li>测试四</li>
            <li>测试五</li>
            <li>测试六</li>
            <li>测试七</li>
            <li>测试八</li>
            <li>测试九</li>
            <li>测试九</li>
            <li>测试十</li>
            <li>测试十一</li>
            <li>测试十二</li>
            <li>测试十三</li>
            <li>测试十四</li>
            <li>测试十五</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>测试一</li>
            <li>测试三</li>
            <li>测试三</li>
            <li>测试四</li>
            <li>测试五</li>
            <li>测试六</li>
            <li>测试七</li>
            <li>测试八</li>
            <li>测试九</li>
            <li>测试九</li>
            <li>测试十</li>
            <li>测试十一</li>
            <li>测试十二</li>
            <li>测试十三</li>
            <li>测试十四</li>
            <li>测试十五</li>
            <li>测试一</li>
            <li>测试三</li>
            <li>测试三</li>
            <li>测试四</li>
            <li>测试五</li>
            <li>测试六</li>
            <li>测试七</li>
            <li>测试八</li>
            <li>测试九</li>
            <li>测试九</li>
            <li>测试十</li>
            <li>测试十一</li>
            <li>测试十二</li>
            <li>测试十三</li>
            <li>测试十四</li>
            <li>测试十五</li>
             <li>测试一</li>
            <li>测试三</li>
            <li>测试三</li>
            <li>测试四</li>
            <li>测试五</li>
            <li>测试六</li>
            <li>测试七</li>
            <li>测试八</li>
            <li>测试九</li>
            <li>测试九</li>
            <li>测试十</li>
            <li>测试十一</li>
            <li>测试十二</li>
            <li>测试十三</li>
            <li>测试十四</li>
            <li>测试十五</li>
            <li>测试一</li>
            <li>测试三</li>
            <li>测试三</li>
            <li>测试四</li>
            <li>测试五</li>
            <li>测试六</li>
            <li>测试七</li>
            <li>测试八</li>
            <li>测试九</li>
            <li>测试九</li>
            <li>测试十</li>
            <li>测试十一</li>
            <li>测试十二</li>
            <li>测试十三</li>
            <li>测试十四</li>
            <li>测试十五</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>测试一</li>
            <li>测试三</li>
            <li>测试三</li>
            <li>测试四</li>
            <li>测试五</li>
            <li>测试六</li>
            <li>测试七</li>
            <li>测试八</li>
            <li>测试九</li>
            <li>测试九</li>
            <li>测试十</li>
            <li>测试十一</li>
            <li>测试十二</li>
            <li>测试十三</li>
            <li>测试十四</li>
            <li>测试十五</li>
            <li>测试一</li>
            <li>测试三</li>
            <li>测试三</li>
            <li>测试四</li>
            <li>测试五</li>
            <li>测试六</li>
            <li>测试七</li>
            <li>测试八</li>
            <li>测试九</li>
            <li>测试九</li>
            <li>测试十</li>
            <li>测试十一</li>
            <li>测试十二</li>
            <li>测试十三</li>
            <li>测试十四</li>
            <li>测试十五</li>
             <li>测试一</li>
            <li>测试三</li>
            <li>测试三</li>
            <li>测试四</li>
            <li>测试五</li>
            <li>测试六</li>
            <li>测试七</li>
            <li>测试八</li>
            <li>测试九</li>
            <li>测试九</li>
            <li>测试十</li>
            <li>测试十一</li>
            <li>测试十二</li>
            <li>测试十三</li>
            <li>测试十四</li>
            <li>测试十五</li>
            <li>测试一</li>
            <li>测试三</li>
            <li>测试三</li>
            <li>测试四</li>
            <li>测试五</li>
            <li>测试六</li>
            <li>测试七</li>
            <li>测试八</li>
            <li>测试九</li>
            <li>测试九</li>
            <li>测试十</li>
            <li>测试十一</li>
            <li>测试十二</li>
            <li>测试十三</li>
            <li>测试十四</li>
            <li>测试十五</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>sdsds</li>
            <li>测试一</li>
            <li>测试三</li>
            <li>测试三</li>
            <li>测试四</li>
            <li>测试五</li>
            <li>测试六</li>
            <li>测试七</li>
            <li>测试八</li>
            <li>测试九</li>
            <li>测试九</li>
            <li>测试十</li>
            <li>测试十一</li>
            <li>测试十二</li>
            <li>测试十三</li>
            <li>测试十四</li>
            <li>测试十五</li>
            <li>测试一</li>
            <li>测试三</li>
            <li>测试三</li>
            <li>测试四</li>
            <li>测试五</li>
            <li>测试六</li>
            <li>测试七</li>
            <li>测试八</li>
            <li>测试九</li>
            <li>测试九</li>
            <li>测试十</li>
            <li>测试十一</li>
            <li>测试十二</li>
            <li>测试十三</li>
            <li>测试十四</li>
            <li>测试十五</li>
            <li>测试一</li>
            <li>测试三</li>
            <li>测试三</li>
            <li>测试四</li>
            <li>测试五</li>
            <li>测试六</li>
            <li>测试七</li>
            <li>测试八</li>
            <li>测试九</li>
            <li>测试九</li>
            <li>测试十</li>
            <li>测试十一</li>
            <li>测试十二</li>
            <li>测试十三</li>
            <li>测试十四</li>
            <li>测试十五</li>
            <li>测试一</li>
            <li>测试三</li>
            <li>测试三</li>
            <li>测试四</li>
            <li>测试五</li>
            <li>测试六</li>
            <li>测试七</li>
            <li>测试八</li>
            <li>测试九</li>
            <li>测试九</li>
            <li>测试十</li>
            <li>测试十一</li>
            <li>测试十二</li>
            <li>测试十三</li>
            <li>测试十四</li>
            <li>测试十五</li>
          </ul>
        </better-scroll>
        <back-top @click.native="BackClick" v-show="isShowBackTop"></back-top>
    </div>
</template>

<script>
    // 导入组件代码
    import NavBar from 'components/common/navbar/NavBar.vue';
    import TabControl from 'components/content/tabControl/TabContorl.vue'
    import GoodsList from 'components/content/goods/GoodsList.vue'
    import BetterScroll from 'components/common/scroll/BetterScroll.vue'
    import BackTop from 'components/content/backtop/BackTop.vue'

    import HomeSwiper from './childcomps/HomeSwiper.vue'
    import Recommends from './childcomps/recommend.vue'
    import Feature from './childcomps/feature.vue'
    

    //导入网络请求代码
    import {getHomeMultidata, getHomeGoods} from "network/home.js";

    export default {
        name: 'Home',
        components: {
            NavBar,
            HomeSwiper,
            Recommends,
            Feature,
            TabControl,
            GoodsList,
            BetterScroll,
            BackTop
        },
        data () {
            return {
                // 使用一个变量接收created里面网络请求返回来的数据,避免垃圾回收
                // result: null,
                banners : [],
                recommends: [],
                goods: {
                    'pop': {page: 0, list: []},
                    'new': {page: 0, list: []},
                    'sell': {page: 0, list: []}
                },
                currentType: 'pop',
                isShowBackTop: false
            }
        },
        // 当组件开始创建的时候，发送网络请求
        // 使用created方法
        created () {
            // 请求一个数据
            this.getHomeMultidata()
            
            // 2. 请求商品数据
            this.getHomeGoods('pop');
            this.getHomeGoods('new');
            this.getHomeGoods('sell')
        },
        // 封装一个方法，将请求数据的代码进行简化
        methods: {
            /*
            * 事件监听的相关方法
            */
            itemClick (index) {
                switch (index) {
                    case 0:
                        this.currentType = 'pop';
                        break;
                    case 1:
                        this.currentType = 'new';
                        break;
                    case 2: 
                        this.currentType = 'sell';
                        break; 
                }
            },



            // 1.请求多个数据
            /*
            *网络请求相关的代码
            */
            getHomeMultidata () {
                getHomeMultidata ().then ((res) => {
                  // console.log(res)
                  // this.result = res;
                  this.banners = res.data.banner.list;
                  this.recommends = res.data.recommend.list;
                })
            },
            // 请求商品数据
            getHomeGoods (type) {
                const page = this.goods[type].page + 1;
                getHomeGoods (type, page).then((res) => {
                    // this.goods[page].list.push (...res.data.list);
                    this.goods[type].page += 1;
                    // console.log(res)
                    this.$refs.scroll.finishPullUp()
                }) 
            },
            BackClick () {
                this.$refs.scroll.scrollTo(0, 0)
                // console.log(this.$refs.scroll.msg)
            },
            contentScroll (position) {
                // console.log(position)
                this.isShowBackTop = (-position.y) > 1000
            },
            loadMore () {
                this.getHomeGoods(this.currentType);
                // 当内容加载完成以后从新计算内容的高度
                this.$refs.scroll.refresh();
            }
            
        }
    }
</script>

<style scoped>
    #home {
        padding-top: 44px;
        height: 100vh;
    }

    .home-nav {
        color: #fff;
        background-color: var(--color-tint);

        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }
    
    .tab-control {
        /* position: sticky; */
        top:44px;
        background-color: #fff;
        z-index: 9;
    }

    .content {
        overflow: hidden;
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
    /* .content {
        height: calc(100% - 93px);
        overflow: hidden;
        margin-top: 51px;
    } */

</style>