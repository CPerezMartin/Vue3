<script setup lang="ts">;
import { ref } from 'vue';

const counter = ref(5);
const increase = (): void => {
  ++counter.value;
};
</script>

<template>
  <h1>CounterView: {{ counter }}</h1>
  <button @click="increase">+1</button>
</template>;