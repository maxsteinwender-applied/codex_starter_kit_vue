export default defineNuxtConfig({
  ssr: true,
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module"],
  primevue: {
    options: {
      ripple: true,
    },
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,
    },
  },
  app: {
    head: {
      title: "Codex Starter Kit (Nuxt)",
      meta: [
        {
          name: "description",
          content: "Built with Codex Agent Team System on Nuxt",
        },
      ],
    },
  },
});
