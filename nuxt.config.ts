// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/global.css"],
  modules: [
    'nuxt-viewport'
  ],  
  viewport: {
    breakpoints: {
      // Ключи - названия брейкпоинтов, значения - медиазапросы
      mobile: 390,
      tablet: 768,
      desktop: 1024,
      // wide: 1280,
    },    
    // Настройка по умолчанию для SSR
    defaultBreakpoints: {
      desktop: 'desktop',
      mobile: 'mobile',
    },    
    // Стратегия: 'mobile-first' или 'desktop-first'
    fallbackBreakpoint: 'mobile',
  },
});
