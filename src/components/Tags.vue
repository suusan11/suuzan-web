<script setup lang="ts">
    import { Cat } from '../types/works';

    type Props = {
        cats: Cat[];
        selectedCatId: string | undefined;
    }

    const { cats, selectedCatId } = defineProps<Props>();

    function getClass(catId: string) {
        if (catId == selectedCatId) return 'active'
        return 'link'
    }
</script>

<template>
    <div class="tag__wrapper">
        <!-- <h2 class="tag__header">タグ</h2> d -->
        <ul class="tag__list">
            <li v-for="cat in cats" :key="cat.id" class="tag">
                <NuxtLink :to="`/category/${cat.id}/page/1`" :class="getClass(cat.id)">
                    {{ cat.name }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/foundation/color" as c;
@use "../assets/scss/foundation/rem" as r;
@use "../assets/scss/foundation/mixin" as m;
    .tag__wrapper {
        width: 100%;
        text-align: left;
    }
    .tag__header {
        @include m.darkenBg(#f3f3f3, 20);
        font-size: r.f-rem(16);
        padding: 0.3rem 1rem;
    }
    .tag__list {
        &::before {
            content: '';
            display: inline-block;
            background: url('../assets/images/common/icon-tag-pink.svg') no-repeat;
            background-size: contain;
            width: 22px;
            height: 22px;
            vertical-align: middle;
        }
        .tag {
            font-size: clamp(r.f-rem(10), 2vw, r.f-rem(12));
            margin: 0 0.3rem 0.5rem;
        }
    }
</style>