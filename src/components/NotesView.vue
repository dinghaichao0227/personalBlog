<template>
  <div class="box">
    <p class="title">技术</p>
    <div class="box-notes" v-for="(item, index) in itemList" :key="index">
      <div class="box-notes-img">
        <img class="image" :src="item.image" alt="#" />
      </div>
      <div class="box-notes-title">
        <h2>{{ item.table }}</h2>
        <a-divider dashed />
        <p class="titleText">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import vue from "../assets/vue.jpg";
import uniapp from "../assets/uniapp.png";
export default {
  data() {
    return {
      itemList: [
        {
          image: vue,
          table: "关于Vue",
          title:
            "vue的确是一款很好的开发框架个人看法有一下两点，第一点很适合新手对新手比较友好开发效率快，vue提出单页面应用对SEO不是很优化。第二点vuex用起来很爽尤其处理很多页面同时调用同一个接口。",
        },
        {
          image: uniapp,
          table: "关于Uniapp",
          title:
            "uniapp不想到我用了一个月的时间学会了感觉对app开发uniapp还是不错的选择对对android studio我倾向uniapp，uniapp给我带来了不一样的体验会跟vue的写法有些相同实话说话，我真的很喜欢APP开发。",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
  .title {
    font-size: 24px;
    color: #000;
    font-weight: 600;
    width: 100%;
    height: 100px;
    line-height: 100px;
  }
  &-notes {
    display: flex;
    justify-content: space-between;
    &-img {
      .image {
        width: 300px;
        height: 300px;
        border-radius: 10px;
        margin-bottom: 20px;
      }
    }
    &-title {
      .titleText {
        width: 700px;
        height: 300px;
        word-wrap: break-word;
        text-indent: 2rem;
        padding-top: 20px;
        font-size: 17px;
        color: #000;
      }
    }
  }
}
</style>
