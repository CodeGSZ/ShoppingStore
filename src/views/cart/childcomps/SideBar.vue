<template>
    <div class="side-bar">
        <ul class="side-chorise">
            <li>美妆类 》</li>
            <li>护肤类 》</li>
            <li>生活类 》</li>
            <li>家电类 》</li>
            <li>家电类 》</li>
            <li>短袖类 》</li>
            <li>鞋靴类 》</li>
            <li>毛衣类 》</li>
            <li>棉衣类 》</li>
            <li>休闲类 》</li>
        </ul>
    </div>    
</template>

<script>
    export default {
        name: 'SideBar',
    }
</script>

<style scoped>
.side-bar {
    height: 400px;
    width: 30%;
    margin-top: 10px;
    background-color: var(--color-tint);
    box-shadow: 5px 5px 5px rgba(105, 105, 105, .1);
}

.side-chorise li {
    height: 40px;
    width: 100%;
    /* display: block; */
    text-align: center;
    line-height: 40px;
    color: white;
    /* border: 1px solid white; */
    border-bottom: 1px solid white;
}

</style>