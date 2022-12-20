<template>
  <div class="mine-sweeping vue-component-container flex-column flex-center-all">
    <div class="mb-md flex-column flex-center-all">
      <div class="flex-horiz">
        <n-button type="primary" v-if="gameState !== 2 " @click="restart">开始游戏</n-button>
        <n-button type="error" v-else @click="gameOver(false)">停止游戏</n-button>
        <div class="ml-xs">
          <n-select :options="levels" v-model:value="nowLevelValue" :disabled="gameState === 2"></n-select>
        </div>
      </div>

      <div class="flex-horiz mt-sm" v-if="nowLevelValue === 4">
        <div class="ml-xs ">
          <n-input-group>
            <n-input-group-label>行</n-input-group-label>
            <n-input-number :style="{width:'100px'}" v-model:value="nowLevel.row" :disabled="gameState === 2"/>
          </n-input-group>
        </div>
        <div class="ml-xs ">
          <n-input-group>
            <n-input-group-label>列</n-input-group-label>
            <n-input-number :style="{width:'100px'}" v-model:value="nowLevel.col" :disabled="gameState === 2"/>
          </n-input-group>
        </div>
        <div class="ml-xs ">
          <n-input-group>
            <n-input-group-label>雷</n-input-group-label>
            <n-input-number :style="{width:'100px'}" v-model:value="nowLevel.boom" :disabled="gameState === 2"/>
          </n-input-group>
        </div>
      </div>
    </div>

    <div class="flex-horiz flex-center-all mb-xs" v-if="gameState !== 1">
      <div class="">
        <n-tag v-if="gameState === 1 ">未开始</n-tag>
        <n-tag type="info" v-else-if="gameState === 2">游戏中</n-tag>
        <n-tag type="success" v-else-if="gameState === 3">胜利！</n-tag>
        <n-tag type="error" v-else>失败！</n-tag>
      </div>
      <div class="ml-xs ">
        <n-input-group>
          <n-input-group-label>雷</n-input-group-label>
          <n-input :style="{width:'100px'}" :readonly="true" :value="`${flagCount} / ${nowLevel.boom}`"/>
        </n-input-group>
      </div>
      <div class="ml-xs ">
        <n-input-group>
          <n-input-group-label>扫</n-input-group-label>
          <n-input :style="{width:'100px'}" :readonly="true" :value="`${openCount} / ${nowLevel.row * nowLevel.col}`"/>
        </n-input-group>
      </div>
      <div class="ml-xs">
        <n-tag type="info">{{ timeDisplay }}</n-tag>
      </div>
    </div>
    <div class="grid-container flex-column" onselectstart="return false" @contextmenu.prevent="">
      <div class="flex-horiz" v-for="row in map">
        <div class="grid flex-horiz flex-center-all"
             v-for="grid in row"
             :class="gridClass(grid)"
             @contextmenu.prevent=""
             @mousedown.prevent.stop="onMouseDown($event,grid)"
             @mouseup.prevent.stop="onMouseUp($event,grid)"
        >
          <div class="" v-show="grid.status === 1 || grid.status === 3">
            <i class="iconfont icon-bug-fill" v-if="grid.isBoom"></i>
            <span v-else-if="grid.number > 0" class="grid-number"
                  :style="{color: NumberColors[grid.number-1]}">{{ grid.number }}</span>
            <i v-else class="iconfont icon-checkbox-blank-line color-border-light"></i>
          </div>
          <i v-show="grid.status === 2"
             class="iconfont icon-flag--fill"
             style="color: #960000"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, watch} from "vue";
import {getRandomInArray} from "../../utils/array.util";

class Grid {
  constructor(row, col, number = 0) {
    this.row = row;
    this.col = col;
    this.number = 0;
  }

  number = 0;
  isBoom = false;
  // 0 未打开 ， 1 被打开， 2 插旗, 3 中招点
  status = 0;
  row = 0;
  col = 0;
  focusRound = false;
}

const NumberColors = ["#0000FF", "#008000", "#FF0000", "#000080", "#800000", "#008080", "#000000", "#808080"];
const Dirs = [[0, 1], [0, -1], [1, 0], [-1, 0], [-1, -1], [-1, 1], [1, 1], [1, -1]];

export default defineComponent({
  name: "mine-sweeping",
  components: {},
  props: {},
  setup: function (props: any) {
    const mouseDown = [false, false, false], mouseUpTime = [0, 0, 0];
    const openCount = ref(0), flagCount = ref(0);
    const levels = [
      {label: "简单", value: 1, row: 9, col: 9, boom: 10},
      {label: "正常", value: 2, row: 16, col: 16, boom: 40},
      {label: "困难", value: 3, row: 16, col: 30, boom: 99},
      {label: "自定义", value: 4, row: 20, col: 20, boom: 50},
    ];
    const nowLevelValue = ref(2);
    const nowLevel = ref(levels.find(l => l.value === nowLevelValue.value));
    // 1 准备开始， 2 游戏中， 3 赢了  4 输了
    const gameState = ref(1);

    watch(nowLevelValue, (v) => {
      gameOver(false);
      nowLevel.value = levels.find(l => l.value === v);
    })

    const createNewMap = () => {
      const {row, col, boom} = nowLevel.value;
      const map = Array(row).fill('').map((r, row) => Array(col).fill('').map((c, col) => new Grid(row, col)));
      getRandomInArray(
          Array(row * col).fill('').map((x, i) => [Math.floor(i / col), i % col]), boom
      ).forEach(([r, c]) => map[r][c].isBoom = true);
      return map;
    }

    const map = ref(createNewMap());

    const restart = async () => {
      gameState.value = 2;
      openCount.value = 0;
      flagCount.value = 0;
      map.value = createNewMap();
      map.value.forEach(row => row.forEach(g => {
        if (g.isBoom) return;
        forEachAround(g, grid => g.number += grid.isBoom ? 1 : 0);
      }))
    }

    const forEachAround = (grid: Grid, callback) => {
      const {row, col} = grid;
      for (let i = 0; i < Dirs.length; i++) {
        const [dr, dc] = Dirs[i];
        const nr = row + dr, nc = col + dc;
        if (inBoundary(nr, nc)) callback && callback(map.value[nr][nc]);
      }
    }

    const inBoundary = (row, col) => {
      const {row: mRow, col: mCol} = nowLevel.value;
      return row >= 0 && row < mRow && col >= 0 && col < mCol;
    }

    const gameOver = (grid = undefined) => {
      map.value.forEach(row => row.forEach(grid => grid.status = grid.status || 1));
      if (grid === undefined) return gameState.value = 3;
      gameState.value = 4;
      if (grid) grid.status = 3;
    }

    const openMine = (grids) => {
      const pushed = new Set<Grid>();
      for (const g of grids) {
        if (g.status !== 0) continue;
        g.status = 1;
        openCount.value++;
        if (g.isBoom) return gameOver(g);
        if (openCount.value + nowLevel.value.boom === nowLevel.value.row * nowLevel.value.col) return gameOver();
        if (g.number > 0) continue;
        forEachAround(g, grid => {
          if (grid.status !== 0) return;
          if (pushed.has(grid)) return;
          pushed.add(grid);
        })
      }
      setTimeout(openMine.bind(this, pushed), 20);
    }

    const leftClick = (grid: Grid) => {
      openMine([grid]);
      startTimer();
    }

    const rightClick = (grid: Grid) => {
      if (grid.status === 0) {
        grid.status = 2;
        flagCount.value++;
      } else if (grid.status === 2) {
        grid.status = 0;
        flagCount.value--;
      }
    }

    const doubleClick = (grid: Grid) => {
      if (grid.status !== 1 && grid.number === 0) return;
      let flagCount = 0, grids = [];
      forEachAround(grid, g => {
        flagCount += g.status === 2 ? 1 : 0;
        if (g.status === 0) grids.push(g);
      });
      if (flagCount === grid.number) openMine(grids);
    }

    const doubleDown = (grid) => {
      forEachAround(grid, g => {
        g.focusRound = mouseDown[0] && mouseDown[2];
      })
    }

    let timer, startTime = 0;
    const timeDisplay = ref("0.000".padStart(8, '0'));
    const startTimer = () => {
      clearTimeout(timer);
      if (gameState.value !== 2) {
        startTime = 0;
        return;
      }
      if (startTime === 0) startTime = new Date().getTime();
      const t = (new Date().getTime() - startTime) / 1000;
      timeDisplay.value = t.toFixed(3).padStart(8, '0');
      timer = setTimeout(startTimer, 1);
    }

    return {
      map, NumberColors, gameState, levels, nowLevelValue, nowLevel,
      openCount, flagCount, timeDisplay,

      restart, gameOver,
      onMouseUp: (e, grid) => {
        if (gameState.value !== 2) return;
        mouseDown[e.button] = false;
        doubleDown(grid);
        mouseUpTime[e.button] = new Date().getTime();
        if (mouseDown[0] || mouseDown[2]) return;
        if (Math.abs(mouseUpTime[0] - mouseUpTime[2]) < 100) return doubleClick(grid);
        if (e.button === 0) return leftClick(grid);
        if (e.button === 2) return rightClick(grid);
      },
      onMouseDown: (e, grid) => {
        if (gameState.value !== 2) return;
        mouseDown[e.button] = true;
        doubleDown(grid);
      },
      gridClass: (grid) => ([
        grid.status === 3 ? 'game-over' : '',
        grid.focusRound && grid.status === 0 ? 'focus' : '',
        grid.status === 1 ? 'active' : '',
      ])
    }
  }
})


</script>

<style lang="less" scoped>
.mine-sweeping {
}

.grid-container {
  border: 3px solid #cccccc;
  padding: 1.5px;
}

.grid {
  .grid-number {
    font-family: "Fixedsys", "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif !important;
  }

  height: 25px;
  width: 25px;
  margin: .5px;
  color: #222222;
  font-weight: bold;
  font-size: 18px;

  &.active {
    border: 1px solid #eaeaea;
  }

  &:not(.active) {
    border: 1px solid #e8e8e8;
    background-color: #ececec;
  }

  &.game-over {
    background-color: #e85656;
  }

  &.focus {
    background-color: #cecece;
  }
}
</style>
