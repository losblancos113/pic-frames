export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Minapix - Lưu giữ khoảnh khắc",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "In hình trực tiếp từ điện thoại, keo dán thông minh dán đi dán lại nhiều lần không bong tróc tường."
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "Khung Hình Cá Nhân, Khung Hình Cá Nhân Siêu Nhẹ, In hình từ điện thoại"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/main.css",
    "vue-glide-js/dist/vue-glide.css",
    "vue-file-agent/dist/vue-file-agent.css",
    "vue-js-modal/dist/styles.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~plugins/vue-file-agent", mode: "client" },
    "~plugins/filter.js",
    { src: "~plugins/vue-youtube", mode: "client" },
    { src: "~plugins/vue-modal", mode: "client" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@neneos/nuxt-animate.css"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  publicRuntimeConfig: {
    baseAPIURL:
      process.env.NODE_ENV === "production"
        ? "https://api.minapix.vn"
        : "http://localhost:3001"
  },

  server: {
    host: "0.0.0.0"
  }
};
