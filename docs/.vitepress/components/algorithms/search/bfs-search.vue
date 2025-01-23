<script setup lang="ts">
import SortBarChart from "../comp/sort-bar-chart.vue";
import { onMounted, ref } from "vue";
import { genMatrix, genRandArray, GenRandomFromPool, index2xy } from "../sort.util";
import SearchMatrixChart from "../comp/search-matrix-chart.vue";
import { sleep } from "../../../utils/cmm.util";

const w = 34;
const h = 20;

// 00 可通行，1 起点 15 已访问的起点 2 终点 3 障碍物 4 最终路径 5 已经访问过的
const data = ref<number[][]>();
const barrierCount = ref<number>(100);
let start = ref();

const refreshData = () => {
  data.value = genMatrix(w, h, () => 0);
  const gen = new GenRandomFromPool(GenRandomFromPool.toArray(0, w * h - 1));
  start.value = index2xy(gen.poll(1)[0], w);
  data.value[start.value[1]][start.value[0]] = 1;
  const barrier = gen.poll(barrierCount.value).map(i => index2xy(i, w));
  barrier.forEach(([x, y]) => (data.value[y][x] = 3));
  const end = index2xy(gen.poll(1)[0], w);
  data.value[end[1]][end[0]] = 2;
};

const setValue = (p: number[], v: number) => {
  const [x, y] = p;
  data.value[y].splice(x, 1, v);
};

onMounted(refreshData);

const stepInterval = ref<number>(20);

const DX = [0, 1, 0, -1];
const DY = [-1, 0, 1, 0];

/**
 * 开始搜索
 */
const search = async () => {
  const queue = [[...start.value, []]];
  while (queue.length) {
    const p = queue.shift();
    const [x, y, path] = p;
    if ([3, 5, 15].includes(data.value[y][x])) {
      continue;
    }
    const v = data.value[y][x];

    setValue(p, 4);
    await sleep(stepInterval.value);
    setValue(p, v);

    if (data.value[y][x] === 2) {
      for (const [x, y] of path) {
        if (data.value[y][x] != 15) {
          setValue([x, y], 4);
        }
      }
      return;
    }
    setValue(p, data.value[y][x] === 1 ? 15 : 5);
    const nextP = [...path, [x, y]];
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + DX[i], y + DY[i]];
      if (nx >= 0 && nx < w && ny >= 0 && ny < h) queue.push([nx, ny, nextP]);
    }
  }
};
</script>

<template>
  <div class="">
    <a-space direction="horizontal">
      <a-input-number v-model="stepInterval" :step="50" :min="5" style="width: 200px">
        <template #suffix>ms</template>
        <template #prefix> 步进间隔</template>
      </a-input-number>
      <a-input-number v-model="barrierCount" :step="50" :min="5" style="width: 160px">
        <template #prefix> 障碍物数量</template>
      </a-input-number>
      <a-button @click="search()" type="primary">开始搜索</a-button>
      <a-button @click="refreshData">刷新数据</a-button>
    </a-space>
    <div class="mt-sm">
      <search-matrix-chart :data="data" :start="start" />
    </div>
  </div>
</template>

<style scoped lang="less"></style>
