<template>
  <main class="app">
    <div class="app__logo-container">
      <img
        class="app__logo-container__img"
        src="./img/logo.png"
        alt="cat"
        srcset
      />
    </div>
    <svg
      class="app__loading-icon"
      width="60"
      height="65"
      viewBox="0 0 60 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.5504 5.26839L28.5504 24.8193L27.7833 24.8193L28.922 29.3761L27.608 29.7036L26.387 24.8193L24.0894 24.8193L27.1373 29.8995L25.9756 30.5957L22.5101 24.8193L21.1693 24.8193L21.1693 23.465L27.1962 23.465L27.1962 21.9461L25.0002 21.9461L25.0002 20.5919L27.1962 20.5919L27.1962 19.0729L25.0002 19.0729L25.0002 17.7187L27.1962 17.7187L27.1962 16.1998L25.0002 16.1998L25.0002 14.8456L27.1962 14.8456L27.1962 13.3266L25.0002 13.3266L25.0002 11.9724L27.1962 11.9724L27.1962 10.4535L25.0002 10.4535L25.0002 9.09926L27.1962 9.09926L27.1962 6.6226L25.48 6.6226L19.363 24.033L19.2539 24.1421L20.2116 25.0999L19.2539 26.0576L18.2961 25.0999L16.5153 26.8807L24.7497 31.8216L24.0535 32.9833L15.7481 28.0003L14.4619 31.1052L23.8576 33.454L23.5301 34.768L14.2124 32.4389L14.2124 34.9577L15.5676 34.9577L15.5676 36.3119L14.2124 36.3119L14.2124 38.8307L23.5301 36.5015L23.8576 37.8155L14.4619 40.1643L15.7481 43.2692L24.0535 38.2862L24.7497 39.4479L16.5153 44.3888L18.2961 46.1697L19.2539 45.2119L20.2116 46.1697L19.2539 47.1274L21.0347 48.9083L25.9756 40.6738L27.1373 41.3701L22.1543 49.6754L25.2592 50.9616L27.608 41.5659L28.922 41.8935L26.5929 51.2111L29.1117 51.2111L29.1117 49.8559L30.4659 49.8559L30.4659 51.2111L32.9847 51.2111L30.6555 41.8935L31.9695 41.5659L34.3183 50.9616L37.4232 49.6754L32.4402 41.3701L33.6019 40.6738L38.5428 48.9083L40.3237 47.1274L39.366 46.1697L40.3237 45.2119L41.2814 46.1697L43.0623 44.3888L34.8278 39.4479L35.5241 38.2862L43.8294 43.2692L45.1156 40.1643L35.7199 37.8155L36.0475 36.5015L45.3651 38.8307L45.3651 36.3119L44.0099 36.3119L44.0099 34.9577L45.3651 34.9577L45.3651 32.4389L36.0475 34.768L35.7199 33.454L45.1156 31.1052L43.8294 28.0003L35.5241 32.9833L34.8278 31.8216L43.0623 26.8807L41.2814 25.0999L40.3237 26.0576L39.3659 25.0999L40.3237 24.1421L40.2145 24.033L34.0975 6.6226L32.3813 6.6226L32.3813 9.09926L34.5774 9.09926L34.5774 10.4535L32.3813 10.4535L32.3813 11.9724L34.5774 11.9724L34.5774 13.3266L32.3813 13.3266L32.3813 14.8456L34.5774 14.8456L34.5774 16.1998L32.3813 16.1998L32.3813 17.7187L34.5774 17.7187L34.5774 19.0729L32.3813 19.0729L32.3813 20.5919L34.5774 20.5919L34.5774 21.9461L32.3813 21.9461L32.3813 23.465L38.4082 23.465L38.4082 24.8193L37.0674 24.8193L33.6019 30.5957L32.4402 29.8995L35.4881 24.8193L33.1906 24.8193L31.9695 29.7036L30.6555 29.3761L31.7942 24.8192L31.0271 24.8193L31.0271 5.26839L35.0572 5.26839L41.3906 23.2936L44.7287 26.6317L46.7188 31.4366L46.7188 39.8329L44.7287 44.6378L38.7918 50.5747L33.9869 52.5648L25.5906 52.5648L20.7857 50.5747L14.8488 44.6378L12.8587 39.8329L12.8587 31.4366L14.8488 26.6317L18.187 23.2936L24.5204 5.26839L28.5504 5.26839Z"
        fill="white"
      />
      <path
        d="M33.1409 32.2827C34.9893 34.1311 34.9893 37.1383 33.1409 38.9867C31.2925 40.8351 28.2853 40.8351 26.4369 38.9867C24.5885 37.1383 24.5885 34.1311 26.4369 32.2827C28.2853 30.4343 31.2925 30.4343 33.1409 32.2827ZM27.3946 38.029C28.7148 39.3492 30.863 39.3492 32.1832 38.029C33.5034 36.7088 33.5034 34.5606 32.1832 33.2404C30.863 31.9202 28.7148 31.9202 27.3946 33.2404C26.0744 34.5606 26.0744 36.7088 27.3946 38.029Z"
        fill="white"
      />
      <path
        d="M30.4663 19.2089L30.4663 20.3111L29.1119 20.3111L29.1119 19.2089L30.4663 19.2089Z"
        fill="white"
      />
      <rect
        width="13.6257"
        height="2"
        transform="matrix(-1 3.17865e-08 3.17865e-08 1 36.605 55.1332)"
        fill="#6EF6FF"
      />
      <rect
        opacity="0.4"
        width="11.1925"
        height="2"
        transform="matrix(-1 3.17865e-08 3.17865e-08 1 35.6316 59.0262)"
        fill="#6EF6FF"
      />
      <rect
        opacity="0.1"
        width="8.75936"
        height="2"
        transform="matrix(-1 3.17865e-08 3.17865e-08 1 34.1719 62.9193)"
        fill="#6EF6FF"
      />
    </svg>

    <input type="text" v-model="currentSearchValue" />
    <card v-for="(card, i) in apiData" :key="i" />
  </main>
</template>

<script>
import axios from "axios";
import Card from "components/Card";

export default {
  name: "App",
  components: {
    Card
  },
  data() {
    return {
      dataIsLoading: true,
      apiData: [],
      currentSearchValue: ""
    };
  },
  mounted() {
    // load previously saved cards array or load one
    if (localStorage.apiData) {
      this.apiData = localStorage.apiData;
    } else {
      axios.get();
    }
    // load previously saved input field value
    if (localStorage.searchValue) {
      this.currentSearchValue = localStorage.searchValue;
    }

    // window.addEventListener("scroll", debounce);
  },
  methods: {
    debounce(func, wait) {
      let timeout;
      return function() {
        later = () => {
          func.apply(this, arguments);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }
  },
  watch: {
    apiData(newApiData) {
      localStorage.apiData = newApiData;
    },
    currentSearchValue() {
      localStorage.searchValue = this.currentSearchValue;
    }
  }
};
</script>

<style lang="scss" scoped>
.app {
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(12, 5%);
  grid-template-rows: 33.3vh auto;
  column-gap: 2.22%;
  background: $light-black;
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
      height: 33.3vh;
      overflow: hidden;
      width: 100vw;
    }
    &__img {
      align-self: center;
      position: absolute;
      left: 0;
      right: 0;
      height: 16.6vh;
      display: block;
      margin: 0 auto;
      z-index: 2;
    }
  }
  &__loading-icon {
    rect {
      margin: 0 auto;
      display: block;
      &:nth-of-type(1) {
        @keyframes grow {
          0% {
            transform: matrix(-1 3.17865e-8 3.17865e-8 1 36.605 55.1332)
              scaleX(1);
          }
          50% {
            transform: matrix(-1 3.17865e-8 3.17865e-8 1 36.605 55.1332)
              scaleX(1.5);
          }
          100% {
            transform: matrix(-1 3.17865e-8 3.17865e-8 1 36.605 55.1332)
              scaleX(1);
          }
        }
        animation: grow 1s ease infinite;
      }
    }
  }
}
</style>
