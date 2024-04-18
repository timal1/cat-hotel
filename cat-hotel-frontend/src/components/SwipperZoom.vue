<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#000',
    }"
    :zoom="true"
    :navigation="false"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <Room :card="roomCards[0]"></Room>
    </swiper-slide>
    <swiper-slide>
      <Room :card="roomCards[1]"></Room>
    </swiper-slide>
    <swiper-slide>
      <Room :card="roomCards[2]"></Room>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/zoom'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Zoom, Navigation, Pagination } from 'swiper/modules'
import Room from '@/components/Room.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Swiper,
    SwiperSlide,
    Room,
  },
  computed: {
    ...mapState({
      roomCards: (state) => state.roomCards,
    }),
  },
  setup() {
    return {
      modules: [Zoom, Navigation, Pagination],
    }
  },
}
</script>

<style lang="scss" scoped>
.swiper {
  width: 95%;
  height: 60%;
}

.swiper-slide {
  position: relative;
  height: 500px;
  width: 1100px;
  padding-top: 10%;
  border-radius: 70px;
  background: rgb(255, 255, 255);
  overflow: hidden;
}

.swiper-zoom-container {
  position: absolute;
  width: 60%;
  height: 60%;
  top: 0;
  left: 0;
}

.swiper-zoom-container > img {
  max-height: initial;
  width: 100%;
}
</style>
