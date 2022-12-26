<script setup lang="ts">
    const route = useRoute();
    const slug = String(route.params.slug);

    const { data: article } = await useFetch(`/api/postDetail`, {
        params: { slug: slug },
    });

    if (!article.value) {
        throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
    }

    type Props = {
        catId?: string
    }
    const { catId } = defineProps<Props>()
    const { data: cats } = await useFetch('/api/tagList')
</script>

<template>
    <div class="l-container l-inner__flex">
        <main>
            <div class="article" v-if="article">
                <div class="article__header">
                    <p class="thumbnail"><img :src="article.thumbnail.url" alt="article.title"></p>
                    <h1 class="title">{{ article.title }}</h1>
                    <div class="l-inner__flex flex-start">
                        <span class="date">{{ $formatDate(article.publishedAt) }}</span>
                        <span v-for="cat in article.category" :key="cat.id" class="cat">{{ cat.name }}</span>
                    </div>
                </div>
                <div class="article__content" v-html="article.body"></div>
            </div>
        </main>
        <aside>
            <Tags v-if="cats" :cats="cats.contents" :selectedCatId="catId" />
        </aside>
    </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/foundation/rem" as r;
@use "../../assets/scss/foundation/color" as c;
    .article {
        width: 100%;
        text-align: left;
        &__header {
            margin-bottom: 2rem;
            .thumbnail {
                margin-bottom: 1rem;
                img {
                    aspect-ratio: 16/9;
                }
            }
            .title {
                font-size: r.f-rem(20);
                font-weight: 500;
            }
            .date {
                font-size: r.f-rem(14);
                font-weight: 300;
                margin-right: 0.5rem;
            }
            .cat {
                background-color: #f3f3f3;
                border-radius: 20px;
                font-size: r.f-rem(12);
                padding: 0.15rem 1rem;
            }
        }
        &__content {
            &:deep(h2) {
                font-size: r.f-rem(18);
                font-weight: 500;
                border-bottom: 2px solid c.$border;
                margin-bottom: 0.5rem;
            }
            &:deep(p) {
                font-size: r.f-rem(16);
                font-weight: 300;
                text-align: justify;
                margin-bottom: 0.5rem;
            }
        }
    }
</style>