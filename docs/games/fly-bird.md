---
outline: deep
---

<script setup>
import Game from "../.vitepress/components/games/fly-bird.vue";
import Game2 from "../.vitepress/components/games/fly-bird-only.vue";
</script>



# 飞翔的小鸟-3d

## 玩法

点击游戏界面小鸟会一跳一跳；

可以选择小鸟角色游玩； 查看各小鸟高清 [3D建模](#小鸟)

::: tip 有点小难

虽然我能玩到 100+ 关

:::

<Game />

## 算法

使用 `three.js` 框架；

### 小鸟

小鸟上下运动使用重力加速度公式；

鸟头方向使用速度与角度对应关系：[`向上初始速度`, `- 向下初始速度`] -> [ `- PI/2` , `PI/2` ];

<Game2 />

### 柱子

柱子离开屏幕后回收，以防止内存溢出；


## 源码

<<< @/.vitepress/components/games/fly-bird.vue
