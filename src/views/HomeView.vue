<template>
  <div class="boxs">
    <div class="header">
      <div class="header-box">
        <div class="header-box-top">
          <!-- <img :src="image" alt="#" /> -->
          <h1>blog</h1>
        </div>
        <a-menu class="header-box-menu" :default-selected-keys="[$route.path]" mode="horizontal">
          <a-menu-item key="/homePage" @click="changeMenu('homePage')">
            <a-icon type="home" />主页</a-menu-item
          >
          <a-menu-item key="/skill" @click="changeMenu('skill')">
            <a-icon type="copy" />笔记</a-menu-item
          >
          <a-menu-item key="/notes" @click="changeMenu('notes')">
            <a-icon type="global" />技能</a-menu-item
          >
          <a-menu-item key="/phone" @click="changeMenu('phone')"
            ><a-icon type="phone" />联系</a-menu-item
          >
          <a-menu-item key="/aboutUser" @click="changeMenu('aboutUser')">
            <a-icon type="user" />关于我</a-menu-item
          >
        </a-menu>
      </div>
    </div>
    <div class="layout">
      <div class="layout-box">
        <router-view></router-view>
        <p class="footer">已经到底了。。。</p>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../assets/logo.png";
export default {
  data() {
    return {
      image: logo,
    };
  },
  methods: {
    changeMenu(route) {
      console.log(route);
      if (this.$route.path !== route) {
        this.$router.push(route);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 99.5vw;
  height: 50px;
  position: fixed;
  z-index: 200;
  opacity: 0.7;
  background-color: #f1f1f1;
  &-box {
    z-index: 200;
    position: fixed;
    // top: 0.05%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    height: 50px;
    opacity: 0.8;
    color: #000;
    background-color: #f1f1f1;

    img {
      width: 40px;
      height: 40px;
      display: inline-block;

      .logo {
        display: inline-block;
        width: 40px;
        height: 40px;
        color: #000;
      }
    }
    &-menu {
      border-bottom: none;
      display: flex;
      background: none;
      color: #000;
    }
  }
}

.layout {
  z-index: 199;
  display: flex;
  justify-content: center;
  align-content: center;
  // background-image: url("../assets/3.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  &-box {
    width: 1200px;
    margin-top: 70px;
    // margin-bottom: 100px;
    // background-color: gray;
    .footer {
      text-align: center;
      margin-top: 50px;
    }
  }
}
</style>
