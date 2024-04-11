<script setup lang="ts">
import V3aColorPicker from "../../common/v3a-color-picker.vue";
import { ref } from "vue";
import { CoordinateDrawLine, Line, LineStyle, Point } from "coordinate-draw-line";

const lineColor = ref("#000");
const lineIncrease = ref(true);
const lineWidth = ref(1);
const coordRef = ref();

const addLine = () => {
  const line = new Line(new Point(0, 0), new Point(400, 200))
    .setDull(lineIncrease.value ? "increase" : undefined)
    .setFixed(1)
    .setStyle(new LineStyle().setLineWidth(lineWidth.value).setStrokeStyle(lineColor.value));
  coordRef.value.addLine(line);
};

const onClickClear = () => {
  console.log(coordRef.value);
  coordRef.value.clearLines();
};
</script>

<template>
  <div class="flex-column">
    <div class="mb-sm flex-horiz flex-center">
      <a-space>
        <a-button @click="addLine">添加线条</a-button>
        <div class="">线宽</div>
        <a-input-number v-model="lineWidth" style="width: 80px"></a-input-number>
        <div>线条颜色：</div>
        <v3a-color-picker v-model="lineColor"></v3a-color-picker>
        <div>是否递增</div>
        <a-switch v-model="lineIncrease"></a-switch>
      </a-space>
      <div class="flex-grow"></div>
      <div class="">
        <a-button @click="onClickClear">清空</a-button>
      </div>
    </div>
    <div class="" style="height: 400px; background-color: #fff">
      <coordinate-draw-line ref="coordRef" :x-end="400" :y-end="200" />
    </div>
  </div>
</template>

<style scoped lang="less"></style>
