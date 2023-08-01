const { API_KEY, SERVICE_DOMAIN } = process.env;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src/',
    runtimeConfig: {
        serviceDomain: SERVICE_DOMAIN,
        apiKey: API_KEY,
    },
    app: {
        head: {
            title: 'IDEA BOOK',
            meta: [{ name: 'description', content: 'suuzanのまなびコレクション' }],
            // link: [{ rel: 'icon', href: '/icon.png' }],
        },
        pageTransition: { name: 'page', mode: 'out-in' }, //ページだけ遷移アニメーション（現在の要素がトランジション完了してからインする）
        // pageTransition: { name: 'page', mode: 'in-out' }, //ページだけ遷移アニメーション（新しい要素がトランジション完了してからアウトする）
        // layoutTransition: { name: 'layout', mode: 'out-in' } //レイアウトごと遷移アニメーション
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
