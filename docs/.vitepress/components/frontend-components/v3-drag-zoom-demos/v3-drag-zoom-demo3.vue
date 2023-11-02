<script setup lang="ts">
import { ref } from "vue";

const dragRef = ref();

const alignMode = ref("contain");

const size = ref(0);

const onChange = () => {
  setTimeout(() => {
    dragRef.value.reset();
  });
};

const points = ref([
  { label: 1, position: { x: 20, y: 20 }, color: "darkred" },
  { label: 1, position: { x: 50, y: 20 }, color: "darkblue" },
  { label: 1, position: { x: 80, y: 20 }, color: "darkgreen" },
]);

const textPoints = ref([
  { label: 1, position: { x: 20, y: 50 }, text: "哈哈" },
  { label: 1, position: { x: 50, y: 50 }, text: "吼吼" },
  { label: 1, position: { x: 80, y: 50 }, text: "嘿嘿" },
]);

const draggable = ref(true);

const fixedSize = ref(true);
</script>

<template>
  <a-space class="">
    <a-space direction="vertical">
      <a-space class="flex-horiz flex-center">
        <div class="no">对齐方式：</div>
        <a-select
          style="width: 120px"
          v-model="alignMode"
          @change="onChange"
          :options="[
            { label: 'cover', value: 'cover' },
            { label: 'contain', value: 'contain' },
            { label: 'auto', value: 'auto' },
          ]"
        />
        <div class="ml-md">是否允许拖拽：</div>
        <a-switch v-model="draggable"></a-switch>
        <div class="ml-md">是否固定大小：</div>
        <a-switch v-model="fixedSize"></a-switch>
      </a-space>
      <v3-drag-zoom-container
        ref="dragRef"
        :align="alignMode"
        style="width: 600px; height: 400px; background-color: #ccc"
      >
        <img src="/v3-drag-zoom/map.png" alt="" />
        <v3-drag-zoom-item
          v-for="point in points"
          :position="point.position"
          style="width: 40px; height: 40px"
          :style="{ 'background-color': point.color }"
          :draggable="draggable"
          :fixed-size="fixedSize"
        />

        <v3-drag-zoom-item
          v-for="point in textPoints"
          :position="point.position"
          :draggable="draggable"
          :fixed-size="fixedSize"
        >
          <span style="font-size: 20px; color: black">{{ point.text }} </span>
        </v3-drag-zoom-item>
      </v3-drag-zoom-container>
    </a-space>
  </a-space>
</template>
