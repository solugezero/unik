// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: {
    global: true,
    dirs: ["~/components"],
  },
  app: {
    head: {
      title: "РЭУ",
      link: [{ rel: "icon", type: "image/x-icon", href: "logo.ico" }],
    },
  },
});
