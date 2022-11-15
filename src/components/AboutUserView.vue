<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <!-- <div class="col-md-12">
        <img class="image img-fluid" :src="img" />
      </div> -->
      <div class="col-sm-10">
        <img class="logo rounded float-start" :src="logo" alt="本人" />
      </div>
      <div class="about col-sm-11">关于我</div>
      <a-card hoverable style="width: 1200px">
        <p class="userIntroduce">
          2000年出生，喜欢运动喜欢大汗淋漓的感觉生活中我的话很多也很喜欢笑，笑可以消除一切的顾虑。今年是我正式踏入社会的第一年也是从学生转变成职场人裸辞之后的我一直在学习我希望我的努力有一个圆满的回报。
        </p>
      </a-card>
      <div class="about col-sm-11">生活的我</div>
    </div>
    <div class="row justify-content-center">
      <div class="col-sm-6 col-xl-3 mt-3">
        <a-card hoverable style="width: 250px">
          <img class="study img-fluid" :src="study" slot="cover" alt="example" />
          <p>学习中的我</p>
        </a-card>
      </div>
      <div class="col-sm-6 col-lg-3 mt-3">
        <a-card hoverable style="width: 250px">
          <img class="strive img-fluid" :src="strive" slot="cover" alt="example" />
          <p>努力中的我</p>
        </a-card>
      </div>
      <div class="col-sm-6 col-lg-3 mt-3">
        <a-card hoverable style="width: 150px">
          <img class="plays img-fluid" :src="plays" slot="cover" alt="example" />
          <p>运动中的我</p>
        </a-card>
      </div>
      <div class="col-sm-6 col-lg-3 mt-3">
        <a-card hoverable style="width: 150px">
          <img class="wuzi1 img-fluid" :src="wuzi1" slot="cover" alt="example" />
          <p>未来美好憧憬的我</p>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script>
import image from "../assets/12.png";
import logo from "../assets/user.jpg";
import study from "../assets/study.jpg";
import nuli from "../assets/nuli.png";
import plays from "../assets/palys.png";
import wuzi1 from "../assets/wuzi1.png";
export default {
  data() {
    return {
      img: image,
      logo: logo,
      study: study,
      strive: nuli,
      plays: plays,
      wuzi1: wuzi1,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 50px;
}
.logo {
  width: 100px;
  height: 100px;
}
.about {
  font-size: 20px;
  font-weight: 600;
  color: #000;
  margin: 20px;
}
.col-sm-6,
.col-lg-3 {
  width: 300px;
  display: flex;
  justify-content: center;
}
</style>
