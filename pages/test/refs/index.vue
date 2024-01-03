<!-- refs, props, emit test -->

<template>
  <TestModal
  :name="name"
  :age="age"
  @onClickEmitTest="emitResponse"/>
</template>
<script setup lang="ts">
import TestModal from "~/components/modal/testModal.vue";
import { refs } from '~/utils/refs';

const testModal = refs(TestModal);
const name = ref<string>('sudong');
const age = ref<number>(28);

function emitResponse() {
  console.log("자식이 부모로 이벤트를 전달했다!!!!")
}

</script>