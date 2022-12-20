<template>
  <div class="tetris flex-horiz flex-center-all">
    <div class="flex-horiz container pos-r">
      <start-over-mask
          :status="gameStatus"
          @on-click-start="startGame"
      >
        <span class="font-bold" style="font-size: 20px;"> {{ score }} 分</span>
      </start-over-mask>
      <div class="game-container pos-r">
        <div class="grid-row flex-horiz" v-for=" row in grids">
          <div class="grid border-box" v-for="grid in row "
               :class="grid.status !== 0 ? 'active' : '' "
          ></div>
        </div>
      </div>
      <div class="candidate-container  ml-sm" style="width: 100px;">
        <div class="mb-xs">
          <n-tag>SCORE</n-tag>
        </div>
        <div style="font-size: 26px;">{{ score }}</div>
        <div class="mb-xs mt-md">
          <n-tag>NEXT</n-tag>
        </div>
        <div class="game-container disp-ib" v-if="nextBlock">
          <div class="grid-row flex-horiz" v-for="row in nextBlock">
            <div class="grid border-box" v-for="v in row"
                 :class="v ? 'active' : '' "
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref, onMounted, onBeforeUnmount} from "vue";
import _ from "lodash";
import {getRandomInArray} from "../../utils/array.util";
import {getRandomInteger} from "../../utils/number.util";
import StartOverMask from "../common/start-over-mask.vue";

const ROW = 20, COL = 10;

class Grid {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }

  row: number;
  col: number;
  // 0 没有， 1 占用, 2 已安置
  status: number = 0;

}

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

export default defineComponent({
  name: "tetris",
  components: {StartOverMask},
  props: {},
  setup(props: any, ctx: any) {

    const createMap = (): Grid[][] => new Array(ROW).fill(null).map((row, r) => new Array(COL).fill(null).map((_, c) => new Grid(r, c)));
    const grids = ref(createMap());
    // 1 准备开始， 2 游戏中， 3 赢了  4 输了
    const gameStatus = ref(0);
    const rotateBlock = (block, count = 1) => {
      let blk = _.cloneDeep(block), res = undefined;
      while (count-- > 0) {
        const r = blk.length, c = blk[0].length;
        res = [];
        for (let i = 0; i < c; i++) {
          res[i] = [];
          for (let j = 0; j < r; j++) {
            res[i][j] = blk[r - j - 1][i];
          }
        }
        blk = _.cloneDeep(res);
      }
      return res || blk;
    }

    const refreshBlockPosition = (block, offsetR, offsetC, status = 1) => {
      for (let i = 0; i < block.length; i++) {
        for (let j = 0; j < block[0].length; j++) {
          const [r, w] = [i + offsetR, j + offsetC], g = grids.value[r][w];
          if (g.status === 2) continue;
          g.status = block[i][j] ? status : g.status;
        }
      }
    }

    const getCenterOffsetC = (block) => Math.floor((COL - block[0].length) / 2);

    const getRandomBlock = () => rotateBlock(getRandomInArray(BLOCKS, 1)[0], getRandomInteger(0, 3));

    const blockPosR = ref(0),
        blockPosC = ref(0),
        block = ref(null),
        nextBlock = ref(null),
        score = ref(0),
        clearLineCount = ref(0),
        interval = computed(() => {
          const k = clearLineCount.value / 20;
          return Math.floor(1500 / (k < 1 ? 1 : k));
        });

    let runtimeTimeout = null, accON = true;

    const checkCrash = (block, offsetR, offsetC) => {
      for (let i = 0; i < block.length; i++) {
        for (let j = 0; j < block[0].length; j++) {
          const [r, c] = [i + offsetR, j + offsetC];
          if (r < 0 || r >= ROW || c < 0 || c >= COL) return true;
          if (block[i][j] && grids.value[r][c].status === 2) return true;
        }
      }
      return false;
    }

    const startGame = () => {
      score.value = 0;
      clearLineCount.value = 0;
      grids.value = createMap();
      block.value = getRandomBlock();
      nextBlock.value = getRandomBlock();
      gameStatus.value = 2;
      blockPosR.value = -1;
      blockPosC.value = getCenterOffsetC(block.value);
      runtimeMain();
    }

    const runtimeMain = () => {
      clearTimeout(runtimeTimeout);
      if (gameStatus.value !== 2) return;
      if (blockPosR.value >= 0) refreshBlockPosition(block.value, blockPosR.value, blockPosC.value, 0);
      blockPosR.value++;
      if (checkCrash(block.value, blockPosR.value, blockPosC.value)) {
        refreshBlockPosition(block.value, blockPosR.value - 1, blockPosC.value, 2);
        if (blockPosR.value <= 1) {
          return gameStatus.value = 3;
        }
        block.value = nextBlock.value;
        nextBlock.value = getRandomBlock();
        blockPosR.value = 0;
        blockPosC.value = getCenterOffsetC(block.value);
        clearLines();
        accON = false;
      }
      refreshBlockPosition(block.value, blockPosR.value, blockPosC.value, 1);
      runtimeTimeout = setTimeout(runtimeMain, interval.value);
    }

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


    onMounted(() => {
      window.addEventListener("keydown", onKeyDown);
      window.addEventListener("keyup", onKeyUp);
    })

    onBeforeUnmount(() => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      clearTimeout(runtimeTimeout);
    })

    const onKeyDown = (e) => {
      const kc = e.keyCode;
      if (gameStatus.value !== 2) return;
      if (kc < 37 || kc > 40) return;
      [
        () => onMoveBlock(-1),
        onRotateBlock,
        () => onMoveBlock(1),
        () => accON && runtimeMain()
      ][kc - 37]();
    }

    const onKeyUp = (e) => accON = true;

    const onMoveBlock = (move) => {
      const newPos = blockPosC.value + move;
      if (checkCrash(block.value, blockPosR.value, newPos)) return;
      refreshBlockPosition(block.value, blockPosR.value, blockPosC.value, 0);
      blockPosC.value += move;
      refreshBlockPosition(block.value, blockPosR.value, blockPosC.value, 1);
    }

    const onRotateBlock = () => {
      const nb = rotateBlock(block.value);
      let npc = blockPosC.value + nb[0].length - 1;
      npc = npc >= COL ? COL - nb[0].length : blockPosC.value;
      if (checkCrash(nb, blockPosR.value, npc)) return;
      refreshBlockPosition(block.value, blockPosR.value, blockPosC.value, 0);
      block.value = nb;
      blockPosC.value = npc;
      refreshBlockPosition(block.value, blockPosR.value, blockPosC.value, 1);
    }

    return {
      ROW, COL, grids, nextBlock, gameStatus, score,

      startGame,
    }
  }
})
</script>

<style lang="less" scoped>
.tetris {
}

.game-container {
  border: 4px solid #b4b4b4;
  padding: 1.5px;
}

.grid {
  @size: 20px;
  height: @size;
  width: @size;
  background-color: #f5f5f5;
  margin: .5px;

  &.active {
    background-color: #575757;
  }
}
</style>
