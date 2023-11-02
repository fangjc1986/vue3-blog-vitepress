<script setup>
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { onMounted, watch } from "vue";

const { Layout } = DefaultTheme;
const { isDark } = useData();

const refreshArcoTheme = () => {
  document.body.setAttribute("arco-theme", isDark.value ? "dark" : "light");
};

onMounted(refreshArcoTheme);

watch(isDark, () => {
  refreshArcoTheme();
});
</script>

<template>
  <Layout> </Layout>
</template>
