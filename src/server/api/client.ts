// microCMSの記事取得用サーバークライアントを共通利用するファイル
import { createClient } from 'microcms-js-sdk'; //ES6

const ctx = useRuntimeConfig();

const client = createClient({
    serviceDomain: ctx.serviceDomain,
    apiKey: ctx.apiKey,
});

export default client