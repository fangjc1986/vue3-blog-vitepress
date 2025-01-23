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
 * 堆排序开始
 */
const sort = async () => {
  // 构造堆
  await build(0, data.value.length - 1, true);
  for (let end = data.value.length - 1; end > -1; end--) {
    // 重排堆（因为第一个元素和最后一个元素交换位置）
    await build(0, end);
    // 第一个元素和最后一个元素交换位置
    sortExchangeReact(data.value, 0, end);
  }
};

/**
 * 重排堆
 * @param pos 当前位置
 * @param end 结束位置
 * @param isBuild 是否为构造堆模式
 */
const build = async (pos: number, end: number, isBuild = false) => {
  if (pos > end) return;
  const left = pos * 2 + 1;
  const right = left + 1;
  if (isBuild) {
    await build(left, end, true);
    await build(right, end, true);
  }
  actives.value = [pos, left > end ? pos : left, right > end ? pos : right];
  await sleep(stepInterval.value);
  const max = maxPos(actives.value, end);
  if (max != pos) {
    sortExchangeReact(data.value, pos, max);
    await build(max, end);
  }
};

/**
 * 从位置数组中找出最大值对应的位置
 * @param pos 位置列表
 * @param end  结束位置
 */
const maxPos = (pos: number[], end: number) => {
  let res = pos[0];
  pos.forEach(p => {
    if (p > end || p >= data.value.length) return;
    if (data.value[res] < data.value[p]) res = p;
  });
  return res;
};
</script>

<template>
  <div class="">
    <a-space direction="horizontal">
      <a-input-number v-model="stepInterval" :step="50" :min="5" style="width: 200px">
        <template #suffix>ms</template>
        <template #prefix> 步进间隔</template>
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
