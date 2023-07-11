<script setup lang="ts">
    const route = useRoute()
    const page = Number(route.params.id || 1)
    const catId = String(route.params.catId || '')

    const { data:cats } = await useFetch('/api/tagList')
</script>
<template>
    <Home :page="page" :catId="catId" :catObj="cats?.contents"/>
</template>