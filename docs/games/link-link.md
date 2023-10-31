---
outline: deep
---

<script setup>
import Game from "../.vitepress/components/games/link-link.vue"
</script>



# 🌈连连看

## 玩法

我对连连看的理解应该不会比你多 😉。

只是在变态模式下可能存在看不清的情况，建议使用游戏 `右上角按钮` 开启悬停显示 `RGB` 颜色功能；

::: warning 不要玩 `变态` `神仙` 难度

主要是眼睛受不了 

:::

<ClientOnly>
<Game />
</ClientOnly>

## 算法

### 连接，消除算法
基于 `广度优先搜索` 算法，这个基础算法没什么好多说的；

为了短暂显示连接路径，因此需要记录下路径。

### 色值算法

平均分割 `RGB` 颜色，并选取其中的某一段（相邻色值更加难以辨析）;

<<< @/.vitepress/utils/color.util.ts

## 源码

<<< @/.vitepress/components/games/link-link.vue
