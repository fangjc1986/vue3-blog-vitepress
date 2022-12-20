<template>
  <div class="start-over-mask flex-column flex-center-all"
       style="z-index: 100"
       v-show="status!==2"
  >
    <div class="">
      <slot></slot>
    </div>
    <div class="font-bold fz-lg start-button"
         @click="$emit('on-click-start')"
    >
      <span v-if="status===GameStatus.wait">开始游戏</span>
      <span v-else-if="status===GameStatus.gaming">游戏中</span>
      <span v-else>重新开始</span>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {GameStatus} from "../../utils/enum.util";

export default defineComponent({
  name: "start-over-mask",
  props: {
    status: {default: GameStatus.wait}
  },
  setup(props: any) {
    return {}
  }
})
</script>

<script setup lang="ts">
import {GameStatus} from "../../utils/enum.util";
</script>

<style lang="less" scoped>
.start-over-mask {
  position: absolute;
  background-color: rgba(0, 0, 0, .6);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: #f5f5f5;
}

.start-button {
  border: 3px solid #fff;
  padding: 10px 20px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, .2);
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, .3);;
  }
}
</style>