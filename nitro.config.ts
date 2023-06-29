import { defineNitroConfig } from 'nitropack/config'

// https://nitro.unjs.io/config#devproxy
// https://github.com/http-party/node-http-proxy#options
export default defineNitroConfig({
  devProxy: {
    '/api/': {
      target: 'https://suuzan-web.microcms.io/api/',
      changeOrigin: true,
    //   hostRewrite: true,
    //   cookieDomainRewrite: true,
      headers: {
        'X-Forwarded-Host': 'localhost:3000',
        'X-Forwarded-Proto': 'http'
      },
    }
  }
})