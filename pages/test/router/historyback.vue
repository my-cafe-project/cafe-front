<template>
  <h1>Router</h1>
  <div>
    <button @click="onClickBack">back</button>
  </div>
</template>
<script setup lang="ts">
import {$historyBack} from "~/plugins/globalComponents.client";

function onClickBack() {
  $historyBack();
}
</script>
<style lang="scss"></style>