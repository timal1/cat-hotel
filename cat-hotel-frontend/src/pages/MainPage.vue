<template>
  <div class="main-wrap">
    <img class="main-wrap__bkg" src="@/assets/img/cat-main.jpg" alt="#" />
    <div class="wrap">
      <div class="main_picture">
        <p class="main_picture__sity">Воронеж</p>
        <h1 class="main_picture__site">Котейка</h1>
        <p class="main_picture__text">Уютная гостиница для котов и кошек</p>
        <ButtonBook></ButtonBook>
      </div>
      <div class="flex-center">
        <div class="projects-wrap">
          <div class="projects__text-box">
            <h1>Почему мы?</h1>
          </div>
          <div class="projects__box">
            <FirstCard
              v-for="(card, index) in firstCards"
              :key="index"
              :card="card"
            />
          </div>
        </div>
      </div>
      <div class="room-wrap">
        <div class="wrap">
          <div class="room-wrap__title">
            <h1>Номера</h1>
          </div>
          <SwipperZoom></SwipperZoom>
        </div>
      </div>
    </div>
  </div>
  <div id="footer"></div>
</template>

<script>
import FirstCard from '../components/FirstCard.vue'
import SwipperZoom from '@/components/SwipperZoom.vue'
import ContactModal from '@/components/ContactModal.vue'
import ButtonBook from '@/components/ButtonBook.vue'

import { mapState } from 'vuex'

export default {
  components: {
    FirstCard,
    SwipperZoom,
    ContactModal,
    ButtonBook,
  },
  data() {
    return {
      isShowModal: false,
    }
  },
  computed: {
    ...mapState({
      firstCards: (state) => state.firstCards.slice(0, 6),
    }),
  },
  methods: {
    toggleModal() {
      this.isShowModal = !this.isShowModal
    },
  },
}
</script>

<style lang="scss" scoped>
.flex-center {
  display: flex;
  justify-content: center;
}

.room-wrap {
  padding-top: 100px;
  &__title {
    text-align: center;
    font-family: Rubik;
    font-size: 36px;
    font-weight: 700;
    line-height: 42.66px;
    margin-bottom: 30px;
    color: #1a212f;
  }
}

.main-wrap {
  position: relative;
  padding-top: 153px;
  padding-bottom: 300px;
  padding: 153px 0px 150px 175px;
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

.main_picture {
  &__sity {
    font-family: Lato;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.8px;
    text-align: left;
    padding-bottom: 15px;
  }

  &__text {
    font-family: Lato;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    padding-bottom: 15px;
    margin-bottom: 30px;
  }

  &__site {
    font-family: Rubik;
    font-size: 62px;
    font-weight: 700;
    line-height: 73.47px;
    text-align: left;
    padding-bottom: 15px;
  }
}

.projects-wrap {
  padding-top: 500px;
  position: relative;
}

.projects {
  &__text-box {
    text-align: center;
    font-family: Rubik;
    font-size: 36px;
    font-weight: 700;
    line-height: 42.66px;
    text-align: center;
    margin: auto;
  }

  &__box {
    padding-top: 115px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__card:nth-child(4),
  &__card:nth-child(5),
  &__card:nth-child(6) {
    padding-top: 56px;
  }
}
</style>
