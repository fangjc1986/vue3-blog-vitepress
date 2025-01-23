<script setup lang="ts">
import SortBarChart from "../comp/sort-bar-chart.vue";
import { ref } from "vue";
import { genRandArray, sortExchangeReact } from "../sort.util";
import { sleep } from "../../../utils/cmm.util";

const data = ref<number[]>(genRandArray(1, 100, 100));
const data2 = ref<number[]>(new Array(100).fill(0));

const refreshData = () => {
  data.value = genRandArray(1, 100, 100);
  data2.value = new Array(100).fill(0);
};

const stepInterval = ref<number>(20);
const actives = ref<number[]>([]);

/**
 * 归并排序开始
 */
const sort = async () => {
  for (let len = 1; len < data.value.length; len *= 2) {
    for (let i = 0; i < data.value.length; i += len * 2) {
      let p1 = i;
      let p2 = i + len;
      for (let pr = i; pr < Math.min(i + len * 2, data.value.length); pr++) {
        await sleep(stepInterval.value);
        actives.value = [p1, p2];
        if (p1 >= i + len) data2.value[pr] = data.value[p2++];
        else if (p2 >= i + len * 2) data2.value[pr] = data.value[p1++];
        else {
          if (data.value[p1] > data.value[p2]) data2.value[pr] = data.value[p2++];
          else data2.value[pr] = data.value[p1++];
        }
      }
    }
    // 为了动画效果，将辅助数组的数据拷贝到原数组中
    data.value = data2.value;
    data2.value = new Array(100).fill(0);
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
      <a-button @click="sort()">开始排序</a-button>
      <a-button @click="refreshData">刷新数据</a-button>
    </a-space>
    <div class="mt-sm" style="height: 300px">
      <sort-bar-chart :data="data" :actives="actives" />
    </div>

    <div class="mt-sm">辅助数组，临时存放归并后的数组</div>
    <div class="mt-sm" style="height: 300px">
      <sort-bar-chart :data="data2" />
    </div>
  </div>
</template>

<style scoped lang="less"></style>
