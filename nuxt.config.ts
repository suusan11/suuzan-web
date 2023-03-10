const { API_KEY, SERVICE_DOMAIN } = process.env;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src/',
    runtimeConfig: {
        apiKey: API_KEY,
        serviceDomain: SERVICE_DOMAIN
    },
    app: {
        head: {
            title: 'POCO A POCO',
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
    }
})
