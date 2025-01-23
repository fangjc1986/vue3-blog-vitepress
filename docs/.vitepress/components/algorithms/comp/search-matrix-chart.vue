<script setup lang="ts">
interface Props {
  data: number[][];
  barriers?: number[][];
  start?: number[];
  end?: number[];
  actives?: number[][];
}

const props = withDefaults(defineProps<Props>(), {
  data: () => [],
});
</script>

<template>
  <div class="">
    <div class="container border-box disp-ib">
      <div class="row border-box flex-horiz pos-r" v-for="row in data">
        <div
          class="item border-box flex-not-shk"
          v-for="item in row"
          :class="{
            active: item == 4,
            barrier: item == 3,
            start: item == 1 || item == 15,
            end: item == 2,
            visited: item == 5,
          }"
        ></div>
      </div>
    </div>
    <div class="flex-horiz flex-center">
      <div class="item start mr-xs"></div>
      起点
      <div class="item end ml-md mr-xs"></div>
      终点
      <div class="item barrier ml-md mr-xs"></div>
      障碍物
    </div>
  </div>
</template>

<style scoped lang="less">
@borderColor: rgb(var(--gray-4));
.container {
  border: 1px solid @borderColor;
}
.row {
  &:not(:last-of-type) {
    border-bottom: 1px solid @borderColor;
  }
}
.item {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: rgb(var(--gray-1));

  &:not(:last-of-type) {
    border-right: 1px solid @borderColor;
  }
  &.active {
    background-color: rgb(var(--primary-6));
  }
  &.barrier {
    background-color: rgb(var(--gray-7));
  }
  &.start {
    background-color: rgb(var(--warning-6));
  }
  &.end {
    background-color: rgb(var(--success-6));
  }
  &.visited {
    background-color: rgb(var(--success-2));
  }
}
</style>
