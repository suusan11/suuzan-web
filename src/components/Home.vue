<script setup lang="ts">
    import { MicroCMSQueries } from 'microcms-js-sdk';
    import { BLOG_PER_PAGE } from '../settings/siteSettings';
    import { Cat } from '../types/works'

    type Props = {
        page: number,
        catId?: string,
        catObj?: Cat[]
    }

    const { page, catId, catObj } = defineProps<Props>()

    const limit = BLOG_PER_PAGE
    const queries: MicroCMSQueries = {
        limit: limit,
        offset: (page - 1) * limit,
    }

    //catIdを渡されているときはqueriesに加える
    if (catId) {
        queries.filters = `category[contains]${catId}`
    }

    const { data: posts } = await useFetch('/api/postList', { params: queries })
    const { data: cats } = await useFetch('/api/tagList')
    const numPages = posts.value !== null ? Math.ceil(posts.value.totalCount / limit) : null

    const ids = catObj?.map(cat => cat.id)
    const catNameArray = catObj?.map(cat => cat.name)!
    let catName: String
    ids?.forEach((id, index) => {
        if(catId === id) {
            catName = catNameArray[index]
        }
    })
</script>

<template>
    <div class="l-container l-inner__flex">
        <main v-if="posts">
            <p class="cat__name" v-if="queries.filters">
                {{ catName }}
            </p>
            <PostList v-if="posts.contents" :posts="posts.contents" />
            <div v-if="posts.contents.length == 0">
                <h1 class="no-result">お探しの記事は見つかりませんでした。</h1>
            </div>
        </main>
        <aside>
            <Tags v-if="cats" :cats="cats.contents" :selectedCatId="catId" />
        </aside>
        <Pagination v-if="numPages !== 1" :numPages="numPages" :current="page" :selectedCatId="catId"/>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/foundation/rem" as r;
    .cat__name {
        font-size: clamp(r.f-rem(18), 2vw, r.f-rem(20));
        font-weight: 500;
        text-align: left;
        margin-bottom: 1rem;
    }
</style>