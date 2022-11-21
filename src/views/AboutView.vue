<template>
  <div class="box">
    <input id="input" name="input" type="text" placeholder="请" />
    <button class="btn" @click.enter="onSubmit">添加</button>
    <ul v-for="(item, index) in itemList" :key="index">
      <li>{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemList: ["dhc"],
    };
  },
  methods: {
    onSubmit() {
      var text = document.getElementById("input").value;
      this.itemList.push(text);
      document.getElementById("input").value = null;
      console.log(text, 33);
      console.log(1);
    },
  },
  destroyed() {
    var on = document.removeEventListener("onSubmit", this.onSubmit);
    console.log(on, "以毁掉");
  },
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
  .btn {
    width: 80px;
    height: 20px;
    line-height: 5px;
    background-color: rgb(0, 119, 255);
    text-align: center;
  }
  #input {
    width: 150px;
    height: 30px;
  }
}
</style>
