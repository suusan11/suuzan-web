<script setup lang="ts">
    type Props = {
        keyword?: string | undefined
    }

    const { keyword } = defineProps<Props>()

    const query = ref(keyword)

    function canSubmit() {
        // 空白もしくはスペースのみの場合false
        return !!query.value && !/^\s+$/.test(query.value)
    }

    function submit() {
        if (canSubmit()) {
            return navigateTo({
                path: '/search',
                query: {
                    q: query.value
                }
            })
        }
    }
</script>

<template>
    <form class="search-form" @submit.prevent="submit">
        <div class="input__container">
            <input type="text" v-model="query" ref="searchForm" placeholder="Search">
        </div>
    </form>
</template>

<style lang="scss" scoped>
@use "../assets/scss/foundation/color" as c;
@use "../assets/scss/foundation/rem" as r;
    .input__container  {
        position: relative;
        width: 300px;
        input[type=text] {
            width: 100%;
            height: 40px;
            border-width: 1px;
            border-color: c.$border;
            border-style: solid;
            border-radius: 5px;
            background-color: c.$white;
            font-size: r.f-rem(15);
            letter-spacing: 0.1rem;
            padding: 0.2rem 0.8rem 0.2rem 2.5rem;
            -moz-appearance: none;
            -webkit-appearance: none;
            appearance: none;
        }
        ::placeholder {
            color: #cccccc;
        }
        &::before {
            content: '';
            display: inline-block;
            position: absolute;
            top: 50%;
            left: 0.8rem;
            transform: translateY(-50%);
            width: 15px;
            height: 15px;
            background: url(../assets/images/common/icon-search.svg) no-repeat;
            background-size: cover;
        }
    }
</style>