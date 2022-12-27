<script setup>
  useHead({
    titleTemplate: (title) => {
      return title ? `${title} - POCO A POCO` : 'POCO A POCO';
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
