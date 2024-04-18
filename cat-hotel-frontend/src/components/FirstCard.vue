<template>
  <article class="projects__card">
    <figure class="projects__card-figure" :class="card.class">
      <img class="projects__card-img" :src="card.imgsrc" :alt="imgalt" />
    </figure>
    <div class="projects__text-card">
      <div>
        <h4 class="projects__card-headding" v-html="card.title"></h4>
        <TextComp>{{ card.info }}</TextComp>
      </div>
    </div>
  </article>
</template>

<script>
import TextComp from './TextComp.vue'

export default {
  components: { TextComp },
  props: {
    card: Object,
  },
}
</script>

<style lang="scss" scoped>
.projects {
  &__card {
    width: 320px;
    background-color: #fff;
    border: #0a0a0a;
    border: 0px solid black;
  }

  &__text-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;
  }
  &__card-headding {
    color: rgb(41, 47, 54);
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    margin-bottom: 20px;
  }
  &__info {
    padding-top: 5px;
  }
}
</style>
