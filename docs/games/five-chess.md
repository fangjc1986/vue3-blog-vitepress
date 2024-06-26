<script setup>
import FiveChess from "../.vitepress/components/games/five-chess.vue"
</script>

# AI 五子棋

## 玩法
经典五子棋玩法，直接开玩。

::: tip
由于前端计算性能有限，计算深度为 `2` 步（太深直接等到天荒地老）;
:::

<ClientOnly>
<FiveChess />
</ClientOnly>

## 算法

基于 `大小博弈算法`，具体简要算法可以看 [`井字棋游戏`](tic-tac-toe.md#算法) 中的介绍。

五子棋相比 `井字棋` 要困难许多，主要集中在 `评估函数上` ;

## 源码

<<< @/.vitepress/components/games/five-chess.vue
