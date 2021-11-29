<template>
  <div id="app">
    <router-view></router-view>
    <min-tab-bar></min-tab-bar>
  </div>
</template>
<script>
  // 导入子组件
  import MinTabBar from 'components/content/mintabbar/MinTabBar.vue'

  export default {
    name: "app",
    components: {
      MinTabBar
    }
  }

</script>

<style scoped>
/*引入base.css */
@import "assets/css/base.css";


</style>

