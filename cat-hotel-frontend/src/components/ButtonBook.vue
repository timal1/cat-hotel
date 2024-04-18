<template>
  <button :class="classButton" @click="toggleModal">
    <ContactModal
      v-show="isShowModal"
      :show="isShowModal"
      @close="toggleModal"
      :roomId="roomId"
    ></ContactModal>
    <div>Забронировать</div>
    <img :class="classPaw" src="@/assets/img/paw.png" alt="#" />
  </button>
</template>

<script>
import ContactModal from '@/components/ContactModal.vue'

export default {
  components: {
    ContactModal,
  },
  props: {
    classButton: {
      type: Text,
      default: 'main_picture__button',
    },
    classPaw: {
      type: Text,
      default: 'main_picture__button___paw',
    },
    roomId: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      isShowModal: false,
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
.main_picture {
  &__button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5px 10px 30px;
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-weight: 600;
    line-height: 19.2px;
    border-radius: 100px;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    background: rgb(255, 255, 255);
    border: none;
    transition: all 0.3s;

    &___paw {
      padding-left: 15px;
    }
  }
}

.room_text {
  &__button {
    margin-left: 100px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5px 10px 30px;
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 600;
    line-height: 19.2px;
    border-radius: 100px;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    background: #ff7236;
    border: none;
    transition: all 0.3s;

    &___paw {
      padding-left: 15px;
    }
  }
}
</style>
