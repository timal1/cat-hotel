<template>
  <div class="">
    <div class="wrap flex">
      <div class="text-box">
        <h1 class="title">404</h1>
        <p class="text">
          We are sorry, but the page you requested was not found
        </p>
      </div>
      <figure class="img-box">
        <img src="@/assets/404.jpeg" alt="#" class="img" />
      </figure>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: space-between;
}
.text-box {
  align-self: center;
}
.title {
  color: rgb(205, 162, 116);
  font-size: 250px;
  font-weight: 400;
  line-height: 125%;
}
.text {
  width: 560px;
  color: rgb(41, 47, 54);
  font-size: 35px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 1%;
  text-align: left;
}
.img-box {
  width: 913px;
  height: 1042px;
  //   overflow: hidden;
}
.img {
  background: rgb(235, 235, 235);
  border-radius: 0px 0px 0px 353px;
}
</style>
