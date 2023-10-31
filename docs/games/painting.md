---
outline: deep
---

<script setup>
import Game from "../.vitepress/components/games/painting.vue"
</script>



# 画画班

## 玩法

按住鼠标在滑板上随便乱画即可；

::: danger 遗憾

没有实现像写毛笔一样的粗细变化，后面有空再研究研究

:::

<ClientOnly>
<Game />
</ClientOnly>

## 算法

应该说没有算法可言，就是不停的画直线， 具体可以直接看源码；

## 源码

<<< @/.vitepress/components/games/painting.vue
