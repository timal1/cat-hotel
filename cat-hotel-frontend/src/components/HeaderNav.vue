<template>
  <nav class="header__nav">
    <router-link
      v-for="(navItem, index) in navItems"
      :key="index"
      :to="navItem.link"
    >
      <p class="header__item">{{ navItem.content }}</p>
    </router-link>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      navItems: [
        { content: 'Почему мы?', link: '/' },
        { content: 'Номера', link: '/catalog' },
        { content: 'Отзывы', link: '/reviews' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.header__nav {
  display: flex;
  justify-content: space-between;
  width: 500px;
  color: rgb(41, 47, 54);
  font-size: 20px;
  font-weight: 400;
  line-height: 125%;
}

.header__item {
  color: rgb(41, 47, 54);
  font-size: 20px;
  font-weight: 400;
  line-height: 125%;
}
</style>
