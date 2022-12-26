<template>
    <footer class="footer">
        <p class="copyright"><small>&copy; SUUUUZAN</small></p>
    </footer>
</template>

<style lang="scss" scoped>
@use "../assets/scss/foundation/rem" as r;
@use "../assets/scss/foundation/font" as f;
    .footer {
        width: 100%;
        padding: 0.5rem;
        .copyright {
            font-family: f.$font-en;
            font-size: r.f-rem(12);
        }
    }
</style>