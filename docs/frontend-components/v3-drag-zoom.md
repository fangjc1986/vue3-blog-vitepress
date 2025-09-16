---
outline: deep
---

<script setup>
import V3DragZoomDemo1 from "../.vitepress/components/frontend-components/v3-drag-zoom-demos/v3-drag-zoom-demo1.vue";
import V3DragZoomDemo2 from "../.vitepress/components/frontend-components/v3-drag-zoom-demos/v3-drag-zoom-demo2.vue";
import V3DragZoomDemo3 from "../.vitepress/components/frontend-components/v3-drag-zoom-demos/v3-drag-zoom-demo3.vue";
</script>

# 缩放拖拽组件使用手册(v3-drag-zoom)

`v3-drag-zoom` 是基于 `vue3` 开发的一个缩放拖拽组件，方便开发者快速实现缩放拖拽功能。

效果类似地图的缩放与拖拽，但是不同的是，`v3-drag-zoom` 可以缩放任意元素，而不仅仅是地图。

使用场景：

- 地图缩放与拖拽
- 图片缩放与拖拽
- 任意元素缩放与拖拽
- 其他任意需要缩放与拖拽的场景

## 安装

使用以下命令安装 `v3-drag-zoom`：

```bash
npm install v3-drag-zoom
# 或
yarn add v3-drag-zoom
```

## 导入组件

### 全局导入

在 `main.js` 中全局引入 `v3-drag-zoom`：

```ts
import {createApp} from "vue";
import App from "./App.vue";
// v3-drag-zoom 组件
import V3DragZoom from "v3-drag-zoom";
// v3-drag-zoom 全局样式（必须导入，否则无法正常使用）
import "v3-drag-zoom/dist/style.css";

createApp(App).use(V3DragZoom).mount("#app");
```

### 按需导入

在需要的组件中导入 `v3-drag-zoom`：

```vue

<script setup lang="ts">
  import {V3DragZoomContainer} from "v3-drag-zoom";
</script>

<template>
  <v3-drag-zoom-container>
    <div>需要缩放与拖拽的元素</div>
  </v3-drag-zoom-container>
</template>
```

::: tip
由于`v3-drag-zoom` 全局导入也就只有 2 个组件，因此建议全局导入。
:::

## 基本使用

使用 `v3-drag-zoom` 组件包裹需要缩放与拖拽的元素即可。

::: tip
如果 `v3-drag-zoom` 内部存在 `img` 元素，则会自动等待所有元素加载完毕后初始化，因此不需要手动等待图片加载完毕后再初始化。
:::


<ClientOnly>
<V3DragZoomDemo1 />
</ClientOnly>

<<< @/.vitepress/components/frontend-components/v3-drag-zoom-demos/v3-drag-zoom-demo1.vue

## 容器中内容对齐方式

对齐方式可以通过 `align` 属性设置，可选值有 `auto`、 `contain`、`cover`。

- `auto`：不做任何处理，实际多大就显示多大
- `contain`：默认值，内容居中，且不超出容器
- `cover`：内容居中，且对齐短边撑满容器

可以通过下方 demo 查看实际效果；


<ClientOnly>
<V3DragZoomDemo2 />
</ClientOnly>

<details>

<summary>点击展开源码</summary>

<<< @/.vitepress/components/frontend-components/v3-drag-zoom-demos/v3-drag-zoom-demo2.vue

</details>

## 地图标点

`v3-drag-zoom` 也可以用于地图标点，只需要将 `v3-drag-zoom-item` 组件放置在 `v3-drag-zoom-container` 组件中即可。

任意截图一张地图图片作为容器内容，添加若干点标记（v3-drag-zoom-item）;

在下面demo中尝试拖拽标记点，以及缩放地图；

::: tip
在 `v3-drag-zoom-item` 中，也可以添加其他内容，比如文字、图片等。
:::

<ClientOnly>
<V3DragZoomDemo3 />
</ClientOnly>

<details>

<summary>点击展开源码</summary>

<<< @/.vitepress/components/frontend-components/v3-drag-zoom-demos/v3-drag-zoom-demo3.vue

</details>



## API参数

### v3-drag-zoom-container

#### Props

| 参数名             | 类型      | 默认值     | 说明                                    |
|-----------------|---------|---------|---------------------------------------|
| align           | String  | contain | 内容对齐方式，可选值有 `auto`、 `contain`、`cover` |
| autoResize      | Boolean | true    | 是否自动重置尺寸，当容器尺寸为百分比的时候，会根据父容器变化而自动变化   |
| followPointer   | Boolean | true    | 缩放时是否跟随鼠标                             |
| maxZoom         | Float   | 100     | 最大缩放倍数                                |
| minZoom         | Float   | 0.01    | 最小缩放倍数                                |   
| zoomFactor      | Float   | 0.1     | 鼠标滚轮一次的缩放比例                           |
| loading         | Boolean | false   | 是否加载中                                 |
| animateDuration | Number  | 200     | 缩放时候的过度动画时长，单位 ms                     |

#### Events

| 事件名            | 参数                                                 | 说明                        |
|----------------|----------------------------------------------------|---------------------------|
| onMove         | ( event :[ContainerEvent](#ContainerEvent))=> void | 每移动一点距离触发，返回当前位置          |
| onMoveFinished | ( event :[ContainerEvent](#ContainerEvent))=> void | 移动结束（鼠标抬起或超出范围）触发， 返回当前位置 |
| onZoom         | ( event :[ContainerEvent](#ContainerEvent))=> void | 缩放触发，返回当前缩放倍数             |

#### Slots

| Slot    | 说明          |
|---------|-------------|
| default | 直接填写需要放置的内容 |

#### Exposed

| 参数名   | 类型                   | 说明               |
|-------|----------------------|------------------|
| zoom  | (zoom:Float) => void | 手动缩放 zoom: 为缩放倍数 |
| reset | () => void           | 重置缩放             |

### v3-drag-zoom-item

#### Props

| 参数名               | 类型                          | 默认值         | 是否必须 | 说明                                                 |
|-------------------|-----------------------------|-------------|------|----------------------------------------------------|
| offset            | Array\<Integer\>            | \[-50,-50\] | 否    | 偏移量，默认值代表横向和纵向均偏移 -50%，也就是对齐中心点位置，偏移量单位为 %, 不支持 px |
| fixedSize         | Boolean                     | false       | 否    | 是否固定大小， true代表在缩放过程中该item内容尺寸不变                    |
| rotate            | Float                       | 0           | 否    | 旋转角度单位 deg (360度）                                  |
| draggable         | Boolean                     | false       | 否    | 是否可以拖拽移动                                           |  
| position(v-model) | [CurPosition](#CurPosition) | 无           | 是    | 该 item 在内容中的位置（百分比位置）                              |

#### Slots

| Slot    | 说明          |
|---------|-------------|
| default | 直接填写需要放置的内容 |

#### Events

| 事件名            | 参数                      | 说明                        |
|----------------|-------------------------|---------------------------|
| onMove         | ( pos :Position)=> void | 每移动一点距离触发，返回当前位置          |
| onMoveFinished | ( pos :Position)=> void | 移动结束（鼠标抬起或超出范围）触发， 返回当前位置 |

## 类型定义

### CurPosition

| 参数名 | 类型    | 默认值 | 是否必须 | 说明     |
|-----|-------|-----|------|--------|
| x   | Float | 无   | 是    | 横向位置 % |
| y   | Float | 无   | 是    | 纵向位置 % |

### Position extend CurPosition

| 参数名 | 类型                       | 默认值 | 是否必须 | 说明                                                                      |
|-----|--------------------------|-----|------|-------------------------------------------------------------------------|
| x   | Float                    | 无   | 是    | 横向位置 %                                                                  |
| y   | Float                    | 无   | 是    | 纵向位置 %                                                                  |
| sub | (pos:Position)=>Position | 无   | 否    | 计算当前 Position 与 pos 之间的差值 new Position(this.x - pos.x, this.y - pos.y); |
| add | (pos:Position)=>Position | 无   | 否    | 计算当前 Position 与 pos 之间的和值 new Position(this.x + pos.x, this.y + pos.y); |

### Size

| 参数名    | 类型      | 默认值 | 是否必须 | 说明    |
|--------|---------|-----|------|-------|
| width  | Integer | 无   | 是    | 宽度 像素 |
| height | Integer | 无   | 是    | 高度 像素 |

### ContainerEvent

| 参数名           | 类型          | 默认值 | 是否必须 | 说明                      |
|---------------|-------------|-----|------|-------------------------|
| center        | CurPosition | 无   | 是    | 容器中心位置（相对于容器左上角的绝对像素坐标） |
| containerSize | Size        | 无   | 是    | 容器大小（像素）                |
| contentSize   | Size        | 无   | 是    | 内容大小（像素）                |
| zoom          | Float       | 无   | 是    | 缩放倍数                    |
