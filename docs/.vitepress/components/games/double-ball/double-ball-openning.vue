<script setup lang="ts">
import { OpenedResult, Status } from "./double-ball.support";

interface Props {
  result: OpenedResult;
  status: Status;
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div class="flex-horiz">
    <div class="table-container"></div>
    <div class="summary"></div>
  </div>
</template>

<style scoped lang="less"></style>
