<template>
    <div>
        <div class="index_bg">
            <img src="../assets/images/d.jpg" alt="">
            <div class="mask"></div>
            <div class="slogan">
                <div class="left_logo">
                    <img src="../assets/images/slogan.png" alt="">
                </div>
                <div class="right_text">
                    <h1>新一代网购平台</h1>
                    <h2> 力保全新正品</h2>
                    <p>正品保障 · 放心购买</p>
                    <div>
                        <button></button>
                        <button></button>
                    </div>
                </div>
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
        width: 900px;
        justify-content: space-between;
        height: 400px;
        display: flex;
        color: white;
        position: absolute;
        top: 25%;
        left: 50%;
        font-size: 40px;
        transform: translate(-50%);
        z-index: 4;
    }
    .slogan h1{
        font-size: 60px;
        font-weight: lighter;
    }
    .slogan h2{
        font-size: 50px;
        font-weight: lighter;
    }
    .slogan p{
        font-size: 30px;
        font-weight: lighter;
    }

    .slogan img{
        width: 400px;
        height:580px;
        border-radius: 20px;
    }
</style>