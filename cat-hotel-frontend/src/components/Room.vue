<template>
  <section class="room-wrap">
    <div class="room-wrap__box">
      <img class="room-wrap__bkg" :src="card.imgsrc" :alt="imgalt" />
      <div class="room_text">
        <h1 class="room_text__title" v-html="card.title"></h1>
        <ul>
          <li>
            <span>{{ card.square }}</span>
          </li>
          <li>
            <span>{{ card.sizes }}</span>
          </li>
          <li>
            <span>{{ card.price }}</span>
          </li>
        </ul>
        <router-link to="/catalog">
          <button class="main_picture__button">
            <div>Посмотреть</div>
            <img
              class="main_picture__button___paw"
              src="@/assets/img/paw.png"
              alt="#"
            />
          </button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    card: Object,
  },
}
</script>

<style lang="scss" scoped>
.room-wrap {
  min-height: 300px;

  &__box {
    position: relative;
  }

  &__bkg {
    width: 55%;
    position: absolute;
    top: 0;
    left: 50px;
    background: rgb(244, 240, 236);
  }
}

.room_text {
  position: absolute;
  margin-left: 600px;
  margin-top: 70px;
  min-width: 500px;
  min-height: 284px;
  background-color: #ffffff;
  border: 0.1px solid black;

  &__title {
    font-family: Rubik;
    font-size: 22px;
    font-weight: 500;
    line-height: 26.07px;
    text-align: left;
    padding-bottom: 20px;
    padding-top: 30px;
    padding-left: 100px;
  }
}
.main_picture {
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
}

ul {
  padding-bottom: 25px;
  padding-left: 120px;
}

li {
  color: #ff7236;
}

span {
  color: #000;
}
</style>
