<template>
  <div class="catalog-wrap">
    <div class="wrap flex-center">
      <section class="catalog">
        <h1>Наши номера</h1>
      </section>
    </div>
  </div>
  <div class="wrap">
    <div class="catalog__container">
      <RoomCard
        v-for="(card, index) in roomCards"
        :index="index"
        :key="card"
        :card="card"
      />
    </div>
  </div>
</template>

<script>
import RoomCard from '@/components/RoomCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    RoomCard,
  },

  computed: {
    ...mapState({
      roomCards: (state) => state.roomCards,
    }),
  },
}
</script>

<style lang="scss" scoped>
.flex-center {
  display: flex;
  justify-content: center;
}
.catalog-wrap {
  position: relative;
  padding-top: 70px;
  border: 1px solid rgb(244, 240, 236);
  overflow: hidden;

  &__bkg {
    position: absolute;
    min-width: 100vw;
    top: 0;
    left: 0;
    background: rgb(244, 240, 236);
    z-index: -1;
  }
}

.catalog {
  text-align: center;
  border-radius: 37px 37px 0px 0px;
  background: rgb(255, 255, 255);
  padding: 41px 78px;
  max-width: 502px;

  &__filters {
    display: flex;
    justify-content: space-between;
    margin-top: 200px;
    margin-bottom: 61px;
    width: 880px;
    height: 75px;
    box-sizing: border-box;
    border: 1px solid rgb(205, 162, 116);
    border-radius: 18px;
  }
  &__filter {
    text-align: center;
    color: rgb(41, 47, 54);
    font-size: 18px;
    font-weight: 600;
    line-height: 125%;
    padding: 26px 66px;
  }
  &__filter:hover {
    border-radius: 18px;
    background: rgb(255, 193, 127);
    cursor: pointer;
  }
  &__container {
    column-count: 3;
  }
  &__card {
    padding-top: 0;
    padding-bottom: 56px;
    width: 98.82%;
  }
}
</style>
