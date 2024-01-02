<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const {$router} = useNuxtApp();

/* 브라우저 뒤로가기 */
eventBus.on('@historyBack', () => {
  $router.go(-1);
});

</script>
