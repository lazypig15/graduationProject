<template>
    <div>
        <shop-nav></shop-nav>
        <router-view/>
    </div>
</template>
<script>
    import ShopNav from "./components/Nav";

    export default {
        data() {
            return {

            }
        },
        components: {
            ShopNav,
        },
        mounted() {
            this.$Loading.config({
                color: '#5cb85c',
                failedColor: '#f0ad4e',
                height: 5
            });
        }
    }
</script>
<style scoped>
    @import "../node_modules/animate.css/animate.css";
</style>
