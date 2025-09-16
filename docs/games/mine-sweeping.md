---
outline: deep
---

<script setup>
import Game from "../.vitepress/components/games/mine-sweeping.vue";
import Game2 from "../.vitepress/components/games/mine-sweeping2.vue";
</script>



# 经典连连看

## 玩法

经典扫雷，就是 `windows` 自带的扫雷游戏，玩法一致，包括 `右键插旗 🚩` `点击数字开周边` 等功能。


::: danger 重要提示

受浏览器限制，有些浏览器（360浏览器等）默认开启 `右键手势` 功能，可能会影响右键判断，需要关闭此类功能后才能保证双击完美判断。

:::

<ClientOnly>
<Game2 /> 
</ClientOnly>

## 源码

<<< @/.vitepress/components/games/mine-sweeping2.vue
