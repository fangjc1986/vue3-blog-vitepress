<script setup lang="ts">
import { computed, ref } from "vue";

interface Props {
  data: number[];
  actives: number[];
}

const props = withDefaults(defineProps<Props>(), {
  data: () => [],
  actives: () => [],
});
</script>

<template>
  <div class="wh100p pos-r flex-horiz flex-same container pa-xs" style="align-items: flex-end">
    <div
      class="item border-box trans-0d05"
      :class="{ active: actives.includes(i) }"
      v-for="(value, i) in data"
      :style="{ height: value + '%' }"
    ></div>
  </div>
</template>

<style scoped lang="less">
.container {
  background-color: rgb(var(--gray-2));
}
.item {
  background-color: rgb(var(--primary-5));
  &:not(:last-of-type) {
    border-right: 1px solid rgb(var(--primary-4));
  }
  &.active {
    background-color: rgb(var(--primary-8));
  }
}
</style>
