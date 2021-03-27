<template>
    <div>
        <div class="index_bg">
            <img src="../assets/images/d.jpg" alt="">
            <div class="mask"></div>
            <div class="slogan">
                <h1>新一代网购平台</h1>
                <p> 力保全新正品</p>
                <p>正品保障 · 放心购买</p>
            </div>
        </div>
        <!-- <slide-show/> -->
    </div>

</template>

<script>
    // import SlideShow from "../components/SlideShow";

    export default {
        name: "index",
        // components: {
        //     SlideShow,
        // }
    }
</script>

<style scoped>

    .index_bg, .index_bg img {
        width: 100vw;
        height: 90vh;
        position: relative;
    }

    .mask {
        width: 100vw;
        height: 90vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.72);
        z-index: 3;
    }
    .slogan{
        width: 600px;
        height: 400px;
        color: white;
        position: absolute;
        top: 40%;
        left: 50%;
        font-size: 40px;
        transform: translate(-50%);
        z-index: 4;
    }
    .slogan h1{
        font-size: 60px;
    }
</style>