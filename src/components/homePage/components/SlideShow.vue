<template>
  <div class="container">
    <div class="row">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
            <img style="width: 100%; height: 450px" :src="studies" class="img-fluid" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img style="width: 100%; height: 450px" :src="paly" class="img-fluid" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img style="width: 100%; height: 450px" :src="radio" class="img-fluid" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img style="width: 100%; height: 450px" :src="home" class="img-fluid" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import studies from "@/assets/studies.png";
import paly from "@/assets/paly.jpg";
import radio from "@/assets/radio.jpg";
import home from "@/assets/home.jpg";
export default {
  data() {
    return {
      studies: studies,
      paly: paly,
      radio: radio,
      home: home,
    };
  },
};
</script>

<style></style>
