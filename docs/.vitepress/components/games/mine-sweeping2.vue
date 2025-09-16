<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { genMatrix, GenRandomFromPool, index2xy } from "../algorithms/sort.util";
import { sleep } from "../../utils/cmm.util";
import { min } from "lodash";

/**
 * 节点
 */
class GridNode {
  constructor(public x: number, public y: number, public number: number) {}
  flag = false;
  opened = false;
  gameOver = false;
  radius = 0;

  isMine() {
    return this.number === 9;
  }

  isEmpty() {
    return this.number === 0;
  }
}

const levels: any[] = [
  [9, 9, 5, "极简"],
  [9, 9, 10, "简单"],
  [16, 16, 40, "中等"],
  [30, 16, 99, "困难"],
];

const level = ref(0);

const nodes = ref<GridNode[][]>([]);
const [w, h, mineQty, openedQty] = [ref(9), ref(9), ref(10), ref(0)];
const stepInterval = ref<number>(20);

const refreshData = () => {
  openedQty.value = 0;
  [w.value, h.value, mineQty.value] = levels[level.value];
  nodes.value = genMatrix(w.value, h.value, (x, y) => new GridNode(x, y, 0));
  let gen = new GenRandomFromPool(GenRandomFromPool.toArray(0, w.value * h.value - 1));
  gen.poll(mineQty.value).forEach(i => {
    const [x, y] = index2xy(i, w.value);
    nodes.value[y][x].number = 9;
  });
  foreachData((node, x, y) => {
    foreachAround(x, y, (around, nx, ny) => {
      if (node.isMine()) return;
      if (around.isMine()) node.number++;
    });
  });
};

onMounted(refreshData);

watch(level, refreshData);

const DX = [0, 1, 0, -1, 1, -1, 1, -1];
const DY = [-1, 0, 1, 0, 1, 1, -1, -1];

const open = async (x: number, y: number) => {
  const node = nodes.value[y][x];
  if (node.flag) return;
  if (!node.opened) {
    if (node.isMine()) {
      node.gameOver = true;
      return await gameOver();
    }
  }
  if (!node.isEmpty()) {
    if (!node.opened) {
      node.opened = true;
      openedQty.value++;
    }
    return await checkAround(x, y);
  }
  await autoOpen([node]);
};

const checkAround = async (x: number, y: number) => {
  let [flag, mine, toOpen] = [0, 0, []];
  foreachAround(x, y, (node, nx, ny) => {
    if (node.opened) return;
    if (node.flag) flag += 1;
    else toOpen.push(node);
    if (node.isMine()) mine += 1;
  });
  if (mine != 0 && flag !== mine) return;
  if (toOpen.some(node => node.isMine())) {
    foreachAround(x, y, (node, nx, ny) => {
      if ((!node.flag && node.isMine()) || (node.flag && !node.isMine())) {
        node.gameOver = true;
      }
    });
    return await gameOver();
  }
  await autoOpen(toOpen);
};

const autoOpen = async (q: GridNode[]) => {
  let nq = [];
  while (q.length || nq.length) {
    if (!q.length) {
      q = nq;
      nq = [];
      await sleep(stepInterval.value);
    }
    if (!q.length) break;
    const nd = q.shift();
    if (nd.opened) continue;
    nd.opened = true;
    openedQty.value++;
    if (!nd.isEmpty()) continue;
    foreachAround(nd.x, nd.y, nextD => {
      nq.push(nextD);
    });
  }
};

const flagHandler = (x: number, y: number) => {
  const node = nodes.value[y][x];
  if (node.opened) return;
  node.flag = !node.flag;
};

const foreachAround = (
  x: number,
  y: number,
  callback: (node: GridNode, x: number, y: number) => void
) => {
  for (let i = 0; i < 8; i++) {
    const [nx, ny] = [x + DX[i], y + DY[i]];
    if (!inArea(nx, ny)) continue;
    callback(nodes.value[ny][nx], nx, ny);
  }
};

const foreachData = (callBack: (node: GridNode, x: number, y: number) => void) => {
  for (let y = 0; y < h.value; y++) {
    for (let x = 0; x < w.value; x++) {
      callBack(nodes.value[y][x], x, y);
    }
  }
};

const inArea = (x: number, y: number) => {
  return x >= 0 && x < w.value && y >= 0 && y < h.value;
};

const gameOver = async () => {
  foreachData((node, x, y) => (node.opened = true));
};
</script>

<template>
  <div class="flex-column flex-center">
    <a-space direction="horizontal">
      <a-select v-model="level">
        <a-option v-for="(item, i) in levels" :label="item[3]" :value="i"></a-option>
      </a-select>
      <a-button @click="refreshData">刷新雷数量</a-button>
      <a-input
        disabled
        read-only
        :model-value="`${openedQty} / ${w * h - mineQty}`"
        style="width: 180px"
      >
        <template #prefix>扫雷进度</template>
      </a-input>
    </a-space>
    <div class="mt-sm container flex-column pa-xs">
      <div class="row flex-horiz" v-for="(row, y) in nodes">
        <div
          class="item flex-horiz flex-not-shk flex-center-all"
          v-for="(item, x) in row"
          :class="[
            {
              opened: item.opened,
              gameOver: item.gameOver,
              mine: item.isMine(),
              empty: item.isEmpty(),
              radius: item.radius,
            },
          ]"
          @click="open(x, y)"
          @contextmenu.prevent="flagHandler(x, y)"
        >
          <span> </span>
          <span v-if="item.flag" class="iconfont icon-flag--fill"> </span>
          <template v-else-if="item.opened">
            <span
              v-if="item.isEmpty()"
              class="iconfont icon-checkbox-blank-line"
              style="color: rgb(var(--gray-4))"
            ></span>
            <span v-else-if="item.isMine()" class="iconfont icon-bug--fill"></span>
            <span v-else-if="item.number === 1" style="color: rgb(var(--danger-6))">1</span>
            <span v-else-if="item.number === 2" style="color: rgb(var(--primary-6))">2</span>
            <span v-else-if="item.number === 3" style="color: rgb(var(--warning-6))">3</span>
            <span v-else-if="item.number === 4" style="color: rgb(var(--green-6))">4</span>
            <span v-else-if="item.number === 5" style="color: rgb(var(--purple-6))">5</span>
            <span v-else-if="item.number === 6" style="color: rgb(var(--gold-6))">6</span>
            <span v-else-if="item.number === 7" style="color: rgb(var(--cyan-6))">7</span>
            <span v-else-if="item.number === 8" style="color: rgb(var(--pinkpurple-6))">8</span>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  border: 1px solid rgb(var(--gray-6));
}
.item {
  @bw: 1px;
  width: 28px;
  height: 28px;
  border: @bw solid rgb(var(--gray-4));
  font-weight: bold;

  &:active {
    background-color: rgb(var(--gray-3)); // 按下时的颜色变化
    border: @bw solid rgb(var(--gray-3));
  }
  &.opened {
    border: 1px solid rgb(var(--gray-3));
  }

  &.gameOver {
    background-color: rgb(var(--danger-6));
  }
}
</style>
