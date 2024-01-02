<template>
  <div>
    <h1>router test</h1>
    <button @click="onClickRouterTest">test button</button>
  </div>
  <div>
    <h1>variable test</h1>
  </div>
</template>
<script setup lang="ts">
const { $router } = useNuxtApp();

/**
 * $router.push를 원래 사용했으나, nuxt에서는 navigateTo를 지원해서 이걸 사용해도 됩니다.
 */
function onClickRouterTest() {
  // $router.push('/test/router/historyback');
  navigateTo('/test/router/historyback');
}
</script>
<style scoped lang="scss">
h1 {
  color: black;
}
</style>