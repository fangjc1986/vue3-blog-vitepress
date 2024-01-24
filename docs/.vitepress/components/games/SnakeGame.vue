<template>
  <div class="SnakeGame">
    <div class="flex-horiz">
      <div class="pa-xs pos-r" style="border: 1px solid #eeeeee">
        <div class="pos-a" v-if="!status" style="top: 100px; left: 0; right: 0">
          <div class="pa-sm restart-button" @click="restart">点击重新开始</div>
        </div>
        <div class="flex-horiz rows" style="" v-for="row in grids">
          <div class="grid" v-for="grid in row" :style="gridStyle(grid)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

class Grid {
  constructor(row, column) {
    this.row = row;
    this.column = column;
  }

  row = 0;
  column = 0;
  // 0空白 1实物 2身体
  type = 0;
}

const dir = [
  [-1, 0, 1, 0],
  [0, 1, 0, -1],
];

export default {
  name: "SnakeGame",
  data() {
    return {
      area: [20, 40],
      grids: [],
      snakeLength: 3,
      snake: [],
      nowDir: 1,
      runTmo: null,
      // 0游戏停止 1正在游戏
      status: 0,
    };
  },
  mounted() {
    this.init();
    window.addEventListener("keydown", this.keyDownEvent);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.keyDownEvent);
  },
  methods: {
    restart() {
      clearTimeout(this.runTmo);
      this.init();
      this.status = 1;
      this.runTmo = setTimeout(this.snakeRun.bind(this), 500);
    },

    init() {
      for (let row = 0; row < this.area[0]; row++) {
        this.grids[row] = [];
        for (let column = 0; column < this.area[1]; column++) {
          this.grids[row][column] = new Grid(row, column);
        }
      }
      this.snake = this.grids[0]
        .slice(0, 3)
        .reverse()
        .map(g => {
          g.type = 2;
          return g;
        });
      this.addFood();
      this.$forceUpdate();
    },

    snakeRun() {
      const head = this.snake[0];
      const nr = (head.row + dir[0][this.nowDir] + this.area[0]) % this.area[0],
        nc = (head.column + dir[1][this.nowDir] + this.area[1]) % this.area[1];
      if (nr >= this.area[0] || nr < 0 || nc >= this.area[1] || nc < 0) return this.gameOver();
      const nextGrid = this.grids[nr][nc];
      if ([0, 1].includes(nextGrid.type) || !this.snake.slice(1).includes(nextGrid)) {
        this.snake.unshift(nextGrid);
        const needFood = nextGrid.type === 1;
        if ([0, 2].includes(nextGrid.type)) this.snake.pop().type = 0;
        nextGrid.type = 2;
        if (needFood) this.addFood();
      } else return this.gameOver();

      this.$forceUpdate();
      this.runTmo = setTimeout(this.snakeRun.bind(this), 500 * 0.9 ** (this.snake.length / 3));
    },

    addFood() {
      const diff = _.difference(_.flatten(this.grids), this.snake);
      const food = diff[Math.floor(diff.length * Math.random())];
      food.type = 1;
    },

    keyDownEvent(e) {
      if (!this.status || e.keyCode > 40 || e.keyCode < 37) return;
      e.preventDefault();
      const nd = (e.keyCode - 34) % 4;
      if ((nd + 2) % 4 === this.nowDir) return;
      this.nowDir = nd;
      clearTimeout(this.runTmo);
      this.snakeRun();
    },

    gameOver() {
      this.status = 0;
      clearTimeout(this.runTmo);
    },

    gridStyle(grid) {
      return {
        "background-color":
          this.snake[0] === grid ? "blue" : ["#f2f2f2", "#ff00ff", "#000"][grid.type],
      };
    },
  },
};
</script>

<style scoped lang="less">
.SnakeGame {
  color: black;
}

.grid {
  height: 15px;
  width: 15px;

  &:not(:first-of-type) {
    margin-left: 1px;
  }
}

.rows {
  &:not(:first-of-type) {
    margin-top: 1px;
  }
}

.restart-button {
  background-color: #fff;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  width: 120px;
  text-align: center;
  border: 3px solid #000;
  font-weight: bold;
}
</style>
