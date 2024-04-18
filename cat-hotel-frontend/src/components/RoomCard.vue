<template>
  <article class="room__card">
    <router-link :to="{ name: 'details', params: { id: index } }">
      <figure class="room__card-figure" :class="card.class">
        <img class="room__card-img" :src="card.imgsrc" :alt="card.imgalt" />
      </figure>
    </router-link>
    <div class="room__text-card">
      <div>
        <h4 class="room__card-headding" v-html="card.title"></h4>
        <TextComp>{{ card.sizes }}</TextComp>
        <TextComp>{{ card.square }}</TextComp>
        <div class="room__text-facility">
          <TextComp>{{ card.equipment }}</TextComp>
          <div v-if="card.id > 0" class="room__facility">
            <img
              :src="roomFacilities[0].imgsrc"
              :alt="roomFacilities[0].imgalt"
            />
          </div>
          <div v-if="card.id > 3" class="room__facility">
            <img
              :src="roomFacilities[1].imgsrc"
              :alt="roomFacilities[1].imgalt"
            />
          </div>
          <div v-if="card.id > 1" class="room__facility">
            <img
              :src="roomFacilities[2].imgsrc"
              :alt="roomFacilities[2].imgalt"
            />
          </div>
          <div v-if="card.id > 0" class="room__facility">
            <img
              :src="roomFacilities[3].imgsrc"
              :alt="roomFacilities[3].imgalt"
            />
          </div>
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
    card: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  computed: {
    ...mapState({
      roomFacilities: (state) => state.roomFacilities,
    }),
  },
  data() {
    return {
      isShowModal: false,
      id: this.card.id,
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
    width: 350px;
    height: 600px;
    background-color: #fff;
    border: #0a0a0a;
    border: 0px solid black;
  }

  &__card-img {
    width: 100%;
  }

  &__text-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;
  }

  &__text-facility {
    display: flex;
    justify-content: space-between;
    text-align: center;
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

.room_text {
  position: absolute;
}
</style>
