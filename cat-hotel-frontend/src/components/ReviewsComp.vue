<template>
  <article class="reviews__main">
    <figure class="reviews__review-figure">
      <img class="reviews__review-img" :src="review.imgsrc" :alt="imgalt" />
      <h4 class="reviews__review-headding" v-html="review.name"></h4>
    </figure>
    <div class="reviews__text-review">
      <div>
        <TextComp>{{ review.text }}</TextComp>
      </div>
    </div>
  </article>
</template>

<script>
import TextComp from './TextComp.vue'

export default {
  components: { TextComp },
  props: {
    review: Object,
  },
}
</script>

<style lang="scss" scoped>
.reviews {
  &__main {
    width: 1200px;
    background-color: #fff;
    border: #0a0a0a;
    border: 0px solid black;
  }

  &__review-img {
    width: 30%;
  }

  &__review-figure {
    display: flex;
    align-items: center;
    padding-top: 70px;
    padding-right: 700px;
    justify-content: space-around;
  }

  &__text-review {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;
  }
  &__review-headding {
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
