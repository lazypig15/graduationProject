<template>
  <nav>
    <div
      class="home"
      @click="isclick"
      :style="{ transform: `rotate(${homeDeg}deg)` }"
    >
      <img width="100%" src="../assets/images/home.png" alt="" />
    </div>
    <ul>
      <li 
        @click="navIndex = index" 
        :class="{line: navIndex === index}" 
        :style="isOpen ? {transform: 'translateX(-'+(index+1)*150+'px)',transition: 'all 0.5s',opacity:1}:{transform:'translateX(0px)',transition: 'all 0.5s',opacity:0}" 
        v-for="(item,index) in navContent" 
        :key="index"
      >
        <router-link :class="{oncheck: navIndex === index}" :to="routerList[index]">{{item}}</router-link></li>
    </ul>
  </nav>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      homeDeg: 0,
      isOpen: false,
      navContent: ['登录/注册','商家入驻','首页'],
      navIndex: 2,
      routerList:['/login','/addUs','/home']
    };
  },
  methods:{
    isclick(){
      this.homeDeg += 360;
      this.isOpen = !this.isOpen
    },
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
}
nav{
  position: fixed;
  top: 10px;
  z-index: 9999999;
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
  /* width: 42px; */
  height: 42px;
  transition: transform 0.5s;
  line-height: 42px;
  text-align: center;
  cursor: pointer;
  font-size: 15px;
}
li > a{
  color: #AAAABB;
}
li > a.oncheck{
  color: #fff;
}
li.line{
  border-bottom: 2px solid #fff;
}
</style>
