const { API_KEY, SERVICE_DOMAIN } = process.env;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src/',
    // ssr: true,
    runtimeConfig: {
        serviceDomain: SERVICE_DOMAIN,
        apiKey: API_KEY,
    },
    // full static generate
    // nitro: {
    //     prerender: {
    //         crawlLinks: true
    //     }
    // },
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
    // hooks: {
    //     'nitro:config': (config: NitroConfig) => {
    //       // nitro の option 側に設定する場合、 scanDirs が nuxt 固有の設定を含んでしまうため、 mock モードではそれをここで上書きする
    //       // isDebugMode は TEST=true で true を返却するメソッドがどこかで定義されてる
    //       if (isDebugMode()) {
    //         const testServer = resolve(__dirname, './test/server')
    
    //         config.srcDir = testServer
    //         config.scanDirs = [testServer]
    //       }
    //     }
    //   },
})
