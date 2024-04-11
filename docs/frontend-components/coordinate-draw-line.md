---
outline: deep
---

<script setup>
import CoordinateDrawLineDemo1 from "../.vitepress/components/frontend-components/coordinate-draw-line-demos/coordinate-draw-line-demo1.vue";
</script>

# 坐标系线段绘制组件使用手册(coordinate-draw-line)

`coordinate-draw-line` 是基于 `vue3` 开发的一个坐标系线段绘制组件。

使用场景：

- 阶梯数据查看与编辑；


## 安装

使用以下命令安装 `coordinate-draw-line`：

```bash
npm install coordinate-draw-line
# 或
yarn add coordinate-draw-line
```

## 导入组件

### 全局导入

在 `main.js` 中全局引入 `coordinate-draw-line`：

```ts
import {createApp} from "vue";
import App from "./App.vue";
// v3-drag-zoom 组件
import CoordinateDrawLine from "coordinate-draw-line";

createApp(App).use(CoordinateDrawLine).mount("#app");
```

### 按需导入

在需要的组件中导入 `coordinate-draw-line`：

```vue

<script setup lang="ts">
  import {CoordinateDrawLine} from "coordinate-draw-line";

</script>

<template>
  <div class="" style="width: 800px;height: 480px;">
    <coordinate-draw-line
        :x-end="200"
        :y-end="100"
    ></coordinate-draw-line>
  </div>
</template>
```

## DEMO

<ClientOnly>
<CoordinateDrawLineDemo1 />
</ClientOnly>

<details>

<summary>点击展开源码</summary>

<<< @/.vitepress/components/frontend-components/coordinate-draw-line-demos/coordinate-draw-line-demo1.vue

</details>


## API参数

### CoordinateDrawLine

#### Props

| 参数名             | 类型         | 默认值 | 是否必须 | 说明           |
|-----------------|------------|-----|------|--------------|
| xStart          | number     | 0   | 否    | 坐标系左下角x起始大小  |
| yStart          | number     | 0   | 否    | 坐标系左下角y起始大小  |
| xEnd            | number     |     | 是    | 坐标系右上角x结束大小  |                  |
| yEnd            | number     |     | 是    | 坐标系右上角y结束大小  |                  |
| xAxisSplit      | int        | 10  | 否    | X轴分割线的数量     |             |   
| yAxisSplit      | int        | 10  | 否    | Y轴分割线的数量     |
| splitStyle      | LineStyle  |     | 否    | 分割线样式        |
| axisStyle       | LineStyle  |     | 否    | 轴线样式         |
| lineStyle       | LineStyle  |     | 否    | 默认线条样式       |
| lineHoverStyle  | LineStyle  |     | 否    | 默认鼠标悬浮在线条上样式 |
| pointStyle      | PointStyle |     | 否    | 默认点样式        |
| pointHoverStyle | PointStyle |     | 否    | 默认鼠标悬浮在点上样式  |
| textStyle       | TextStyle  |     | 否    | 刻度文本样式       |
| textDistance    | number     | 5   | 否    | 文本与轴线的距离     |
| padding         | number     | 20  | 否    | 坐标系与容器之间的距离  |

#### Event

| 事件       | 参数                                           | 说明                      |
|----------|----------------------------------------------|-------------------------|
| changing | (point:Point \| null, lines: Line[]) => void | 鼠标拖动点过程中触发              |
| changed  | (point:Point \| null, lines: Line[]) => void | 鼠标拖动完成触发一次（删除线条等也会触发一次） |

#### Exposed

| 方法         | 参数                | 说明           |
|------------|-------------------|--------------|
| addLine    | (line:Line)=>void | 添加线条         |
| removeLine | (line:line)=>void | 移除线条         |
| clearLines | ()=>void          | 清除所有线条       |
| draw       | () => void        | 强制绘制一次canvas |

#### Point

| 属性         | 类型         | 说明     |
|------------|------------|--------|
| x          | number     | x坐标    |
| y          | number     | y坐标    |
| line       | Line       | 所属线条   |
| style      | PointStyle | 样式     |
| hoverStyle | PointStyle | 鼠标悬浮样式 |

#### PointStyle

| 属性          | 类型     | 说明   |
|-------------|--------|------|
| radius      | number | 半径   |
| fillStyle   | string | 填充色  |
| strokeStyle | string | 边框色  |
| lineWidth   | number | 边框宽度 |

#### Line

| 属性            | 类型        | 说明              |
|---------------|-----------|-----------------|
| start         | Point     | 起点              |
| end           | Point     | 终点              |
| style         | LineStyle | 样式              |
| hoverStyle    | LineStyle | 鼠标悬浮样式          |
| points        | Point[]   | 点列表             |
| xDull         | DullType  | 单调性             |
| yDull         | DullType  | 单调性             |
| fixed         | number    | 保留小数位数          |
| mergeDistance | number    | 点合并距离(小于0将不会合并） |

#### LineStyle

| 属性          | 类型     | 说明   |
|-------------|--------|------|
| strokeStyle | string | 线条颜色 |
| lineWidth   | number | 线条宽度 |

#### DullType

| 值         | 说明   |
|-----------|------|
| increase  | 单调上升 |
| decrease  | 单调下降 |
| undefined | 无约束  |

#### Text

| 属性    | 类型                            | 说明   |
|-------|-------------------------------|------|
| text  | string                        | 文本内容 |
| point | Point                         | 所在位置 |
| align | "left" \| "center" \| "right" | 对齐方式 |
| style | TextStyle                     | 文本样式 |

#### TextStyle

| 属性        | 类型     | 说明           |
|-----------|--------|--------------|
| font      | string | 字体(12 Arial) |
| fillStyle | string | 填充颜色(#000)   |
