<template>
  <div class="grid">
    <h1>Hello Worlds</h1>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(72px, 12);
  column-gap: 32px;
}
</style>