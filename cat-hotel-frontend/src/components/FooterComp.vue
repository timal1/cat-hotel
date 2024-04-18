<template>
  <footer v-if="$route.name !== 404">
    <div class="footer__box">
      <div class="footer__left">
        <div class="footer__contact">
          <h2 class="footer__title">Как нас найти</h2>
          <h4 class="footer__headding">Адрес</h4>
          <TextComp>Воронеж</TextComp>
          <TextComp class="footer__contacts">ул. Кирова д. 4</TextComp>
          <TextComp class="footer__headding">Режим работы</TextComp>
          <TextComp class="footer__contacts"
            >Ежедневно, с 9:00 до 20:00</TextComp
          >
          <h4 class="footer__headding">Телефон</h4>
          <TextComp class="footer__contacts">8 (800) 999-99-99</TextComp>
          <h4 class="footer__headding">E-mail</h4>
          <TextComp class="footer__contacts">contact@interno.com</TextComp>

          <h4 class="footer__headding">Социальные сети</h4>
          <TextComp>Вконтакте</TextComp>
        </div>
      </div>
      <div class="footer__map" style="position: relative; overflow: hidden">
        <a
          href="https://yandex.ru/maps/193/voronezh/?utm_medium=mapframe&utm_source=maps"
          style="color: #eee; font-size: 12px; position: absolute; top: 0px"
          >Воронеж</a
        ><a
          href="https://yandex.ru/maps/193/voronezh/house/ploshchad_lenina_1/Z0AYdw5pSEcPQFtrfXp3cX5rZw==/?indoorLevel=1&ll=39.196124%2C51.660829&utm_medium=mapframe&utm_source=maps&z=16.8"
          style="color: #eee; font-size: 12px; position: absolute; top: 14px"
          >Площадь Ленина, 1 — Яндекс Карты</a
        ><iframe
          src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=39.196124%2C51.660829&mode=whatshere&utm_medium=mapframe&utm_source=maps&whatshere%5Bpoint%5D=39.199094%2C51.659852&whatshere%5Bzoom%5D=17&z=16.8"
          width="100%"
          height="700"
          display="flex"
          justify-content="end"
          frameborder="1"
          allowfullscreen="true"
          style="position: relative"
        ></iframe>
      </div>
    </div>
  </footer>
</template>

<script>
import HeaderNav from './HeaderNav.vue'
import TextComp from './TextComp.vue'
import src from '@/assets/logo.svg'

export default {
  components: { TextComp, HeaderNav },
  data() {
    return {
      link: '#',
      img: {
        src: src,
        alt: 'Inferno logo',
        class: 'footer__logo',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.footer {
  &__contact {
    position: absolute;
    padding-left: 300px;
    padding-top: 50px;
  }
  &__box {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  &__left {
    background-color: #fac663;
    height: 700px;
    width: 40%;
  }

  &__map {
    width: 60%;
  }

  &__nav {
    flex-direction: column;
    gap: 26px;
  }
  &__logo {
    padding-bottom: 18px;
  }
  &__item,
  &__headding,
  &__contacts {
    padding-bottom: 20px;
  }
  &__title {
    font-family: Rubik;
    font-size: 36px;
    font-weight: 700;
    line-height: 42.66px;
    text-align: left;
    margin-bottom: 10px;
  }
  &__headding {
    color: rgb(41, 47, 54);
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
  }
  &__icon {
    padding-top: 31px;
    padding-bottom: 20px;
  }
  &__icon:first-child {
    padding-right: 54px;
  }
}
</style>
