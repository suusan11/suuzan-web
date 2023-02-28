<script setup lang="ts">
    import { MicroCMSQueries } from 'microcms-js-sdk'
    import { BLOG_PER_PAGE } from '../settings/siteSettings';

    useHead({
        title: '検索ページ',
        meta: [
            {
            name: 'description',
            content: '検索ページ',
            },
        ],
    });

    type Props = {
        catId?: string
    }
    const { catId } = defineProps<Props>()

    const route = useRoute()
    const query = String(route.query.q)
    const page = Number(route.query.page || 1)
    const limit = BLOG_PER_PAGE
    const queries: MicroCMSQueries = {
        q: query,
        orders: '-publishedAt',
        limit: limit,
        offset: (page - 1) * limit,
    }

    const { data: posts } = await useFetch('/api/postList', { params: queries })
    const { data: cats } = await useFetch('/api/tagList')

    const totalCount = posts.value !== null ? posts.value.totalCount : null
    const numPages = totalCount !== null ? Math.ceil(totalCount / limit) : null

    // queryが変化した場合にページをリロードする
    watch(() => route.query, () => location.reload())
</script>

<template>
    <div class="l-container l-inner__flex">
        <main>
            <p class="result">「{{ query }}」の検索結果 {{ totalCount }}件</p>
            <div v-if="posts && posts.contents">
                <PostList :posts="posts.contents" />
            </div>
            <div v-if="posts && posts.contents.length == 0">
                <h1 class="no-result">「{{ query }}」の記事は見つかりませんでした。</h1>
            </div>
        </main>
        <aside>
            <Tags v-if="cats" :cats="cats.contents" :selectedCatId="catId" />
        </aside>
        <Pagination v-if="numPages" :numPages="numPages" :current="page" :keyword="query" />
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/foundation/rem" as r;
    .result {
        font-size: r.f-rem(16);
        text-align: left;
        margin-bottom: 1rem;
    }
</style>