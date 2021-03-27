<template>
  <nav>
    <div
      class="home"
      @click="isclick"
      :style="{ transform: `rotate(${homeDeg}deg)` }"
    >
      <img width="100%" src="../assets/home.png" alt="" />
    </div>
    <ul>
      <li :style="isOpen ? {transform: 'translateX('+item*200+'px)',opacity:1}:{opacity:0}" v-for="item in 5" :key="item">
        你好 <!--  <router-link to=""></router-link> -->
      </li>
    </ul>
    <div>
      <!-- <router-view></router-view> -->
    </div>
  </nav>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      homeDeg: 0,
      isOpen: false,
    };
    
  },
  methods:{
    isclick(){
      this.homeDeg += 360;
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

nav {
  width: 50px;
  height: 50px;
  position: fixed;
  left: 0;
  top: 0;
}

.home {
  width: 50px;
  height: 50px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
  transition: transform 0.5s;
  opacity: 0.5;
}

img {
  border-radius: 50%;
}

ul {
  position: absolute;
  width: 42px;
  height: 42px;
  left: 4px;
  top: 4px;
}

li {
  position: absolute;
  left: 0;
  top: 0;
  width: 42px;
  height: 42px;
  transition: transform 0.5s;
  line-height: 42px;
  text-align: center;
}
</style>
