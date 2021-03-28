<template>
  <div class="main h-full">
    <div class="container mx-auto mt-5 flex-col justify-between">
      <div class="block mb-5 max-h-full">
        <youtube
          class="max-h-full"
          :video-id="'TDhMqkiIp70'"
          :player-vars="playerVars"
          ref="youtube"
        ></youtube>
      </div>
      <vue-glide :autoplay="true" :gap="30" :animationDuration="2000">
        <vue-glide-slide v-for="i in 7" :key="i">
          <img
            class="rounded-md"
            :src="require(`~/assets/images/slide/${i}.jpg`)"
            :alt="`${i}`"
          />
        </vue-glide-slide>
        <!-- <template slot="control">
          <div class="my-5">
            <button
              class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              data-glide-dir="<"
            >
              Prev
            </button>
            <button
              class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              data-glide-dir=">"
            >
              Next
            </button>
          </div>
        </template> -->
      </vue-glide>
    </div>
    <div class="md:hidden mt-24 flex justify-center">
      <button
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        @click="navigateToUploadPage"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          />
        </svg>
        <span>Tải ảnh lên</span>
      </button>
    </div>
  </div>
</template>

<script>
import { Glide, GlideSlide } from "vue-glide-js";
export default {
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },
  data() {
    return {
      playerVars: {
        autoplay: 1
      }
    };
  },
  methods: {
    navigateToUploadPage() {
      this.$router.push({ name: "upload" });
    }
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  /* min-height: 50vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
