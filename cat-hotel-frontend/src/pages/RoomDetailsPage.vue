<template>
  <div class="room-wrap">
    <div class="wrap">
      <div class="room-wrap__details">
        <RoomDetails :card="roomCards[id]" />
      </div>
      <div class="room-wrap__title">
        <h2>Другие номера</h2>
      </div>
      <SwipperZoom></SwipperZoom>
    </div>
  </div>
</template>

<script>
import Room from '@/components/Room.vue'
import RoomDetails from '@/components/RoomDetails.vue'
import SwipperZoom from '@/components/SwipperZoom.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Room,
    RoomDetails,
    SwipperZoom,
  },
  props: {
    id: {
      type: Number,
      default() {
        return {}
      },
    },
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
    margin-left: 50px;
  }
  &__details {
    display: flex;
    justify-content: center;
  }
}
</style>
