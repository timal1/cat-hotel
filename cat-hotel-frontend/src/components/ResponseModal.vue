<template>
  <transition name="contact-modal">
    <div class="contact-modal">
      <div class="contact-modal-backdrop" @click="closeResponseModal">
        <div class="contact-modal-container">
          <div class="contact-modal-content" @click.stop>
            <div class="contact-modal-close_box">
              <div></div>
              <button
                type="button"
                @click="closeResponseModal"
                class="contact-modal-close_button"
              >
                <h2>X</h2>
              </button>
            </div>

            <div class="contact-input__title"><h2>Спасибо за заявку!</h2></div>
            <div class="contact-input__text">
              Мы свяжемся с вами в ближайшее время
            </div>

            <button
              type="button"
              @click="closeResponseModal"
              class="contact-modal__button"
            >
              <div>Ok</div>
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
export default {
  props: {
    showResponse: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    window.addEventListener('keydown', this.escCloseResponseModal)
  },
  destroy() {
    window.removeEventListener('keydown', this.escCloseResponseModal)
  },
  methods: {
    closeResponseModal() {
      this.resetForm, this.$emit('closeResponse')
    },
    escCloseResponseModal(e) {
      if (this.showResponse && e.key === 'Escape') {
        this.closeResponseModal()
      }
    },
  },
}
</script>

<style lang="scss">
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
