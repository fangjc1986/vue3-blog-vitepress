<template>
  <div class="ArknoidGame">
    <div class="pos-r" style="height: 480px;width: 800px;">
      <canvas class="canvas"
              width="800" height="480"
              ref="canvas"
              @mousemove="onMouseMove"
      ></canvas>
      <div class="pos-a " v-if="!status"
           style=" top: 150px;z-index: 2; left: 0;right: 0">
        <div class="color-text fz-lg cursor-p ptb-sm font-bold bg-white text-center"
             style="width: 130px; margin: auto; border: 5px solid #cccccc"
             @click="restart"
        >点击开始
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash"

const M = Math;
const PI = Math.PI;

class Tile {
  static w = 50;
  static h = 20;
  static row = 7;
  static column = 6;

  constructor(x, y) {
    this.x1 = x;
    this.y1 = y;
    this.x2 = x + Tile.w;
    this.y2 = y + Tile.h;
  }

  x1 = 0;
  y1 = 0;

  x2 = 0;
  y2 = 0;
  show = true;
}

export default {
  name: 'ArknoidGame',
  data() {
    return {
      step: 2,
      gameTime: 0,
      remainTile: 0,
      runTmo: null,
      ctx: null,
      lineWall: {w: 100, h: 10, x: 0, y: 450, last: []},
      canvas: {w: 800, h: 480},
      ball: {r: 3, x: 100, y: 100, dir: [M.cos(PI / 4), -M.sin(PI / 4)]},
      tiles: [],
      // 0停止 1游戏中
      status: 0,
    }
  },
  mounted() {
    this.ctx = this.$refs.canvas.getContext("2d");
    this.resetStatus();
  },
  beforeDestroy() {
    clearTimeout(this.runTmo);
  },
  methods: {
    restart() {
      this.status = 1;
      this.resetStatus();
      this.runtime();
    },

    resetStatus() {
      this.lineWall.x = (this.canvas.w - this.lineWall.w) / 2;
      this.ball.x = this.lineWall.x + this.lineWall.w / 2;
      this.ball.y = this.canvas.h - 40;
      this.ball.dir = [M.cos(PI / 4) * this.step, -M.sin(PI / 4) * this.step];
      this.remainTile = Tile.row * Tile.column * 2;
      this.resetTiles();
      this.renderTiles();
      this.renderLineWall();
      this.renderBall();
    },

    gameOver() {
      this.status = 0;
      clearTimeout(this.runTmo);
    },

    runtime() {
      this.ctx.clearRect(0, 0, this.$refs.canvas.offsetWidth, this.$refs.canvas.offsetHeight);
      this.computeCrashWall() || this.computeCrashLineWall() || this.computeCrashTiles();
      this.renderLineWall();
      this.renderTiles();
      this.renderBall();
      if (!this.status) return;
      this.runTmo = setTimeout(this.runtime.bind(this), 1);
    },

    computeCrashWall() {
      if (this.ball.x + this.ball.r >= this.canvas.w) {
        this.ball.dir[0] = -M.abs(this.ball.dir[0]);
        return false;
      } else if (this.ball.x <= 0) {
        this.ball.dir[0] = M.abs(this.ball.dir[0]);
        return false;
      }
      if (this.ball.y <= 0) {
        this.ball.dir[1] = M.abs(this.ball.dir[1]);
        return false;
      }
      if (this.ball.y > this.canvas.h) {
        this.gameOver();
      }
      return false;
    },

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

    onMouseMove(e) {
      this.lineWall.x = e.offsetX - this.lineWall.w / 2;
    },

    resetTiles() {
      for (let a = 0; a < 2; a++) {
        const sx = a * 400 + 50, sy = 50;
        this.tiles[a] = [];
        for (let i = 0; i < Tile.row; i++) {
          this.tiles[a][i] = [];
          for (let j = 0; j < 6; j++) {
            this.tiles[a][i][j] = new Tile(j * (Tile.w + 1) + sx, i * (Tile.h + 1) + sy);
          }
        }
      }
    },

    renderTiles() {
      this.ctx.fillStyle = "#001f3f";
      for (let a = 0; a < this.tiles.length; a++) {
        for (let i = 0; i < this.tiles[a].length; i++) {
          for (let j = 0; j < this.tiles[a][i].length; j++) {
            const t = this.tiles[a][i][j];
            if (!t.show) continue;
            this.ctx.fillRect(t.x1, t.y1, Tile.w, Tile.h);
          }
        }
      }
    },

    renderBall() {
      this.ctx.fillStyle = "#FF851B ";
      this.ctx.beginPath();
      this.ball.x += this.ball.dir[0];
      this.ball.y += this.ball.dir[1];
      this.ctx.arc(this.ball.x, this.ball.y, this.ball.r, 0, 2 * Math.PI);
      this.ctx.fill();
    },

    renderLineWall() {
      const offset = this.canvas.w - this.lineWall.w;
      let x = this.lineWall.x;
      if (x > offset) x = offset;
      if (x < 0) x = 0;
      this.lineWall.last.push(this.lineWall.x);
      if (this.lineWall.last.length > 10) this.lineWall.last.shift();
      this.ctx.fillStyle = "#0a0a76";
      this.ctx.fillRect(x, this.lineWall.y, this.lineWall.w, this.lineWall.h);
    }

  }
}
</script>

<style scoped lang="less">
.ArknoidGame {

}

.canvas {
  background-color: #efefef;

}
</style>
