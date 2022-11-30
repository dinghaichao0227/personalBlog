<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-12 mb-2">
        <img class="past mt-2 mb-2" :src="past" style="border-radius: 1rem" />
        <div class="card-body">
          <p>缅怀过去</p>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 mb-2">
        <img class="past mt-2 mb-2" :src="now" style="border-radius: 1rem" />
        <div class="card-body">
          <p class="card-text">珍惜现在</p>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 mb-2">
        <img class="past mt-2 mb-2" :src="future" style="border-radius: 1rem" />
        <div class="card-body">
          <p class="card-text">回想以后</p>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 mb-2">
        <img class="past mt-2 mb-2" :src="futures" style="border-radius: 1rem" />
        <div class="card-body">
          <p class="card-text">面对未来</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import day from "@/assets/day.jpg";
import day1 from "@/assets/13.jpg";
import day2 from "@/assets/homeBlue.jpg";
import day3 from "@/assets/14.jpg";
export default {
  data() {
    return {
      past: day,
      now: day1,
      future: day2,
      futures: day3,
    };
  },
};
</script>

<style lang="scss" scoped>
.past {
  width: 100%;
  height: 400px;
}
</style>
