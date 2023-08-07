import type { MicroCMSListContent } from "microcms-js-sdk"; //記事にデフォルトで付与されいているidやdateを取得

export type Cat = {
    // [name: string]: any | number;
    name: string;
} & MicroCMSListContent;

export type Post = {
    title: string;
    category: Cat[];
    body: string;
    thumbnail: {
        url: string;
    },
    external_link: string,
    difficulty: Number,
    mon_hour: string,
} & MicroCMSListContent;