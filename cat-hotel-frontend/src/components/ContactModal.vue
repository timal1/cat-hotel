<template>
  <transition name="contact-modal">
    <div class="contact-modal">
      <div class="contact-modal-backdrop" @click="closeModal">
        <div class="contact-modal-container">
          <div class="contact-modal-content" @click.stop>
            <div class="contact-modal-close_box">
              <div></div>
              <button
                type="button"
                @click="closeModal"
                class="contact-modal-close_button"
              >
                <h2>X</h2>
              </button>
            </div>
            <div class="contact-input__title">Забронировать номер</div>
            <form @submit.prevent="submitForm" class="contact-modal-form">
              <div class="contact-input__text-box">
                <input
                  class="contact-input__text"
                  type="text"
                  name="name"
                  placeholder="     Ваше имя"
                  v-model="contactCard.username"
                />
                <input
                  class="contact-input__text"
                  type="text"
                  name="petName"
                  placeholder="     Имя питомца"
                  v-model="contactCard.petname"
                />
                <input
                  class="contact-input__text"
                  type="pnone"
                  name="pnone"
                  placeholder="     Телефон"
                  v-model="contactCard.phone"
                />
                <input
                  class="contact-input__text"
                  type="email"
                  name="email"
                  placeholder="     E-mail"
                  v-model="contactCard.email"
                />
              </div>

              <div class="contact-input__date">
                <label>
                  Дата заезда c
                  <input
                    class="contact-input__date"
                    type="date"
                    v-model="contactCard.dateFrom"
                    name="dateFrom"
                  />
                  по
                  <input
                    class="contact-input__date"
                    type="date"
                    v-model="contactCard.dateTo"
                    name="dateTo"
                  />
                </label>
              </div>
            </form>

            <button
              type="button"
              @click="save"
              class="contact-modal__button"
            >
              <ResponseModal
                v-show="isShowResponseModal"
                :show="isShowResponseModal"
                @closeResponse="closeAllModal"
              ></ResponseModal>
              <div>Забронировать</div>
              <img
                class="contact-modal__button___paw"
                src="@/assets/img/paw2.svg"
                alt="#"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ResponseModal from '@/components/ResponseModal.vue'
import axios from 'axios'

const apiClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'application/json',
  },
})

export default {
  components: {
    ResponseModal,
  },
  data() {
    return {
      contactCard: {
        username: '',
        petname: '',
        phone: '',
        email: '',
        dateFrom: NaN,
        dateTo: NaN,
        roomId: this.roomId
      },

      isShowResponseModal: false,
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
     roomId: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    window.addEventListener('keydown', this.escCloseModal)
  },
  destroy() {
    window.removeEventListener('keydown', this.escCloseModal)
  },
  methods: {
    closeModal() {
      this.resetForm, this.$emit('close')
    },
    escCloseModal(e) {
      if (this.show && e.key === 'Escape') {
        this.closeModal()
      }
    },
    resetForm() {
      this.contactCard = {
        userame: '',
        petname: '',
        phone: '',
        email: '',
        dateFrom: '',
        dateTo: '',
        roomId: ''
      }
    },
    toggleResponseModal() {
       this.isShowResponseModal = !this.isShowResponseModal
    },

    closeAllModal() {
      this.toggleResponseModal(), this.closeModal()
    },

     async save() {
      return apiClient.post('/booking_card', this.contactCard)
        .then((response) => {console.log(response), this.toggleResponseModal(), this.resetForm()})
        .catch((error) => {
          this.errorMessage = error.message
          console.error('There was an error!', error)
        })
    },
  },
}
</script>

<style lang="scss">
.contact-input {
  &__title {
    margin-bottom: 30px;
  }

  &__text {
    border-radius: 50px;
    min-width: 430px;
    min-height: 52px;
    margin-bottom: 20px;
    text-align: center;
  }

  &__date {
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 10px;
    margin-bottom: 20px;
    text-align: center;
  }
}
.contact-modal {
  &-close_button {
    display: flex;
    justify-content: center;
    width: 30px;
    border-radius: 100px;
  }

  &-close_box {
    display: flex;
    justify-content: space-between;
  }

  &-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    transition: opacity 0.3s ease;
    z-index: 9999;
  }
  &-container {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: auto;
    margin: 16px;
  }
  &-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 500px;
    margin: 1.75rem auto;
    padding: 20px 30px;
    border-radius: 5px;
    color: #000;
    background-color: #fff;

    box-sizing: border-box;
  }
  &-header {
    padding-bottom: 16px;
    font-size: 25px;
    text-align: center;
  }
  &-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80px;
    text-align: center;
  }

  &__button {
    margin: 10px 100px 20px 100px;
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
  .simple-modal-enter,
  .simple-modal-leave-to {
    opacity: 0;
  }

  .simple-modal-enter-active,
  .simple-modal-leave-active {
    transition: opacity 0.2s ease;
  }
}
</style>
