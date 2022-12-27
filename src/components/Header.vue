<template>
    <header>
        <div class="l-inner__flex">
            <nuxt-link to="/"><h1 class="title">POCO A POCO</h1></nuxt-link>
            <SearchForm />
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/foundation/font" as f;
@use "../assets/scss/foundation/rem" as r;
    header {
        width: min(95%, 1200px);
        margin: 0 auto;
        padding-top: 1rem;
        margin-bottom: 3rem;
        .title {
            font-family: f.$font-en;
            font-size: r.f-rem(20);
            font-weight: 500;
        }
    }
</style>