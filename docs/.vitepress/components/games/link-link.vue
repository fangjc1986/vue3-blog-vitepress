<template>
  <div class="link-link flex-column flex-center-all"
       @contextmenu.prevent="''"
  >
    <div class="flex-column">
      <div class="flex-horiz mb-xs">
        <div class="">
          <n-button type="primary" @click="startGame">重新开始</n-button>
        </div>
        <div class="ml-xs">
          <n-select :options="levelsOptions" v-model:value="level"
                    @update:value="startGame"
          ></n-select>
        </div>
        <div class="flex-grow"></div>
        <div class="">
          <n-tooltip
              placement="top-end"
              trigger="hover"
          >
            <template #trigger>
              <n-switch v-model:value="showColorTitle"></n-switch>
            </template>
            <span>开启后将鼠标停留在色块上，将显示颜色色值。</span>
          </n-tooltip>

        </div>
      </div>
      <div class="game-container">
        <div class="flex-horiz grid-row" v-for="row in map">
          <div class="grid-box" v-for="grid in row"
               :class="gridBoxClass(grid)"
          >
            <div class="grid border-box"
                 :style="gridStyle(grid)"
                 :title="showColorTitle && grid.color ? grid.color : undefined"
                 @mousedown="onMouseDown(grid)"
            >
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {divideColor} from "../../utils/color.util";
import {getRandomRangeInArray} from "../../utils/array.util";
import _ from "lodash";

class Grid {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }

  row: number;
  col: number;
  color: string;
}

export default defineComponent({
  name: "link-link",
  props: {},
  setup(props: any, ctx: any) {
    const ROW = 10, COL = 16, SIZE = ROW * COL, PAIR = 20;
    const DIR = [[1, -1, 0, 0], [0, 0, 1, -1]];
    const level = ref(0);
    const levels: [string, number][] = [
      ['初级', 1],
      ['中级', 3],
      ['高级', 10],
      ['变态', 20],
      ['神仙', 50]
    ]
    const getColors = () => getRandomRangeInArray(divideColor(levels[level.value][1]), PAIR, true);
    const createMap = (): Grid[][] => {
      return new Array(ROW).fill(0).map((_, row) => new Array(COL).fill(0).map((_, col) => {
        return new Grid(row, col);
      }))
    }
    const refreshMapColors = (map: Grid[][]) => {
      const colors = _.shuffle(getColors());
      const pairGrids = _.sampleSize(_.flatten(map), PAIR * 2);
      for (let i = 0; i < PAIR; i++) {
        pairGrids[i * 2].color = pairGrids[i * 2 + 1].color = colors[i];
      }
    }


    const gameStatus = ref(0),
        selectedGrid = ref(null),
        showColorTitle = ref(false);

    const map = ref(createMap());


    const findPath = (start, end) => {
      if (start.color !== end.color) return [];
      const queue = [[start, [start], -1, 0]];
      while (queue.length) {
        const [grid, path, dir, changeC] = queue.shift();
        if (changeC > 3) continue;
        if (grid === end) return path;
        if (grid.color && grid !== start) continue;
        for (let i = 0; i < 4; i++) {
          const rr = grid.row + DIR[0][i], cc = grid.col + DIR[1][i];
          if (rr < 0 || rr >= ROW || cc < 0 || cc >= COL) continue;
          const nextGrid = map.value[rr][cc];
          if (path.find(g => g === nextGrid)) continue;
          queue.push([nextGrid, path.concat([nextGrid]), i, i === dir ? changeC : changeC + 1]);
        }
      }
      return [];
    }

    const startGame = () => {
      map.value = createMap();
      refreshMapColors(map.value);
      gameStatus.value = 2;
    }


    startGame();

    const onMouseDown = grid => {
      if (!grid.color || selectedGrid.value === grid) return;
      if (!selectedGrid.value) return selectedGrid.value = grid;
      const path = findPath(selectedGrid.value, grid);
      if (!path.length) return selectedGrid.value = grid;
      const p = path.slice(1, -1);
      selectedGrid.value.color = grid.color = '';
      selectedGrid.value = null;
      setTimeout(() => path.map(g => g.color = '#e3e3e3'));
      setTimeout(() => path.map(g => g.color = ''), 50);
    }

    return {
      map, level, levels, ROW, COL, SIZE, PAIR, showColorTitle,

      levelsOptions: levels.map((lv, value) => ({label: lv[0], value})),

      onMouseDown, startGame,
      gridStyle: (grid) => ({
        'background-color': grid.color || '#fafafa',
      }),
      gridBoxClass: (grid) => ([
        grid.color ? 'active' : '',
        selectedGrid.value === grid ? 'focus' : '',
      ]),
    }
  }
})
</script>

<style lang="less" scoped>
.link-link {
}

.game-container {
  border: 3px solid #ccc;
  padding: 5px;
}

.grid-box {

  margin: .5px;
  @size: 40px;

  .grid {
    height: @size;
    width: @size;

  }

  &.active .grid {
    cursor: pointer;
  }

  &:not(.active) .grid {
    transition: .6s background-color ease;
  }

  &.focus {
    border: 2px solid #1890ff;
    transform: scale(1.3);

    .grid {
      border: 1px solid #fff;
      height: @size - 4;
      width: @size - 4;
    }
  }
}

</style>
