---
outline: deep
---

<script setup>
import Game from "../.vitepress/components/games/mine-sweeping.vue"
</script>



# 经典连连看

## 玩法

经典扫雷，就是 `windows` 自带的扫雷游戏，玩法一致，包括 `右键插旗 🚩` `双击开周边` 等功能。


::: danger 重要提示

受浏览器限制，有些浏览器（360浏览器等）默认开启 `右键手势` 功能，可能会影响双击判断，需要关闭此类功能后才能保证双击完美判断。

:::

<ClientOnly>
<Game />
</ClientOnly>

## 算法

### 摆放地雷

这个比较简单：
1. 现根据地雷数量进行随机摆放；
2. 填充剩余格式的 `数值` 或 `空格`；

随机填充地雷基础算法：

<<< @/.vitepress/utils/array.util.ts

### 扩散算法

基于 `广度优先搜索` 算法；

为了实现动画扩散（每一帧扩散一圈），需要在 `广度优先搜索` 中加入延时扩散；

延时扩散部分源码：

```ts
export const getRandomInArray = (list = [], n = 1) => {
  if (!list.length) return [];
  const arr = [...list],
    res = [];
  while (n-- > 0) {
    const r = Math.floor(Math.random() * arr.length);
    res.push(arr.splice(r, 1)[0]);
  }
  return res;
};

export const getRandomRangeInArray = (list = [], len = 1, extend = false): any[] => {
  if (!list.length) return [];
  if (!extend) len = Math.min(len, list.length);
  const ans = [],
    offset = getRandomInteger(0, list.length - 1);
  for (let i = 0; i < len; i++) {
    ans.push(list[(i + offset) % list.length]);
  }
  return ans;
};

```
## 源码

<<< @/.vitepress/components/games/mine-sweeping.vue
