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

function onClickRouterTest() {
  $router.push('/test/router')
}
</script>
<style scoped lang="scss">
h1 {
  color: black;
}
</style>