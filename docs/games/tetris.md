---
outline: deep
---

<script setup>
import Game from "../.vitepress/components/games/tetris.vue"
</script>



# 俄罗斯方块

## 玩法

`上 下 左 右` 操作，按住 `下` 加速， 速度会随着分数的提高慢慢边快，后面会快到 `⚡ 闪电侠` 都反应不过来的哦；

::: tip 

无穷无尽

:::

<Game />

## 算法

没有太多的算法难点；

使用矩阵方式实现任意形状的方块, 理论上可以任意根据自己的想象力来构建各式各样的方块。

```ts
const BLOCKS = [
  [[1, 1, 0], [0, 1, 1]],
  [[1, 1, 1, 1]],
  [[1, 1, 1], [0, 0, 1]],
  [[1, 1, 1], [1, 0, 0]],
  [[1]],
  [[1, 1], [0, 1]],
  [[1, 1], [1, 0]],
  [[1, 1], [1, 1]],
  [[1, 1, 1], [0, 1, 0]]
]
```

方块消除使用双指针方法：

```ts
const clearLines = () => {
  let target = ROW, source = target, cl = 0;
  while (--target >= 0) {
    const line = grids.value[target];
    const needClear = line.every(g => g.status === 2);
    if (needClear) cl++;
    if (!needClear && source > target) continue;
    source = source > target ? target : source;
    while (--source >= 0) {
      const sLine = grids.value[source];
      if (sLine.every(g => g.status === 2)) continue;
      line.forEach((g, i) => g.status = sLine[i].status);
      break;
    }
    if (source < 0) line.forEach(g => g.status = 0);
  }
  score.value += cl * cl * 100;
  clearLineCount.value += cl;
}
```

## 源码

<<< @/.vitepress/components/games/tetris.vue
