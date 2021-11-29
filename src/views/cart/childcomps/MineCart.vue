<template>
  <div>
    <nav-bar class="cart-bar">
      <template v-slot:left>
        <div>返回</div>
      </template>
      <template v-slot:center>
        <div>分类</div>
      </template>
      <template v-slot:right>
        <img src="~assets/img/bar/classfication1.png" alt="">
      </template>
    </nav-bar>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
  export default {
    name: "SideBar",
    components: {
        NavBar
    }
  }
</script>

<style scoped>
  .cart-bar {
    text-align: center;
    background-color: var(--color-tint);
    color: #fff;
  }
    
  .cart-bar img {
    height: 40px;
    width: 45px;
    margin-bottom: -10px;
  }
</style>