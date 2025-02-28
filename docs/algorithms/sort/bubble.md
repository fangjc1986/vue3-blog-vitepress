---
outline: deep
---

<script setup>
import BubbleSort from "../../.vitepress/components/algorithms/sort/bubble-sort.vue";
</script>

# 冒泡排序（Bubble Sort）

## 介绍

冒泡排序是一种简单直观的排序算法。它重复地走访过要排序的数列，一次比较两个元素，
如果它们的顺序错误就把它们交换过来。走访数列的工作是重复进行的，直到没有再需要交换的元素为止，
这时数列就完全排序好了。这个算法的名字由来是因为越小（或越大）的元素会经过交换慢慢“浮”到数列的顶端，故名冒泡排序。

:::tip 拉胯
最容易理解，但也是最拉胯的排序算法。
:::

## 动画模拟

<div class="mtb-md">
<ClientOnly>
<BubbleSort />
</ClientOnly>
</div>

## 工作原理

冒泡排序的基本思想是：通过对待排序序列从前向后（或从后向前），依次比较相邻元素的值，若发现逆序则交换，使值较大的元素逐渐从前移向后部，就像水底下的气泡一样逐渐向上冒。

具体来说，冒泡排序算法的执行过程如下：

- 比较相邻的元素：如果第一个比第二个大（或小，根据排序顺序决定），就交换它们两个。
- 对每一对相邻元素做同样的工作：从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大数（或最小数）。
- 针对所有的元素重复以上的步骤：除了最后一个。
- 持续每次对越来越少的元素重复上面的步骤：直到没有任何一对数字需要比较。

## 算法特性

**稳定性：** 冒泡排序是一种稳定的排序算法，即如果两个相等元素的相对位置在排序前和排序后保持不变。

**时间复杂度：**

- 最优时间复杂度：O(n)（当输入数组已经是排序好的情况下，只需进行一次遍历即可确定数组已排序）。
- 最坏时间复杂度：O(n^2)（当输入数组是逆序的情况下，需要进行n*(n-1)/2次比较和交换）。
- 平均时间复杂度：O(n^2)。

**空间复杂度：** O(1)（因为冒泡排序是原地排序算法，不需要额外的存储空间）。

## 源码

<<< @/.vitepress/components/algorithms/sort/bubble-sort.vue