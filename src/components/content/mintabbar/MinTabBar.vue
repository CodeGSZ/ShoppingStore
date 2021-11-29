<template>
     <tab-bar>
        <tab-bar-items path="/home">
          <template v-slot:item-icon>
            <img src="~assets/img/bar/home1.png" alt="">
          </template>
          <template v-slot:item-icon-active>
            <img src="~assets/img/bar/home2.png" alt="">
          </template>
          <template v-slot:item-text>
            <div>首页</div>
          </template>
        </tab-bar-items>

        <tab-bar-items path='/cart'>
          <template v-slot:item-icon>
            <img src="~assets/img/bar/classfication1.png" alt="">
          </template>
          <template v-slot:item-icon-active>
            <img src="~assets/img/bar/classfication2.png" alt="">
          </template>
          <template v-slot:item-text>
            <div>分类</div>
          </template>
        </tab-bar-items>

        <tab-bar-items path='/category'>
          <template v-slot:item-icon>
            <img src="~assets/img/bar/shopping1.png" alt="">
          </template>
          <template v-slot:item-icon-active>
            <img src="~assets/img/bar/shopping2.png" alt="">
          </template>
          <template v-slot:item-text>
            <div>购物车</div>
          </template>
        </tab-bar-items>

        <tab-bar-items path='/profile'>
          <template v-slot:item-icon>
            <img src="~assets/img/bar/personcenter1.png" alt="">
          </template>
          <template v-slot:item-icon-active>
            <img src="~assets/img/bar/personcenter2.png" alt="">
          </template>
          <template v-slot:item-text>
            <div>我的</div>
          </template>
        </tab-bar-items>
    </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar.vue';
  import TabBarItems from 'components/common/tabbar/TabBarItem.vue';
   
  export default {
    name: 'mintabbar',
    components: {
        TabBar,
        TabBarItems
    }
  }
</script>

<style scoped>
img {
  height: 30px;
  width: 40px;
  margin-top: 3px;
  margin-bottom: -3px;
  vertical-align: middle;
}
</style>