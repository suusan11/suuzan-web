<script setup lang="ts">
    const route = useRoute();
    const slug = String(route.params.slug);

    const { data: article } = await useFetch(`/api/postDetail`, {
        params: { slug: slug },
    });
    if (!article.value) {
        throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
    }

    definePageMeta({
        pageTransition: {
            name: 'rotate'
        }
    })

    const calclatedDifficulty = (difficulty:any) => {
        return (5 - difficulty)
    }

</script>

<template>
    <div class="l-container l-inner__flex">
        <main>
            <div class="article" v-if="article">
                <div class="article__header">
                    <p class="thumbnail"><img :src="article.thumbnail.url" alt="article.title"></p>
                    <h1 class="title">{{ article.title }}</h1>
                    <div class="l-inner__flex flex-start align-center">
                        <span class="date">{{ $formatDate(article.publishedAt) }}</span>
                        <ul v-if="article.category.length !== 0" class="tags l-inner__flex flex-start">
                            <li v-for="cat in article.category" :key="cat.id" class="tag">
                                <NuxtLink :to="`/category/${cat.id}/page/1`">
                                    {{ cat.name }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="article__content" v-html="article.body"></div>
                <div v-if="article.difficulty" class="article__difficulty l-inner__flex flex-start">
                    <p class="field__title">難易度：</p>
                    <div class="l-inner__flex flex-start">
                        <p v-for="index in article.difficulty" :key="index"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#F2BE24" stroke="#F2BE24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></p>
                        <p v-for="index in calclatedDifficulty(article.difficulty)" :key="index"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#BFBFBF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></p>
                    </div>
                </div>
                <div v-if="article.mon_hour" class="l-inner__flex flex-start">
                    <p class="field__title">工数：</p>
                    <p>{{ article.mon_hour }}</p>
                </div>
            </div>
        </main>
    </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/foundation/rem" as r;
@use "../../assets/scss/foundation/color" as c;
    .article {
        width: 100%;
        max-width: 780px;
        text-align: left;
        margin: 0 auto;
        &__header {
            margin-bottom: 2rem;
            .thumbnail {
                margin-bottom: 1rem;
                img {
                    aspect-ratio: 16/9;
                }
            }
            .title {
                font-size: clamp(r.f-rem(18), 2vw, r.f-rem(20));
                font-weight: 500;
            }
            .date {
                font-size: clamp(r.f-rem(12), 2vw, r.f-rem(14));
                font-weight: 300;
                margin-right: 0.5rem;
            }
            .tags {
                .tag:not(:last-child) {
                    margin-right: 0.5rem;
                }
            }
        }
    }
</style>