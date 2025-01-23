---
outline: deep
---

<script setup>
import BfsSearch from "../../.vitepress/components/algorithms/search/bfs-search.vue";
</script>

# 广度优先搜索（BFS)

## 介绍

BFS是一种用于图遍历的搜索算法。它从图的某个节点开始，首先访问该节点，然后访问其所有相邻节点，
再逐层向外扩展，直到找到目标节点或遍历完整个图。BFS使用队列数据结构来辅助实现，
它保证了先访问到的节点先被处理，因此常用于寻找最短路径或层级遍历等场景。

:::tip 最短路径就靠它
:)

代码上与 `DFS` 唯一区别: `DFS` 用堆， `BFS` 用队列；
:::

## 动画模拟

<div class="mtb-md">
<ClientOnly>
<BfsSearch />
</ClientOnly>
</div>

## 工作原理

- 初始化：创建一个队列来存储待访问的节点，并将起始节点加入队列。
- 循环处理：从队列中取出一个节点，访问它的所有邻居。如果邻居节点未被访问，则将其加入队列，并标记为已访问。
- 重复：继续这个过程，直到队列为空。


## 算法特性

- 层次性：访问节点的顺序是层级化的，从起始节点开始，逐层向外扩展。
- 最短路径：在无权图中，BFS能够找到从起点到其他节点的最短路径。

## 源码

<<< @/.vitepress/components/algorithms/search/bfs-search.vue