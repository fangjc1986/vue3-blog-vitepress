<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import MermaidIt from "mermaid-it-markdown";
import { mermaidDefaultContent } from "./mermaid-it-markdown.support";
import markdownIt from "markdown-it";

const md = markdownIt();
md.use(MermaidIt);

const content = ref(mermaidDefaultContent);
const render = computed(() => md.render(content.value));
</script>

<template>
  <div class="mermaid-it-markdown">
    <h3>输入 markdown 文本：</h3>
    <a-textarea v-model="content" style="height: 500px"></a-textarea>
    <h3>渲染结果：</h3>
    <div class="" v-html="render"></div>
  </div>
</template>

<style scoped lang="less"></style>
