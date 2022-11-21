<template>
  <div class="boxs">
    <div class="header row justify-content-md-center">
      <div class="header-box">
        <div class="header-box-top col-sm-7">
          <div class="logo">blog</div>
        </div>
        <div class="col-sm-6">
          <a-menu class="header-box-menu" :default-selected-keys="[$route.path]" mode="horizontal">
            <a-menu-item class="home" key="/homePage" @click="changeMenu('homePage')">
              <a-icon type="home" />主页</a-menu-item
            >
            <a-menu-item class="home" key="/skill" @click="changeMenu('skill')">
              <a-icon type="copy" />笔记</a-menu-item
            >
            <a-menu-item class="home" key="/notes" @click="changeMenu('notes')">
              <a-icon type="global" />技能</a-menu-item
            >
            <a-menu-item class="home" key="/phone" @click="changeMenu('phone')"
              ><a-icon type="phone" />联系</a-menu-item
            >
            <a-menu-item class="home" key="/aboutUser" @click="changeMenu('aboutUser')">
              <a-icon type="user" />关于我</a-menu-item
            >
          </a-menu>
        </div>
      </div>
    </div>
    <div class="layout">
      <router-view></router-view>
      <p class="layout-footer">已经到底了。。。</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // image: logo,
      url: "http://www.xxx.com?a=1&b=2&c=3",
    };
  },
  methods: {
    changeMenu(route) {
      console.log(route);
      if (this.$route.path !== route) {
        this.$router.push(route);
      }
    },

    //假设有个方法
    getUrl() {
      var arr = [1, 2, 3, 4, 5, 6];
      console.log(arr.splice(3));

      // for (var i = 0; i < arr.length; i++) {
      //   for (var j = i + 1; j < arr.length; j++) {
      //     if (arr[i] == arr[j]) {
      //       arr.splice(j);
      //     }
      //   }
      // }
      // console.log(arr);

      //     var q = [];
      //     this.url.split("?")[1];
      //     q = this.url.split("?")[1];
      //     console.log(q);
      //     let value = [];
      //     value = q.split("&");
      //     console.log(value);
      //     let obj = {};
      //     for (var i = 0; i < value.length; i++) {
      //       var item = value[i].split("=");
      //       console.log(item);
      //       obj[value[i]];
      //       obj[item[0]] = item[1];
      //     }
      //     console.log(obj, 99);
      //     return obj;
    },
  },
  mounted() {
    this.getUrl();
  },
};
</script>

<style lang="scss" scoped>
.boxs {
  // width: 100vw;
}
.header {
  display: flex;
  width: 101%;
  height: 40px;
  position: fixed;
  justify-content: center;
  z-index: 200;
  opacity: 0.7;
  background-color: #f1f1f1;
  &-box {
    z-index: 200;
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 1200px;
    height: 40px;
    opacity: 0.8;
    color: #000;
    background-color: #f1f1f1;
    .logo {
      display: inline-block;
      // width: 40px;
      height: 40px;
      line-height: 30px;
      font-size: 20px;
      color: #000;
    }
    &-menu {
      border-bottom: none;
      display: flex;
      justify-content: center;
      align-items: center;
      background: none;
      color: #000;

      .home {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        line-height: 40px;
      }
    }
  }
}

.layout {
  z-index: 199;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  // width: 1200px;
  // background-image: url("../assets/3.jpg");
  // background-repeat: no-repeat;
  // background-size: 100% 100%;
  &-footer {
    text-align: center;
    margin-top: 50px;
  }
}
</style>
