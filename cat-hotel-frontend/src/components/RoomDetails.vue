<template>
  <article class="room__card">
    <figure class="room__card-figure" :class="card.class">
      <img class="room__card-img" :src="card.imgsrc" :alt="card.imgalt" />
    </figure>
    <div class="room__text-card">
      <div>
        <h2 class="room__card-headding" v-html="card.title"></h2>
        <TextComp>{{ card.sizes }}</TextComp>
        <TextComp>{{ card.square }}</TextComp>
        <TextComp>{{ card.equipment }}</TextComp>
        <div v-if="card.id > 0" class="room__facility">
          <img
            :src="roomFacilities[0].imgsrc"
            :alt="roomFacilities[0].imgalt"
          />
          <TextComp class="room__facility-text">{{
            roomFacilities[0].title
          }}</TextComp>
        </div>
        <div v-if="card.id > 3" class="room__facility">
          <img
            :src="roomFacilities[1].imgsrc"
            :alt="roomFacilities[1].imgalt"
          />
          <TextComp class="room__facility-text">{{
            roomFacilities[1].title
          }}</TextComp>
        </div>
        <div v-if="card.id > 1" class="room__facility">
          <img
            :src="roomFacilities[2].imgsrc"
            :alt="roomFacilities[2].imgalt"
          />
          <TextComp class="room__facility-text">{{
            roomFacilities[2].title
          }}</TextComp>
        </div>
        <div v-if="card.id > 0" class="room__facility">
          <img
            :src="roomFacilities[3].imgsrc"
            :alt="roomFacilities[3].imgalt"
          />
          <TextComp class="room__facility-text">{{
            roomFacilities[3].title
          }}</TextComp>
        </div>
        <TextComp>{{ card.price }}</TextComp>
        <ButtonBook
          :classButton="classButton"
          :classPaw="classPaw"
          :roomId="card.id"
        ></ButtonBook>
      </div>
    </div>
  </article>
</template>

<script>
import TextComp from './TextComp.vue'
import ButtonBook from '@/components/ButtonBook.vue'
import { mapState } from 'vuex'

export default {
  components: { TextComp, ButtonBook },
  props: {
    card: { type: Object },
  },
  computed: {
    ...mapState({
      roomFacilities: (state) => state.roomFacilities,
    }),
  },
  data() {
    return {
      isShowModal: false,
      classButton: 'room_text__button',
      classPaw: 'room_text__button___paw',
    }
  },
  methods: {
    toggleModal() {
      this.isShowModal = !this.isShowModal
    },
  },
}
</script>

<style lang="scss" scoped>
.room {
  &__card {
    width: 900px;
    height: 500px;
    background-color: #fff;
    border: #0a0a0a;
    border: 0px solid black;
    display: flex;
  }

  &__card-img {
    width: 500px;
  }

  &__text-card {
    padding-left: 40px;

    align-items: center;
  }
  &__card-headding {
    color: rgb(41, 47, 54);
    font-family: Rubik;
    font-size: 36px;
    font-weight: 700;
    line-height: 42.66px;
    text-align: left;

    margin-bottom: 20px;
  }
  &__info {
    padding-top: 5px;
  }
  &__facility {
    display: flex;
  }

  &__facility-text {
    padding-left: 20px;
  }
}

.room_text {
  position: absolute;
}
</style>
