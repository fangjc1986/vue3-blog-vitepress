<script setup lang="ts">
import { Ball } from "./double-ball.support";
import { computed, defineProps, withDefaults } from "vue";

interface Props {
  ball: Ball;
  colorReverse?: boolean;
  size?: number;
  fontSize?: number;
}

const props = withDefaults(defineProps<Props>(), {
  colorReverse: false,
  size: 40,
  fontSize: 14,
});

/**
 * 样式计算
 * 用于显示球的样式
 */
const styleComp = computed(() => {
  const size = props.size + "px";
  return {
    width: size,
    height: size,
    lineHeight: size,
    "font-size": props.fontSize + "px",
  };
});
</script>

<template>
  <div
    class="ball"
    :class="[{ checked: colorReverse ? !ball.checked : ball.checked }, ball.color]"
    :style="styleComp"
  >
    {{ ball.number }}
  </div>
</template>

<style scoped lang="less">
.ball {
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  &.red {
    background-color: rgb(var(--red-8));
    color: rgb(var(--gray-2));
    &.checked {
      background-color: rgb(var(--red-2));
      color: rgb(var(--gray-8));
    }
  }
  &.blue {
    background-color: rgb(var(--blue-8));
    color: rgb(var(--gray-2));
    &.checked {
      background-color: rgb(var(--blue-2));
      color: rgb(var(--gray-8));
    }
  }
}
</style>
