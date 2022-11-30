<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="header-img">
          <img class="image img-fluid" :src="img" />
        </div>
      </div>
      <div class="top row mt-5">
        <div class="top-left fs-2 col-md-4 mb-2">联系方式</div>
        <div class="top-right col-md-8 justify-content-end">
          <div class="row">
            <div class="top-right-tw col-md-12">
              <div class="icon">
                <a-icon class="titleIcon" type="twitter" />
                <a href="https://twitter.com/Join0227">推特</a>
              </div>
              <div class="icon">
                <a-icon class="titleIcon" type="github" />
                <a href="https://github.com/dinghaichao0227">Github</a>
              </div>
            </div>
            <div class="top-right-fw col-md-12">
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
      </div>
      <div class="bottom mt-5 row">
        <div class="bottom-left fs-2 col-md-4">邮箱地址</div>
        <div class="bottom-right col-md-8">
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
.header-img {
  width: 100%;
  height: 20rem;
  .image {
    width: 100%;
    height: 100%;
  }
}
// .container {
//   margin-top: 50px;
//   display: flex;
//   flex-direction: column;
// }
// .image {
//   // width: 100%;
//   height: 400px;
//   border-radius: 10px;
// }
.top {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  &-left {
    text-align: center;
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
    text-align: center;
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
