<template>
  <div class="container">
    <div class="row col-md-12">
      <p class="title">文章</p>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="(item, index) in dataList" :key="index">
          <img
            style="width: 4rem; border-radius: 3rem; margin-right: 1rem"
            src="https://picx1.zhimg.com/80/v2-fc5350cb9e69cf1736845752fcd74ef4_720w.webp?source=1940ef5c"
          />
          <div class="column">
            <a href="https://juejin.cn/user/783278781765934">{{ item.title }}</a>
            <p>{{ item.label }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [
        {
          title: "vue2 与 vue3 对比",
          label: "I am a god, the god of dawn",
        },
        {
          title: "vite 与 wabpack 区别",
          label: "I am a god, the god of dawn",
        },
        {
          title: "小总结",
          label: "I am a god, the god of dawn",
        },
        {
          title: "个人简历",
          label: "I am a god, the god of dawn",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: #808080;
  margin-top: 20px;
}
</style>
