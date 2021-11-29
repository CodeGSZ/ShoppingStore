<template>
    <div>
        <span class="back-top">⬆</span>
    </div>
</template>

<script>
    export default {
        name: 'BackTop'
    }
</script>

<style scoped>
.back-top {
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 30px;
    color: deeppink;
    border-radius: 100%;
    display: block;
    background-color: rgb(231, 231, 231);

    /* 设置图标的固定位置 */
    position: fixed;
    right: 8px;
    bottom: 55px;
}
</style>