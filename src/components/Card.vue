<template>
  <div v-on:click="showModal" class="card">
    <div class="card__image" :style="{ backgroundColor: this.randomColor }">
      <span class="card__image__letter">{{ firstLetter }}</span>
    </div>
    <h2 class="card__name">{{ card.name }}</h2>
    <transition name="fade" mode="out-in">
      <div v-if="isLoading" class="card__species"></div>
      <p v-else class="card__species">{{ species }}</p>
    </transition>
  </div>
  <modal-card v-if="modalIsOpened"/>
</template>

<script>
import axios from 'axios'
import ModalCard from 'components/ModalCard.vue'

export default {
  name: "Card",
  components: {
    ModalCard
  },
  props: [
    'card'
  ],
  data() {
    return {
      species: null,
      isLoading: true,
      moduleIsOpened: false
    }
  },
  computed: {
    firstLetter() {
      return this.card.name.slice(0,1)
    },
    randomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
  },
  methods: {
    showModal() {
      this.moduleIsOpened = true
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
  }
  &__species {
    color: $grey;
    height: $font-default;
  }

  &:hover {
    box-shadow: $shadow-hover;
  }
  &:nth-of-type(2n) {
    grid-column: 1/7;
  }
  &:nth-of-type(2n+1) {
    grid-column: 7/13;
  }
}
</style>
