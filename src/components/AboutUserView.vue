<template>
  <div>
    <a-card hoverable>
      <img class="image" slot="cover" alt="example" :src="img" />
    </a-card>
    <img class="logo" :src="logo" alt="本人" />
    <div class="about">关于我</div>
    <a-card hoverable>
      <p class="userIntroduce">
        2000年出生，喜欢运动喜欢大汗淋漓的感觉生活中我的话很多也很喜欢笑，笑可以消除一切的顾虑。今年是我正式踏入社会的第一年也是从学生转变成职场人裸辞之后的我一直在学习我希望我的努力有一个圆满的回报。
      </p>
    </a-card>
    <div class="about-Life">生活的我</div>
    <div class="main">
      <a-card hoverable style="width: 290px">
        <img class="study" :src="study" slot="cover" alt="example" />
        <p>学习中的我</p>
      </a-card>
      <a-card hoverable style="width: 290px">
        <img class="strive" :src="strive" slot="cover" alt="example" />
        <p>努力中的我</p>
      </a-card>
      <a-card hoverable style="width: 290px">
        <img class="plays" :src="plays" slot="cover" alt="example" />
        <p>运动中的我</p>
      </a-card>
      <a-card hoverable style="width: 290px">
        <img class="wuzi1" :src="wuzi1" slot="cover" alt="example" />
        <p>未来美好憧憬的我</p>
      </a-card>
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
.image {
  width: 1200px;
  height: 500px;
  border-radius: 10px;
}
.logo {
  width: 100px;
  height: 100px;
  margin-left: 100px;
  position: relative;
  top: -50px;
}
.about,
.about-Life {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
}
.about-Life {
  margin-top: 20px;
}
.main {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.study,
.strive,
.plays,
.wuzi1 {
  width: 100%;
  height: 330px;
}
.userIntroduce {
  text-indent: 2rem;
}
</style>
