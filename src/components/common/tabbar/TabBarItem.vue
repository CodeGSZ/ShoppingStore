<template>
    <div class="tab-bar-items" @click="itemClick()" >
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>    
        </div>
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
    </div>    
</template>

<script>
    export default {
        name: 'TabBarItems', 
        computed: {
          isActive () {
              return this.$route.path.indexOf(this.path) !== -1;
          },
          activeStyle () {
              return this.isActive ? {color: this.activeColor} : {}
          }
        },
        props: {
            path: String,
            activeColor: {
                type: String,
                default: 'deeppink'
            }
        },
        methods: {
            itemClick () {
                this.$router.push(this.path);
            }
        }
    }
</script>

<style scoped>
.tab-bar-items {
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 15px;
}

</style>