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
        <h2 class="tag__header">カテゴリー</h2>
        <ul class="tag__list">
            <li v-for="cat in cats" :key="cat.id" class="item">
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
    .tag__wrapper {
        width: 100%;
        text-align: left;
    }
    .tag__header {
        background-color: #f3f3f3;
        font-size: r.f-rem(16);
        padding: 0.3rem 1rem;
    }
    .tag__list {
        background-color: c.$white;
        border: 1px solid #f3f3f3;
        border-top: none;
        .item {
            position: relative;
            &:not(:last-child) {
                border-bottom: 1px solid #f3f3f3;
            }
            &::after {
                content: '';
                display: inline-block;
                position: absolute;
                top: 50%;
                right: 1rem;
                width: 8px;
                height: 8px;
                border-top: 2px solid #f3f3f3;
                border-right: 2px solid #f3f3f3;
                transform: translateY(-50%) rotate(45deg);
            }
            a {
                display: block;
                color: c.$font-gray;
                font-size: r.f-rem(15);
                padding: 0.5rem 1rem;
                &:hover {
                    opacity: 0.8;
                }
            }
        }
    }
</style>