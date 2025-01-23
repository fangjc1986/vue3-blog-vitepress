<script setup lang="ts">
import SortBarChart from "../comp/sort-bar-chart.vue";
import { ref } from "vue";
import { genRandArray, sortExchangeReact } from "../sort.util";
import { sleep } from "../../../utils/cmm.util";

const data = ref<number[]>(genRandArray(1, 100, 100));

const refreshData = () => {
  data.value = genRandArray(1, 100, 100);
};

const stepInterval = ref<number>(20);
const actives = ref<number[]>([]);

/**
 * 快速排序入口
 * [start, end] 分治处理范围
 * @param start 开始位置
 * @param end 结束位置
 */
const sort = async (start: number = 0, end: number = data.value.length - 1) => {
  let left = start;
  let right = end;
  if (start >= end) return;
  let p = left;
  while (left < right) {
    actives.value = [left, right];
    await sleep(stepInterval.value);
    if (data.value[left] > data.value[right]) {
      sortExchangeReact(data.value, left, right);
      p = p == left ? right : left;
    }
    if (p == left) right--;
    else left++;
  }
  await sort(start, p - 1);
  await sort(p + 1, end);
};
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
