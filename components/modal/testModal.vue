<template>
  <div>
    <p>name: {{props.name}}</p>
    <p>age: {{props.age}}</p>
  </div>
  <button @click="onClickEmit">emit test</button>
</template>
<script setup lang="ts">
/**
 * props: 부모로부터 전달받은 props를 사용할 수 있습니다.
 */
const props = withDefaults(
    defineProps<{
      name?: string,
      age?: number,
    }>(),
    {
      name: "wongtae",
    },
);

function onClickEmit() {
  emit('onClickEmitTest', 'test');
}

const emit = defineEmits<{
  onClickEmitTest: [value: string];
}>();

</script>