<template>
    <div>
        <mincat></mincat>
        <side-bar></side-bar>
    </div>
</template>

<script>
import Mincat from './childcomps/MineCart.vue'
import SideBar from './childcomps/SideBar.vue';

  export default {
    name: "Cart",
    components: {
        Mincat,
        SideBar
    }
  }
</script>

<style scoped>

</style>
