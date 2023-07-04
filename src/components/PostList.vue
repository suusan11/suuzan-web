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
            <nuxt-link v-if="post.external_link" :to="post.external_link" target="_blank" rel="noopener">
                <p v-if="post.thumbnail" class="thumbnail"><img :src="post.thumbnail.url" :alt="post.title"></p>
                <span class="date">{{ $formatDate(String(post.publishedAt)) }}</span>
                <div v-if="post.category.length !== 0" class="tags l-inner__flex flex-start">
                    <span v-for="cat in post.category" :key="cat.id" class="cat">{{ cat.name }}</span>
                </div>
                <h1 class="title is__external">{{ post.title }}</h1>
            </nuxt-link>
            <nuxt-link v-else :to="`/${post.id}`">
                <p v-if="post.thumbnail" class="thumbnail"><img :src="post.thumbnail.url" :alt="post.title"></p>
                <span class="date">{{ $formatDate(String(post.publishedAt)) }}</span>
                <div v-if="post.category.length !== 0" class="tags l-inner__flex flex-start">
                    <span v-for="cat in post.category" :key="cat.id" class="cat">{{ cat.name }}</span>
                </div>
                <h1 class="title">{{ post.title }}</h1>
            </nuxt-link>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@use "../assets/scss/foundation/font" as f;
@use "../assets/scss/foundation/rem" as r;
@use "../assets/scss/foundation/mixin" as m;
    .l-inner__flex {
        gap: 2rem .5%;
        @include m.mq(sp) {
            gap: 2rem 4%;
        }
    }
    .card {
        width: 33%;
        text-align: left;
        @include m.mq(sp) {
            width: 48%;
        }
        .thumbnail {
            width: 100%;
            margin-bottom: 0.5rem;
            img {
                aspect-ratio: 16/9;
            }
        }
        .date {
            font-family: f.$font-en;
            font-size: clamp(r.f-rem(12), 2vw, r.f-rem(14));
            font-weight: 300;
        }
        .title {
            font-size: clamp(r.f-rem(14), 2vw, r.f-rem(16));
            line-height: 1.6;
            &.is__external::after {
                content: '';
                display: inline-block;
                background: url('../assets/images/common/external-link.svg') no-repeat;
                background-size: contain;
                width: 1.2rem;
                height: 1.2rem;
                margin-left: 0.5rem;
                @include m.mq(sp_min) {
                    width: 1rem;
                    height: 1rem;
                }
            }
        }
        &:hover {
            opacity: 0.8;
        }
    }
    .tags {
        gap: 0;
        font-size: clamp(r.f-rem(8), 2vw, r.f-rem(10));
        font-weight: 500;
        &::before {
            content: '';
            display: inline-block;
            background: url('../assets/images/common/icon-tag.svg') no-repeat;
            background-size: contain;
            width: 0.8rem;
            height: 0.8rem;
            margin-right: 0.2rem;
        }
        .cat {
            color: #3F7BFD;
            &:not(:last-child)::after {
                content: ',';
                display: inline-block;
                margin-right: 0.2rem;
            }
        }
    }
</style>