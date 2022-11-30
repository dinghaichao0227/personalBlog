<template>
  <div class="container">
    <slide-show />
    <card-collection />
    <skill-card />
    <text-List />
  </div>
</template>

<script>
import SlideShow from "./components/SlideShow.vue";
import CardCollection from "./components/CardCollection.vue";
import SkillCard from "./components/SkillCard.vue";
import TextList from "./components/TextList.vue";
export default {
  components: {
    SlideShow,
    CardCollection,
    SkillCard,
    TextList,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: auto;
}
</style>
