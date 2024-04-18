<template>
  <header class="header">
    <router-link to="/">
      <img :class="img.class" :src="img.src" :alt="img.alt" />
    </router-link>
    <HeaderNav />
  </header>
</template>

<script>
import HeaderNav from './HeaderNav.vue'
import src from '@/assets/logo.svg'

export default {
  data() {
    return {
      link: '#',
      img: {
        src: src,
        alt: 'Inferno logo',
        class: 'header__logo',
      },
    }
  },
  components: {
    HeaderNav,
  },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
