<template>
  <div class="header-wrap">
    <div class="wrap">
      <HeaderComp />
    </div>
  </div>
  <router-view></router-view>
  <div class="footer" id="footer">
    <FooterComp />
  </div>
  <div class="header-wrap">
    <div class="wrap">
      <HeaderComp />
    </div>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue'
import MainPage from './pages/MainPage.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainPage,
    FooterComp,
  },
  data() {},
  computed: {},
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Jost:ital@0;1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,600;1,600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:ital@0;1&display=swap');

* {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

a {
  text-decoration: none;
}

body {
  font-family: 'Jost';
}

h1,
h2,
h3,
h4 {
  font-family: 'DM Serif Display';
}

.wrap {
  width: 1200px;
  margin: 0 auto;
}

.footer {
  margin-top: 50px;
}
</style>
