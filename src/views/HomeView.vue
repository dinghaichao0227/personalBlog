<template>
  <div>
    <div class="header">
      <div class="container header-tabbar">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container" style="height: 1.5rem; line-height: 1rem">
            <a class="navbar-brand" href="#">logo</a>
            <button
              class="navbar-toggler"
              type="button"
              style="height: 1.5rem; line-height: 0rem"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="bi bi-list-ul"></i>
              <span
                class="navbar-toggler-icon"
                style="width: 1rem; height: 1rem; border: none"
              ></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="homePage">首页</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="skill">技能</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="notes">笔记</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="phone">联系</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="aboutUser">关于我</a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2 mt-1"
                  style="height: 1.5rem"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-success btn-sm mt-1"
                  style="height: 1.5rem; line-height: 0rem"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
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
    },
  },
  mounted() {
    this.getUrl();
  },
};
</script>

//
<style lang="scss" scoped>
.header {
  // width: 100vw;
  height: 40px;
  display: flex;
  justify-content: center;
  background-color: #f8f9fa;
  margin-bottom: 20px;
}

.navbar {
  z-index: 200;
  display: flex;
  align-content: center;
}
.layout {
  z-index: 199;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  &-footer {
    text-align: center;
    margin-top: 50px;
  }
}
div ul li a:hover {
  background-color: rgb(235, 235, 235);
}
</style>
