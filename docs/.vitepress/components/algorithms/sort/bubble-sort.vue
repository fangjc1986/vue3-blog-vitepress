<script setup lang="ts">
import SortBarChart from "../comp/sort-bar-chart.vue";
import { onBeforeUnmount, ref } from "vue";
import { genRandArray, sortExchangeReact } from "../sort.util";
import { sleep } from "../../../utils/cmm.util";

const data = ref<number[]>(genRandArray(1, 100, 100));

const refreshData = () => {
  data.value = genRandArray(1, 100, 100);
};

const actives = ref<number[]>([]);
const stepInterval = ref<number>(20);
const sorting = ref<boolean>(false);

/**
 * 冒泡排序开始
 */
const sort = async () => {
  for (let i = data.value.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      actives.value = [j, j + 1];
      if (data.value[j] > data.value[j + 1]) {
        await sleep(stepInterval.value);
        sortExchangeReact(data.value, j, j + 1);
      }
    }
  }
};

onBeforeUnmount(() => {
  sorting.value = false;
});
</script>

<template>
  <div class="">
    <a-space direction="horizontal">
      <a-input-number v-model="stepInterval" :step="50" :min="5" style="width: 200px">
        <template #suffix>ms</template>
        <template #prefix> 步进间隔 </template>
      </a-input-number>
      <a-button @click="sort()">开始排序</a-button>
      <a-button @click="refreshData">刷新数据</a-button>
    </a-space>
    <div class="mt-sm" style="height: 300px">
      <sort-bar-chart :data="data" :actives="actives" />
    </div>
  </div>
</template>

<style scoped lang="less"></style>
