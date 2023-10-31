<script setup lang="ts">
import { ref } from "vue";

const dragRef = ref();
const alignMode = ref("contain");

const sizeOptions = [
  { label: "400x200", value: 0, size: { width: "400px", height: "200px" } },
  { label: "200x400", value: 1, size: { width: "200px", height: "400px" } },
  { label: "100x100", value: 2, size: { width: "100px", height: "100px" } },
  { label: "10000x10000", value: 3, size: { width: "10000px", height: "10000px" } },
];
const size = ref(0);

const onChange = () => {
  setTimeout(() => {
    dragRef.value.reset();
  });
};
</script>
<template>
  <n-space class="">
    <n-space vertical>
      <n-space class="flex-horiz flex-center">
        <div class="no">对齐方式：</div>
        <n-select
          style="width: 120px"
          v-model:value="alignMode"
          @change="onChange"
          :options="[
            { label: 'cover', value: 'cover' },
            { label: 'contain', value: 'contain' },
            { label: 'auto', value: 'auto' },
          ]"
        />
        <div class="ml-md">内容尺寸</div>
        <n-select
          :options="sizeOptions"
          v-model:value="size"
          @change="onChange"
          style="width: 200px"
        />
      </n-space>
      <v3-drag-zoom-container
        ref="dragRef"
        :align="alignMode"
        style="width: 600px; height: 400px; background-color: #ccc"
      >
        <div
          class="flex-column flex-same"
          style="background-color: darkred"
          :style="sizeOptions[size].size"
        >
          <div class="flex-grow flex-horiz flex-same" v-for="i in 10">
            <div class="border-box bca-border" v-for="i in 10"></div>
          </div>
        </div>
      </v3-drag-zoom-container>
    </n-space>
  </n-space>
</template>
