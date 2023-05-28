<script setup>
  useHead({
    titleTemplate: (title) => {
      return title ? `${title} - IDEA BOOK` : 'IDEA BOOK';
    },
  });
</script>
<template>
  <div class="l-grid">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>
