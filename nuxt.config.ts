const { API_KEY, SERVICE_DOMAIN } = process.env;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src/',
    ssr: true,
    runtimeConfig: {
        serviceDomain: SERVICE_DOMAIN,
        apiKey: API_KEY,
    },
    nitro: {
        prerender: {
            crawlLinks: true
        }
    },
    app: {
        head: {
            title: 'IDEA BOOK',
            meta: [{ name: 'description', content: 'suuzanのまなびコレクション' }],
            // link: [{ rel: 'icon', href: '/icon.png' }],
        },
    },
    css: ["@/assets/scss/style.scss"],
    modules: [
        '@nuxtjs/google-fonts',
    ],
    googleFonts: {
        families: {
            'Noto+Sans+JP': [300,400,500],
            'Hanken+Grotesk': [300,400,500],
        },
        display: 'swap'
    },
})
