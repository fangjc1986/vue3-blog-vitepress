<script setup lang="ts">
import { ref } from "vue";

const position = ref({
  x: 0,
  y: 0,
});
</script>

<template>
  <v3-drag-zoom align="contain" style="width: 600px; height: 480px; background-color: #ccc">
    <img src="/v3-drag-zoom/bg1.jpeg" />
  </v3-drag-zoom>
</template>

<style scoped lang="less"></style>
