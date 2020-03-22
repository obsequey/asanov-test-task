<template>
  <div class="app">
    <div class="app__logo-container">
      <img src="./img/logo.png" alt="cat" srcset />
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss" scoped>
.app {
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(12, 5%);
  grid-template-rows: 480px auto;
  column-gap: 2.22%;
  &__logo-container {
    grid-column: 1/13;
    position: relative;
    display: flex;
    &:before {
      content: "";
      background: url("img/back.jpg") no-repeat;
      filter: brightness(0.2);
      position: absolute;
      display: block;
      margin: 0 auto;
      right: -50%;
      left: -50%;
      height: 480px;
      overflow: hidden;
      width: 100vw;
    }
    img {
      align-self: center;
      position: absolute;
      left: 0;
      right: 0;
      display: block;
      width: 406px;
      margin: 0 auto;
      z-index: 2;
    }
  }
}
</style>
