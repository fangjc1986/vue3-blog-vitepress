---
outline: deep
---

<script setup>
import MermaidItMarkdownDemo from "../.vitepress/components/frontend-components/mermaid-it-markdown/mermaid-it-markdown-demo.vue";
</script>
# MermaidItMarkdown 使用手册

一个将让 markdown-it 支持 mermaid 语法的插件

## 安装

本插件依赖 `mermaid` 库，所以同时需要安装 `mermaid` 库

```bash
npm install mermaid-it-markdown mermaid --save
# or
yarn add mermaid-it-markdown mermaid
```


## 使用

### 在 markdown-it 中使用

```js
const md = require('markdown-it')()
const mermaidItMarkdown = require('mermaid-it-markdown')
md.use(mermaidItMarkdown)
```

### 在 mavon-editor 中使用

::: danger 注意！！！
`mavon-editor` 版本 `3.0.1` 存在一个bug，无法调用任何插件；

建议使用 `3.0.0-beta` 版本（已测试），或者等待 `3.0.2` 版本发布。

:::

```js
import MavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import mermaidItMarkdown from 'mermaid-it-markdown'

const markdownIt = MavonEditor.mavonEditor.getMarkdownIt();
markdownIt.use(mermaidItMarkdown)
```

- markdown 语法

```markdown
    ```mermaid
    flowchart TD
        A[Hard] -->|Text| B(Round)
        B --> C{Decision}
        C -->|One| D[Result 1]
        C -->|Two| E[Result 2]
    ```
```

## **更多语法请参考 [mermaid在线示例](https://mermaid.live/)**

## 完整示例：

- 源码：

<<< @/.vitepress/components/frontend-components/mermaid-it-markdown/mermaid-it-markdown-demo.vue


<ClientOnly>
<MermaidItMarkdownDemo />
</ClientOnly>


