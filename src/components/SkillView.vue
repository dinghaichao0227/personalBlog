<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-sm-11">
        <h1>日常笔记</h1>
      </div>
      <div class="col-sm-11">
        <a-list item-layout="horizontal" :data-source="dataList">
          <a-list-item slot="renderItem" slot-scope="item">
            <a-list-item-meta
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            >
              <a slot="title" href="https://juejin.cn/user/783278781765934">{{ item.title }}</a>
              <a-avatar
                slot="avatar"
                src="https://picx1.zhimg.com/80/v2-fc5350cb9e69cf1736845752fcd74ef4_720w.webp?source=1940ef5c"
              />
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </div>
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
        },
        {
          title: "vite 与 wabpack 区别",
        },
        {
          title: "小总结",
        },
        {
          title: "个人简历",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 20px;
}
h1 {
  width: 100%;
  height: 100px;
  line-height: 100px;
  font-size: 20px;
  font-weight: 600;
}
.image {
  width: 100%;
  height: 200px;
}
</style>
