<script setup lang="ts">
    import { Post } from '../types/works'

    type Props = {
        posts: Post[];
    }
    const { posts } = defineProps<Props>()
</script>

<template>
    <ul class="l-inner__flex flex-start">
        <li v-for="post in posts" :key="post.id" class="card">
            <nuxt-link :to="`/${post.id}`">
                <p class="thumbnail"><img :src="post.thumbnail.url" :alt="post.title"></p>
                <span class="date">{{ $formatDate(String(post.publishedAt)) }}</span>
                <h1 class="title">{{ post.title }}</h1>
            </nuxt-link>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@use "../assets/scss/foundation/font" as f;
@use "../assets/scss/foundation/rem" as r;
    .l-inner__flex {
        gap: 2rem .5%;
    }
    .card {
        width: 33%;
        text-align: left;
        .thumbnail {
            width: 100%;
            margin-bottom: 0.5rem;
            img {
                aspect-ratio: 16/9;
            }
        }
        .date {
            font-family: f.$font-en;
            font-size: r.f-rem(14);
            font-weight: 300;
        }
        .title {
            font-size: r.f-rem(16);
        }
        &:hover {
            opacity: 0.8;
        }
    }
</style>