<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <a-carousel autoplay style="width: 1200px">
        <div v-for="(item, index) in imgList" :key="index">
          <div>
            <h3>
              <img class="imgStyle" :src="item.image" alt="#" />
            </h3>
          </div>
        </div>
      </a-carousel>
    </div>
    <div class="row justify-content-sm-center mt-3">
      <div class="col-sm-6 col-lg-4">
        <a-card hoverable style="width: 350px">
          <img class="past" :src="past" slot="cover" alt="example" />
          <p>缅怀过去</p>
        </a-card>
      </div>
      <div class="col-sm-6 col-lg-4">
        <a-card hoverable>
          <img class="past" :src="now" slot="cover" alt="example" />
          <p>珍惜现在</p>
        </a-card>
      </div>
      <div class="col-sm-6 col-lg-4">
        <a-card hoverable style="width: 350px">
          <img class="past" :src="future" slot="cover" alt="example" />
          <p>面对未来</p>
        </a-card>
      </div>
    </div>
    <div class="skill">
      <p class="text">技术小点</p>
      <div class="row justify-content-sm-center mt-3">
        <div class="skill1">
          <div class="top">
            <p class="content">
              关于我现在学的一些东西，vue2 vue3 vite
              wabpack等笔记不是很仔细但是也可以说明我学。其中介绍vue2和vue3的区别vite和wbapack区别还写了一些我可个人的看法以及观点。
            </p>
          </div>
          <a-divider dashed />
          <div class="bottom">
            <div class="left">
              <img class="left-juejin" :src="juejin" alt="#" />
            </div>
            <div class="right">
              <a-button :size="size" @click="nuggetsButton">点击</a-button>
            </div>
          </div>
        </div>
        <div class="skill2">
          <div class="top">
            <p class="content">
              有关Github
              我是2019年开始用的那时候上大学当笔记用感觉有些奢侈，2020年开始学习写项目当时用php中的Laravel框架结合vue2实现了巨丑的crud名叫bookAdmin到了2021年重新仿照这小米商城页面进行仿写以及准备毕业设计2022年有了个人项目并优化了之前的项目。
            </p>
          </div>
          <a-divider dashed />
          <div class="bottom">
            <div class="left">
              <a-icon class="left-github" type="github" />
            </div>
            <div class="right">
              <a-button :size="size" @click="githubBtn">点击</a-button>
            </div>
          </div>
        </div>
        <div class="skill3">
          <div class="top">
            <p class="content">
              慕课网是我学习前端开发的一个网站在此网站上已经学习了超过100个小时在慕课网上我真正学到了知识ccs3、scss、css动画、html5、js、es6等，最重要的还是vue2以及vue3的学习受益匪浅。
            </p>
          </div>
          <a-divider dashed />
          <div class="bottom">
            <div class="left">
              <img class="left-mooc" :src="mooc" alt="#" />
            </div>
            <div class="right">
              <a-button :size="size" @click="moocBtn">点击</a-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center col-md-12">
      <p class="title">文章</p>
      <a-list item-layout="horizontal" :data-source="dataList" style="width: 1200px">
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
</template>

<script>
import studies from "../assets/studies.png";
import paly from "../assets/paly.jpg";
import redio from "../assets/redio.jpg";
import wuzi from "../assets/wuzi.jpg";
import day from "../assets/day.jpg";
import day1 from "../assets/day1.jpg";
import day2 from "../assets/day2.jpg";
import juejin from "../assets/juejin.png";
import mooc from "../assets/mooc.png";
export default {
  data() {
    return {
      size: "small",
      past: day,
      now: day1,
      future: day2,
      juejin: juejin,
      mooc: mooc,
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
      imgList: [
        {
          image: studies,
        },
        {
          image: paly,
        },
        {
          image: redio,
        },
        {
          image: wuzi,
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

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: auto;
}
.ant-carousel >>> .slick-slide {
  text-align: center;
  background: #364d79;
  overflow: hidden;
  border-radius: 10px;
  margin-top: 50px;
  height: 400px;
}
.ant-carousel >>> .slick-slide h3 {
  color: #fff;
  border-radius: 10px;
}
.imgStyle {
  width: 100%;
  height: 400px;
}
.past {
  width: 100%;
  height: 400px;
}

.skill {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.skillContent {
  display: flex;
  justify-content: center;
}
.text {
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: #808080;
  margin-top: 20px;
}
.skill1,
.skill2,
.skill3 {
  width: 370px;
  height: 300px;
  background-color: #f9f9f9;
  padding: 10px;
  margin: 19px;
}
/* .skill2 {
  margin: 0px 40px;
} */
.top {
  width: 350px;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
}
.content {
  width: 350px;
  height: 200px;
  word-wrap: break-word;
  text-align: left;
  text-indent: 2rem;
  padding-top: 30px;
}
.bottom {
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: #808080;
  margin-top: 20px;
}
.left-juejin,
.left.github,
.left-mooc {
  width: 20px;
  height: 20px;
}

.col-sm-6,
.col-log-4 {
  width: 420px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
}
</style>
