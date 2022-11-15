<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col">
        <a-card hoverable style="border: none">
          <img class="image" slot="cover" alt="example" :src="img" />
        </a-card>
      </div>
      <div class="top row justify-content-md-center col">
        <div class="top-left col-md-6">联系方式</div>
        <div class="top-right col-md-5S">
          <div class="top-right-tw">
            <div class="icon">
              <a-icon class="titleIcon" type="twitter" />
              <a href="https://twitter.com/Join0227">推特</a>
            </div>
            <div class="icon">
              <a-icon class="titleIcon" type="github" />
              <a href="https://github.com/dinghaichao0227">Github</a>
            </div>
          </div>
          <div class="top-right-fw">
            <div class="icon">
              <a-icon class="titleIcon" type="facebook" />
              <a href="https://www.facebook.com/profile.php?id=100081989381380">facebook</a>
            </div>
            <div class="icon">
              <a-icon class="titleIcon" type="wechat" />
              <a>D2517328</a>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom-left">邮箱</div>
        <div class="bottom-right">
          <div class="email">
            <a-icon class="titleIcon" type="chrome" />
            <a>dinghaichao27@gmail.com</a>
          </div>
          <div class="email">
            <a-icon class="titleIcon" type="qq" />
            <a>3083570060@qq.com</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image from "../assets/shijie.png";

export default {
  data() {
    return {
      img: image,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
}
.image {
  // width: 100%;
  height: 400px;
  border-radius: 10px;
}
.top {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  &-left {
    width: 300px;
    // background-color: #909090;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
  }
  &-right {
    // width: 700px;
    height: 200px;
    // background-color: red;
    text-align: center;
    display: flex;
    flex-wrap: wrap;

    &-tw {
      width: 700px;
      height: 100px;
      // background-color: #909090;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 1px solid #f3f2f2;

        width: 150px;
        height: 100px;
        text-align: center;
        .titleIcon {
          font-size: 24px;
        }
      }
    }
    &-fw {
      width: 700px;
      height: 100px;
      // background-color: #909090;
      display: flex;
      justify-content: center;
      align-items: center;

      .icon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 1px solid #f3f2f2;
        width: 150px;
        height: 100px;
        text-align: center;

        .titleIcon {
          font-size: 24px;
        }
      }
    }
  }
}
.bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  &-left {
    width: 300px;
    height: 200px;
    text-align: center;
    line-height: 200px;
    font-size: 20px;
    font-weight: 600;
  }
  &-right {
    width: 700px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .email {
      width: 300px;
      height: 100px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .titleIcon {
        font-size: 24px;
      }
    }
  }
}
</style>
