<template>
  <div v-on:click="$emit('cardIsClicked', card)" class="card">
    <div class="card__image" :style="{ backgroundColor: this.randomColor }">
      <span class="card__image__letter">{{ firstLetter }}</span>
    </div>
    <h2 class="card__name">{{ card.name }}</h2>
    <transition name="fade" mode="out-in">
      <div v-if="isLoading" class="card__species"></div>
      <p v-else class="card__species">{{ species }}</p>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'
import iconMethods from 'mixins/icon'

export default {
  mixins: [iconMethods],
  name: "card",
  props: [
    'card'
  ],
  data() {
    return {
      species: null,
      isLoading: true
    }
  },
  mounted() {
    axios.get(this.card.species[0])
      .then((res, err) => {
        this.species = res.data.name
        this.isLoading = false
      })
  }
};
</script>

<style lang="scss" scoped>
// Animations
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.card {
  box-shadow: $shadow;
  display: flex;
  height: 320px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 32px;
  border-radius: 8px;
  background-color: $black;
  cursor: pointer;
  &__image {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    &__letter {
      font-size: $font-letter;
      color: $white;
    }
  }
  &__name {
    color: $white;
    font-size: $font-larger;
    margin-bottom: 9px;
    font-weight: 700;
  }
  &__species {
    color: $grey;
    height: $font-default;
  }

  &:hover {
    box-shadow: $shadow-hover;
  }
  &:nth-of-type(2n) {
    grid-column: 1;
  }
  &:nth-of-type(2n+1) {
    grid-column: 2;
  }
}
</style>
