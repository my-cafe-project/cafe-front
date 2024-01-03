<!-- ref와 v-if, watch 에 대한 예시가 있습니다. -->
<template>
  <h1>Ref test</h1>
  <div v-if="isUnderTen">
    <p>count: {{ count }}</p>
  </div>
  <div v-else>
    is over ten!!
  </div>
  <button @click="onClickPlus"> +1 </button>
  <button @click="onClickMinus"> -1 </button>
</template>
<script setup lang="ts">
/**
 * ref를 사용해서 count의 변화를 실시간으로 감지합니다.
 * ref를 사용한 변수는 .value로 사용하면 됩니다.
 */
const count = ref<number>(0)

function onClickPlus() {
  count.value +=1
}

function onClickMinus() {
  count.value -=1
}

const isUnderTen=ref(true)
/**
 * watch는 ()=>, ()=>{}두 부분으로 나눠져 있습니다. 첫번재 부분은 변경을 감지할 변수를 정의하는 부분입니다.
 * 두번째 부분은 콜백함수 입니다.
 */
watch(() => count.value,
    (cnt) => {
      isUnderTen.value = cnt <= 10;
    }
);
</script>