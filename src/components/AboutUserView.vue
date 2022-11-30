<template>
  <div class="container">
    <div class="row">
      <div class="header d-none d-sm-block">
        <img class="header-strive img-fluid" :src="bg" />
      </div>
    </div>
    <div class="row">
      <div class="logo mb-2">
        <img class="logo-img" :src="logo" alt="本人" />
      </div>
      <div class="fs-3 mt-5">关于我</div>
      <div>
        <p class="userText fs-6 mt-2">
          2000年出生，喜欢运动喜欢大汗淋漓的感觉生活中我的话很多也很喜欢笑，笑可以消除一切的顾虑。今年是我正式踏入社会的第一年也是从学生转变成职场人裸辞之后的我一直在学习我希望我的努力有一个圆满的回报。
        </p>
      </div>
      <div class="fs-3 mb-2">生活的我</div>
    </div>
    <div class="row">
      <div class="col-lg-3 col-sm-6">
        <div>
          <img class="study img-fluid" :src="study" slot="cover" alt="example" />
          <p>学习中的我</p>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6">
        <div>
          <img class="study img-fluid" :src="strive" slot="cover" alt="example" />
          <p>努力中的我</p>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6">
        <div>
          <img class="study img-fluid" :src="plays" slot="cover" alt="example" />
          <p>运动中的我</p>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6">
        <div>
          <img class="study img-fluid" :src="wuzi1" slot="cover" alt="example" />
          <p>未来美好憧憬的我</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image from "../assets/12.png";
import logo from "../assets/user.jpg";
import study from "../assets/study.jpg";
import nuli from "../assets/13.jpg";
import plays from "../assets/kebi.png";
import wuzi1 from "../assets/wuzi1.png";
export default {
  data() {
    return {
      bg: image,
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
.header {
  width: 100%;
  height: 25rem;

  &-strive {
    width: 100%;
    height: 24rem;
  }
}
.logo {
  width: 6.3rem;
  height: 6rem;
  &-img {
    width: 100%;
    height: 100%;
    margin-left: 5rem;
  }
}
.userText {
  text-indent: 2rem;
  border: 1px solid rgb(226, 226, 226);
  padding: 2rem;
}
.study {
  width: 100%;
  height: 25rem;
  margin-bottom: 2rem;
}
// .container {
//   margin-top: 50px;
// }
// .logo {
//   width: 100px;
//   height: 100px;
// }
// .about {
//   font-size: 20px;
//   font-weight: 600;
//   color: #000;
// }
// .col-sm-6,
// .col-lg-3 {
//   width: 300px;
//   display: flex;
//   justify-content: center;
// }
</style>
