<template>
  <div class="container">
    <div class="skill">
      <p class="skill-text">技术小点</p>
      <div class="row mt-3">
        <div class="col-lg-4" v-for="(item, index) in textList" :key="index">
          <div class="main mb-2">
            <div class="skill-top">
              <p class="skill-top-content">
                {{ item.title }}
              </p>
            </div>
            <div class="skill-bottom">
              <div class="skill-bottom-left">
                <img class="icon" :src="item.icon" alt="#" />
              </div>
              <div class="skill-bottom-right">
                <button class="btn btn-secondary btn-sm" @click="nuggetsButton">点击</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import juejin from "@/assets/juejin.png";
import mooc from "@/assets/mooc.png";
import GitHub from "@/assets/GitHub.png";
export default {
  data() {
    return {
      textList: [
        {
          title:
            "关于我现在学的一些东西，vue2 vue3 vite wabpack等笔记不是很仔细但是也可以说明我学。其中介绍vue2和vue3的区别vite和wbapack区别还写了一些我可个人的看法以及观点。",
          icon: juejin,
        },
        {
          title:
            "有关 Github 我是2019年开始用的那时候上大学当笔记用感觉有些奢侈，2020年开始学习写项目当时用php中的Laravel框架结合vue2实现了巨丑的crud名叫bookAdmin到了2021年重新仿照这小米商城页面进行仿写以及准备毕业设计2022年有了个人项目并优化了之前的项目。",
          icon: GitHub,
        },
        {
          title:
            "慕课网是我学习前端开发的一个网站在此网站上已经学习了超过100个小时在慕课网上我真正学到了知识ccs3、scss、css动画、html5、js、es6等，最重要的还是vue2以及vue3的学习受益匪浅。",
          icon: mooc,
        },
      ],
    };
  },
  methods: {
    nuggetsButton() {
      window.open("https://juejin.cn/user/783278781765934");
      console.log("掘金");
    },
    githubBtn() {
      window.open("https://github.com/dinghaichao0227");
      console.log("github");
    },
    moocBtn() {
      window.open("https://www.imooc.com/");
      console.log("mooc");
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  background-color: rgb(244, 240, 240);
  padding: 20px;
  border-radius: 1rem;
}
.skill {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  &-text {
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    color: #808080;
    margin-top: 20px;
  }
  &-top {
    height: 180px;
    border-bottom: 1px solid #808080;
    display: flex;
    flex-wrap: wrap;

    &-content {
      word-wrap: break-word;
      text-align: left;
      text-indent: 2rem;
      padding-top: 20px;
      font-size: 13px;
    }
  }
  &-bottom {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-left {
      .icon {
        width: 20px;
        height: 20px;
      }
    }
  }
}

.left-juejin,
.left.github,
.left-mooc {
  width: 20px;
  height: 20px;
}
</style>
