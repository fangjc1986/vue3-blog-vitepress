<script setup>
import TicTacToe from "../.vitepress/components/games/tic-tac-toe.vue"
</script>

# AI 井字棋

## 玩法
小时候九宫格中画 ⭕⭕❌❌ 的经典游戏。

::: warning 但是
你根本不可能战胜它
:::

<TicTacToe />

## 算法

基于 `大小博弈算法`，具体算法度娘搜索一堆。

由于只有 `9` 格，所以博弈深度直到 `结束`, 因此理论上这个 `AI` 是不可战胜的，实际上的确也是不可战胜的 😜。

## 大小博弈算法封装函数

<<< @/.vitepress/utils/ai.util.ts