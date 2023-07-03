<script setup lang="ts">
    type Props = {
        numPages?: number | null;
        current: number;
        selectedCatId?: string | undefined;
        keyword?: string;
    }

    const { numPages, current, selectedCatId, keyword } = defineProps<Props>();

    // ページリンクを返す
    function getPath(p: number) {
        if (selectedCatId) return `${p}`
        // 下の書き方だとpathが重複するためページ数だけoutputする
        // if (selectedCatId) return `category/${selectedCatId}/page/${p}`
        if (keyword) return `/search?q=${keyword}&page=${p}`
        return `/page/${p}`
    }

    // クラスを返す
    // 現在のページの場合スタイルをかえるため
    function getClass(page: number, current: number) {
        if (page == current) return 'current'
        return 'link'
    }
</script>

<template>
    <ul class="pagination l-inner__flex">
        <li v-for="page in numPages" :key="page" :class="getClass(page, current)">
            <nuxt-link :to="getPath(page)">{{ page }}</nuxt-link>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@use "../assets/scss/foundation/color" as c;
@use "../assets/scss/foundation/mixin" as m;
    .pagination {
        width: 100%;
        justify-content: center;
        li {
            width: 35px;
            height: 35px;
            border-radius: 3px;
            line-height: 35px;
            margin: 0 0.5rem;
            a {
                display: block;
            }
            &.link {
                @include m.darkenBg(#F3F3F3, 10);
            }
            &.current {
                @include m.darkenBg(#F3F3F3, 40);
                pointer-events: none;
                a {
                    color: c.$white;
                }
            }
        }
    }
</style>