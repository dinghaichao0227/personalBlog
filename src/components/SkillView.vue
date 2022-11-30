<template>
  <div class="box container">
    <div class="row">
      <div class="mb-3">
        <h1>技术</h1>
      </div>
      <div class="box-notes row" v-for="(item, index) in itemList" :key="index">
        <div class="box-notes-img col-md-4">
          <div class="logo">
            <img class="image mb-5" :src="item.image" alt="#" />
          </div>
        </div>
        <div class="box-notes-title col-md-8">
          <h2>{{ item.table }}</h2>
          <div class="fw-light fs-6 text-muted">{{ item.time }}</div>
          <p class="titleText">{{ item.title }}</p>
        </div>
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
          time: "2022年11月30",
          title:
            "vue的确是一款很好的开发框架个人看法有一下两点，第一点很适合新手对新手比较友好开发效率快，vue提出单页面应用对SEO不是很优化。第二点vuex用起来很爽尤其处理很多页面同时调用同一个接口。",
        },
        {
          image: uniapp,
          table: "关于uni-app",
          time: "2022年11月30",
          title:
            "uni-app不想到我用了一个月的时间学会了感觉对app开发uni-app还是不错的选择对对android studio我倾向uni-app，uni-app给我带来了不一样的体验会跟vue的写法有些相同实话说话，我真的很喜欢APP开发。",
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

.col-sm-11 {
  margin-top: 30px;
}
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    font-size: 8px;
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
      .logo {
        width: 100%;
      }
      .image {
        width: 100%;
        height: 100%;
        padding-right: 3rem;
      }
    }

    &-title {
      div {
        padding-bottom: 1rem;
        border-bottom: 1px solid rgb(223, 221, 221);
      }
      .titleText {
        word-wrap: break-word;
        text-indent: 2rem;
        padding-top: 10px;
        font-size: 17px;
        color: #000;
        @media screen and (max-width: 1200px) {
          font-size: 12px;
        }
        // transform: scale(0.66);
      }
    }
  }
}
</style>
