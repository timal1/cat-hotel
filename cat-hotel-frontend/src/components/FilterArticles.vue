<template>
  <button class="blog-articles__btn" :class="active">
    {{ btnname }}
  </button>
</template>

<script>
export default {
  props: ['btnname'],
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.blog-articles {
  &__btn {
    padding: 9px 30px;
    border-radius: 10px;
    background-color: rgb(244, 240, 236);
    font-family: inherit;
    color: rgb(41, 47, 54);
    font-size: 18px;
    font-weight: 400;
    line-height: 125%;
    text-transform: capitalize;
    text-align: center;
    margin-right: 10px;
    margin-bottom: 10px;
    border: 1px solid rgb(244, 240, 236);
    transition: all 0.3s;
  }
  &__btn:hover {
    border: 1px solid rgb(41, 47, 54);
    cursor: pointer;
  }
}
</style>
