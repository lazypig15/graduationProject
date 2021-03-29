<template>
    <nav>
        <div
                class="home"
                @click="isClick"
                :style="{ transform: `rotate(${homeDeg}deg)` }"
        >
            <img width="100%" src="../assets/images/home.png" alt=""/>
        </div>
        <ul>
            <li
                    :style="isOpen ? {transform: 'translateX(-'+(index+1)*150+'px)',transition: 'all 0.5s',opacity:1}:{transform:'translateX(0px)',transition: 'all 0.5s',opacity:0}"
                    v-for="(item,index) in navContent"
                    :key="index"
            >
                <router-link :to="{path:routerList[index]}">{{item}}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                homeDeg: 0,
                isOpen: true,
                navContent: ['购物车', '登录/注册', '商家入驻', '首页'],
                routerList: ['carList', '/login', '/addUs', '/home'],
            };
        },
        methods: {
            isClick() {
                this.homeDeg += 360;
                this.isOpen = !this.isOpen
            },
        },
        computed: {
            router() {
                return this.routerList[this.navIndex]
            }
        }
    }
</script>

<style scoped>

    ul {
        list-style: none;
    }

    nav {
        width: 50px;
        height: 50px;
        position: fixed;
        right: 10px;
        top: 0;
        position: fixed;
        top: 10px;
        z-index: 9999;
    }

    .home {
        width: 50px;
        height: 50px;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 3;
        transition: transform 0.5s;
        opacity: 1;
    }

    img {
        border-radius: 50%;
    }

    ul {
        position: absolute;
        width: 80px;
        height: 42px;
        left: 4px;
        top: 4px;
    }

    li {
        position: absolute;
        left: 0;
        top: 0;
        height: 42px;
        transition: transform 0.5s;
        line-height: 42px;
        text-align: center;
        cursor: pointer;
        font-size: 16px;
    }

    li > a {
        color: #AAAABB;
    }

    .router-link-active {
        display: block;
        color: deepskyblue;
        border-bottom: 2px solid deepskyblue;
        font-weight: bolder;
    }

</style>
