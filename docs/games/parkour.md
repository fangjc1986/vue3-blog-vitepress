---
outline: deep
---

<script setup>
import Game from "../.vitepress/components/games/parkour.vue"
</script>



# 砖块跑酷

## 玩法

`方向键 上` 跳跃， 按住不放跳的更高；

`方向键 左 右` 可以左右移动方块，在空中和地上均可以移动；

::: tip 有点难

感觉挺难的

:::

<Game />

## 算法

为了提高性能，此游戏使用 `canvas` 渲染；

### 障碍物生产

随机生成一定间距、高度、粗细的障碍物，同时在障碍物离开屏幕后移除，防止内存溢出；

```ts
const createBox = () => {
  const last = roadBlocks.length ? roadBlocks[roadBlocks.length - 1] : null;
  if (last == null) {
    const box = new Box(getRandomInteger(20, 50), getRandomInteger(20, 200));
    box.posX = width;
    box.h = 0;
    roadBlocks.push(box);
  } else if (last.posX < width + 100) {
    const box = new Box(getRandomInteger(20, 50), getRandomInteger(20, 200));
    box.posX = last.posX + last.width + getRandomInteger(0, 300);
    box.h = 0;
    roadBlocks.push(box);
  }
}
```

### 方块处理

使用重力加速度公式模拟重力感，`g` 每次按 `上` 给一个 `负向` 速度 `v0`， 并将 `S0` 设置为当前高度即可；


```ts
const drawPlayer = () => {
    const t = frameTime - t0;
    const tc = frameTime - playerBox.createTime;
    playerBox.posX += runSpeed * tc;
    playerBox.posX = Math.max(0, playerBox.posX);
    playerBox.posX = Math.min(width - playerSize, playerBox.posX);
    playerBox.createTime = frameTime;
    playerBox.h = g * t * t / 2 + v0 * t + s0; // [!code hl]
    playerBox.h = Math.max(0, playerBox.h); // [!code hl]
    ctx.fillStyle = "#1ebabe";
    ctx.fillRect(playerBox.posX, height - playerBox.h - playerSize - horizonH, playerSize, playerSize);
}
```

另外还有按键长安跳的较高的识别；

```ts
const keydownJump = () => {
  if (playerBox.h === 0) spaceDownTime = -1;
  if (playerBox.h !== 0 || spaceDownTime > 0) return;
  spaceDownTime = new Date().getTime();
  upPlayer();
}

const keyupJump = () => {
  spaceDownTime = -1;
}
```

## 源码

<<< @/.vitepress/components/games/parkour.vue
