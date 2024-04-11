<script setup lang="ts">
import { computed, onMounted, ref, shallowRef } from "vue";
import "vue3-colorpicker-esm/dist/style.css";

interface Props {
  modelValue: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "#000000",
  disabled: false,
});

const emits = defineEmits(["update:modelValue"]);

const onChangeColor = (v: any) => {
  emits("update:modelValue", v);
  showPicker.value = false;
};

const showPicker = ref<boolean>(false);

const size = ref("medium");

const SIZES = {
  large: "25px",
  medium: "20px",
  small: "15px",
  mini: "12px",
};

const showStyle = computed(() => {
  return {
    width: SIZES[size.value] ?? "20px",
    height: SIZES[size.value] ?? "20px",
    backgroundColor: props.modelValue,
    "border-radius": "3px",
    overflow: "hidden",
    border: "1px solid #ccc",
    cursor: props.disabled ? "not-allowed" : "pointer",
  };
});

const colorPicker = shallowRef(null);

onMounted(() => {
  import("vue3-colorpicker-esm").then(module => {
    colorPicker.value = module.ColorPicker;
  });
});
</script>

<template>
  <a-popover
    v-model:popup-visible="showPicker"
    position="right"
    trigger="click"
    :content-style="{
      padding: '2px 5px 5px 5px',
    }"
  >
    <div :style="showStyle"></div>
    <template #content>
      <component
        v-if="colorPicker"
        :is="colorPicker"
        v-bind="$attrs"
        :pure-color="modelValue"
        :disable-alpha="true"
        :is-widget="true"
        @update:pure-color="onChangeColor"
      />
    </template>
  </a-popover>
</template>

<style scoped lang="scss"></style>
