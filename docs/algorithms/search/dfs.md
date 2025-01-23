---
outline: deep
---

<script setup>
import DfsSearch from "../../.vitepress/components/algorithms/search/dfs-search.vue";
</script>

# 深度优先搜索（DFS)


## 介绍

DFS是另一种用于图遍历的搜索算法。与BFS不同，DFS会尽可能深地访问图的节点，直到不能再继续前进为止，
然后回溯到上一个节点，继续探索其他路径。DFS递归地探索每个可能的路径，直到找到目标节点或遍历完整个图。
DFS使用堆栈数据结构来辅助实现，它常用于寻找路径、拓扑排序、连通性检测等场景。

:::tip 路径一般不会是最短的
:(

代码上与 `BFS` 唯一区别: `DFS` 用堆， `BFS` 用队列；
:::

## 动画模拟

<div class="mtb-md">
<ClientOnly>
<DfsSearch />
</ClientOnly>
</div>

## 工作原理

- 从图的某个起始节点开始，首先访问该节点。
- 然后沿着其连通路径尽可能深地访问其他节点，直到不能再继续前进为止。
- 回溯到上一个节点，继续探索其他未访问的路径。
- 重复上述过程，直到所有节点都被访问过。

## 算法特性

- 递归特性：DFS可以用递归（函数自调用）实现。在递归中，函数调用栈自动管理节点状态。
- 栈的使用：在非递归版本中，需要显式使用栈来模拟递归过程。
- 路径回溯：当某条路径探索完成后，回退到上一个节点继续探索未访问的邻居。


## 源码

<<< @/.vitepress/components/algorithms/search/dfs-search.vue