<template>
  <div class="painting flex-column flex-center-all">
    <div class="flex-column pos-r" :style="{ width: width + 'px' }">
      <div class="mb-xs text-right">
        <n-button type="primary" @click="onClickClear">擦除画布 </n-button>
      </div>
      <canvas
        ref="canvasRef"
        style="border: 3px solid #f3f3f3; background-color: #f8f8f8"
        :width="width"
        :height="height"
        @mousemove="mousemove"
        @mousedown="mousedown"
        @mouseup="mouseup"
        @mouseleave="mouseup"
      ></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";


export default defineComponent({
  name: "painting",
  props: {},
  setup(props: any) {
    const canvasRef = ref<HTMLCanvasElement>();
    const width = 800,
      height = 600;

    let ctx: CanvasRenderingContext2D ;
    onMounted(() => {
      ctx = canvasRef.value!.getContext("2d")!;
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
    });

    let isMouseDown = false;

    const mousemove = e => {
      if (!isMouseDown || !ctx) return;
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
    };
    const mousedown = e => {
      isMouseDown = true;
      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);
    };
    const mouseup = e => {
      isMouseDown = false;
      ctx.closePath();
    };

    return {
      canvasRef,
      width,
      height,
      mousemove,
      mousedown,
      mouseup,
      onClickClear: () => {
        ctx.clearRect(0, 0, width, height);
      },
    };
  },
});
</script>

<style lang="less" scoped>
.painting {
}
</style>
