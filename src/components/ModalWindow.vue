<template>
  <div class="modal-window" :style="{ marginTop: marginForModal }">
    <div class="modal-window__close" v-on:click="$emit('close-modal')">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 18L18 6M18 18L6 6" stroke="white" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="modal-window__top">
      <div class="modal-window__top__image" :style="{ backgroundColor: this.randomColor }">
        <div class="modal-window__top__image__letter">{{ firstLetter }}</div>
      </div>
      <h2 class="modal-window__top__name">{{ card.name }}</h2>
    </div>
    <div class="modal-window__bottom">
      <ul class="modal-window__bottom__options">
        <li class="modal-window__bottom__options__birthday">
          <div class="modal-window__bottom__options__birthday__label">
            <img src="images/DOB.png" alt="" srcset="">Birth year
          </div>
          <div class="modal-window__bottom__options__birthday__value"></div>
        </li>
        <li class="modal-window__bottom__options__species">
          <div class="modal-window__bottom__options__species__label"></div>
          <div class="modal-window__bottom__options__species__value"></div>
        </li>
        <li class="modal-window__bottom__options__gender">
          <div class="modal-window__bottom__options__gender__label"></div>
          <div class="modal-window__bottom__options__gender__value"></div>
        </li>
        <li class="modal-window__bottom__options__homeworld">
          <div class="modal-window__bottom__options__homeworld__label"></div>
          <div class="modal-window__bottom__options__homeworld__value"></div>
        </li>
        <li class="modal-window__bottom__options__films">
          <div class="modal-window__bottom__options__films__label"></div>
          <div class="modal-window__bottom__options__films__value"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import iconsLogick from 'mixins/icon'

export default {
  name: 'modal-window',
  mixins: [iconsLogick],
  props: ['card'],
  computed: {
    marginForModal() {
      return `calc(50vh + ${window.scrollY}px - 492px/2)`
    }
  }
}
</script>

<style lang="scss" scoped>

.modal-window {
  margin-top: calc(50vh - 492px/2);
  position: relative;
  grid-column: 3/11;
  grid-row: 1/3;
  // width: 100%;
  max-height: 48vh;
  background-color: $black;
  border-radius: 8px;
  z-index: 3;
  box-shadow: $shadow;
  padding: 0 80px;
  &__close {
    cursor: pointer;
    display: block;
    position: absolute;
    top: 16px;
    right: 16px;
  }
  &__top {
    display: flex;
    align-items: center;
    padding: 80px 0;
    border-bottom: 2px solid $white;
    &__image {
      width: 80px;
      height: 80px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 16px;
      &__letter {
        font-size: $font-letter;
        color: $white;
      }
    }
    &__name {
      color: $white;
      font-size: $font-title;
      font-weight: 700;
    }
  }
  &__bottom {
    &__options {
      &__birthday {
        &__label {
          &:before {
            // content: url('@/img/DOB.png')
          }
        }
      }
      &__species {}
      &__gender {}
      &__homeworld {}
      &__films {}
    }
  }
}
</style>