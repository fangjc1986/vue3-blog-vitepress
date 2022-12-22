---
outline: deep
---

<script setup>
import Game from "../.vitepress/components/games/ArknoidGame.vue"
</script>



# 打砖块

## 玩法

拖动鼠标移动下面的反弹板。

::: tip EASY
有点简单
:::

<Game />

## 算法

### 反弹

反弹基于 `入射角` + `与反弹板中心偏离距离` 综合计算，这样可以有玩家控制小球反弹方向。

```js
computeCrashLineWall() {
    if (
        this.ball.dir[1] >= 0 &&
        this.ball.y + this.ball.r >= this.lineWall.y &&
        this.ball.x + this.ball.r > this.lineWall.x &&
        this.ball.x - this.ball.r < this.lineWall.x + this.lineWall.w
    ) {
        const p = (this.ball.x - this.lineWall.x - this.lineWall.w / 2) / 100;
        const pp = M.abs(M.max(M.min(p, 0.5), -0.5));
        const angle = M.abs(M.atan(this.ball.dir[1] / this.ball.dir[0]));
        if (this.ball.dir[0] >= 0) {
            const a = p > 0 ? angle - angle * pp : angle + (PI - angle) * pp;
            this.ball.dir[0] = M.cos(a) * this.step;
            this.ball.dir[1] = -M.abs(M.sin(a)) * this.step;
        } else {
            const a = p > 0 ? angle + (PI - angle) * pp : angle - angle * pp;
            this.ball.dir[0] = -M.cos(a) * this.step;
            this.ball.dir[1] = -M.abs(M.sin(a)) * this.step;
        }
        return true;
    }
    return false;
},
```

### 砖块碰撞计算

由于砖块所在位置存在规律, 类似 `行列` 矩阵，因此根据所在屏幕坐标 `x` `y` 即可通过一次计算得到所在的砖块位置，
复杂度为 `O(1)` ；


```js
computeCrashTiles() {
  const bx1 = this.ball.x - this.ball.r, bx2 = this.ball.x + this.ball.r;
  const by1 = this.ball.y - this.ball.r, by2 = this.ball.y + this.ball.r;
  const dxy = [this.ball.dir[0] >= 0 ? 1 : 0, this.ball.dir[1] >= 0 ? 1 : 0];
  const bp = [dxy[0] ? bx2 : bx1, dxy[1] ? by2 : by1];
  const tileWidth = Tile.column * (Tile.w + 1), tileHeight = Tile.row * (Tile.h + 1);
  if (bp[1] < 50 || bp[1] > 50 + tileHeight) {
    return false;
  }
  if (bp[0] < 50 || bp[0] > 450 + tileWidth ||
      (bp[0] < 450 && bp[0] > 50 + tileWidth)
  ) {
    return false;
  }
  const r = M.floor((bp[1] - 50) / (Tile.h + 1));
  const area = bp[0] > 400 ? 1 : 0;
  const c = M.floor((bp[0] - (area ? 400 : 0) - 50) / (Tile.w + 1));
  const tile = this.tiles[area][r][c];
  if (!tile.show) return false;
  const cxy = [dxy[0] ? bp[0] - tile.x1 : tile.x2 - bp[0], dxy[1] ? bp[1] - tile.y1 : tile.y2 - bp[1]];
  if (cxy[0] < 0 || cxy[1] < cxy[0]) {
    this.ball.dir[1] = -this.ball.dir[1];
  } else {
    this.ball.dir[0] = -this.ball.dir[0];
  }
  tile.show = false;
  if (--this.remainTile <= 0) this.gameOver();
},
```



## 源码

<<< @/.vitepress/components/games/ArknoidGame.vue
