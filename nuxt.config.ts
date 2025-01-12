// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    compileTemplate: true,
    templateUtils: true,
    relativeWatchPaths: true,
    resetAsyncDataToUndefined: true,
    defaults: { useAsyncData: { deep: true } },
  },
  unhead: { renderSSRHeadOptions: { omitLineBreaks: false } },
  devtools: { enabled: true },
});
