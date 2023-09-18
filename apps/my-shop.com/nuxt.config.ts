// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: ["shared-ui"],
  devServer: {
    port: 3001,
  },
  runtimeConfig: {
    public: {
      shopware: {
        shopwareEndpoint: "https://demo-frontends.shopware.store",
        shopwareAccessToken: "SWSCBHFSNTVMAWNZDNFKSHLAYW",
      },
    },
  },
  modules: ["@vueuse/nuxt", "@shopware-pwa/nuxt3-module"],
  typescript: {
    strict: true,
  },
});
