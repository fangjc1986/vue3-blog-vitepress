<template>
  <div class="five-chess vue-component-container">
    <div class="flex-column flex-center-all">
      <div class="text-center mb-sm pos-r">
        <span class="" v-if="gameState !== 2">等待开始</span>
        <span class="" v-else-if="isAiComputing"> 电脑正在思考中... </span>
        <span class="" v-else> 轮到 您 走了 </span>
      </div>
      <div class=" pos-r">
        <div class="chess-container-b" style="z-index: 0">
          <div class="flex-horiz row-b" v-for="i in RC - 1">
            <div class="flex-horiz grid-b" v-for="j in RC - 1"></div>
          </div>
        </div>
        <div class="pos-a chess-container" style="z-index: 10;">
          <div class="flex-horiz row" v-for="(row, i) in chessState.state">
            <div class="grid flex-horiz flex-center-all" v-for="(chess,j) in row"
                 :class="[lastState.state[i][j] !== chess ? 'active':'', chess === EMPTY ? 'cursor-p' : '' ]"
                 @click="onClickChess(i,j)"
            >
              <div class="chess bg-text"
                   :class="[chess === B ? 'bg-black' : 'bg-white']"
                   v-if="chess !== EMPTY"
              ></div>
            </div>
          </div>
        </div>
        <start-over-mask
            :status="gameState"
            @on-click-start="onClickRestart"
        >
          <div class="mb-sm" style="font-size: 30px;">
            <span v-if="gameState === 3 ">你赢了</span>
            <span v-else-if="gameState=== 4">你输了</span>
            <span v-else-if="gameState === 5">棋逢对手</span>
          </div>
        </start-over-mask>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, getCurrentInstance} from "vue";
import {MaxMinSearch} from "../../utils/ai.util";
import * as _ from "lodash";
import StartOverMask from "../common/start-over-mask.vue";

const DefaultState = () => new Array(RC).fill('').map(r => new Array(RC).fill(EMPTY));
export default defineComponent({
  name: "five-chess",
  components: {StartOverMask},
  props: {},
  setup(props: any, ctx: any) {
    const instance = getCurrentInstance();
    const chessState = ref(new FiveState(DefaultState(), []));
    const gameState = ref(1);
    const lastState = ref(new FiveState(DefaultState(), []));
    const isAiComputing = ref(false);


    const ai = new MaxMinSearch(2)
        .setEvaluateResult(evaluate2)
        .setIsLeafState(isLeafState)
        .setNextLevelState(getNextStates);

    const aiTurn = () => {
      if (gameState.value != 2) return;
      if (!isAiComputing.value) return;
      const best = ai.getBestChoiceByState(_.cloneDeep(chessState.value));
      if (!best) return;
      lastState.value = _.cloneDeep(chessState.value);
      chessState.value = best;
      checkGameOver();
      isAiComputing.value = false;
    }

    const checkGameOver = () => {
      const winner = checkWhoWin(chessState.value);
      if (winner !== EMPTY) {
        gameState.value = winner === 1 ? 3 : 4;
      }
      for (const row of chessState.value.state) {
        for (const c of row) {
          if (c === EMPTY) return;
        }
      }
      gameState.value = 5;
    }

    return {
      W, B, EMPTY, RC, isAiComputing,
      gameState, lastState, chessState,

      onClickChess: (i, j) => {
        const {state, trace} = chessState.value;
        if (gameState.value !== 2) return;
        if (isAiComputing.value || state[i][j] !== EMPTY) return;
        isAiComputing.value = true;
        lastState.value = _.cloneDeep(chessState.value);
        state[i][j] = W;
        trace.push([i, j]);
        checkGameOver();
        setTimeout(aiTurn, 10);
      },
      onClickRestart: () => {
        chessState.value = new FiveState(DefaultState(), []);
        lastState.value = new FiveState(DefaultState(), []);
        gameState.value = 2;
        isAiComputing.value = false;
      },
    }
  }
})


class FiveState {

  constructor(state, trace = [], isAi = true) {
    this.state = state;
    this.trace = trace;
  }

  state: any[];
  trace: any[];
}

const ScoreTable2 = [
  [11111, 100000, 10000],
  [211112, 1000000, 1000],
  [11112, 100000, 100],
  [12111, 100000, 100],
  [11211, 100000, 100],
  [211212, 1000000, 100],
  [21112, 100000, 100],
  [21111, 100000, 100],
  [11121, 100000, 100],
  [212112, 1000000, 100],
  [11122, 100000, 10],
  [22111, 100000, 10],
  [22111, 100000, 10],
  [11122, 100000, 10],
  [11212, 100000, 4],
  [21211, 100000, 4],
  [22112, 100000, 1],
  [21122, 100000, 1]
];

const W = 1, B = 3, EMPTY = 2, RC = 15;

const Rows = [], Columns = [], Slash1 = [], Slash2 = [];

for (let c = 0; c < RC; c++) {
  const line1 = [], line2 = [];
  for (let r = 0; r < RC; r++) {
    line1.push([r, c]);
    line2.push([c, r]);
  }
  Rows.push(line2);
  Columns.push(line1);
}
for (let c = -RC + 1; c < RC; c++) {
  const line1 = [], line2 = [];
  for (let r = 0; r < RC; r++) {
    const j = c + r;
    if (j < 0 || j >= RC) continue;
    line1.push([r, j]);
    line2.push([RC - r - 1, j]);
  }
  Slash1.push(line1);
  Slash2.push(line2);
}

const getLinesByGrid = (x, y) => {
  return [
    Rows[x], Columns[y],
    Slash1[y - x + RC - 1], Slash2[x + y]
  ];
}

const isLeafState = (fiveState) => {
  const winner = checkWhoWin(fiveState);
  return winner !== EMPTY;
}

const checkWhoWin = ({state}) => {
  const lines: any[] = getLinesByState(state);
  let res: any = true;
  for (const line of lines) {
    if (line.length < 5) continue;
    let w = 0, b = 0;
    for (const [x, y] of line) {
      if (state[x][y] === B) {
        b++;
        w = 0;
      } else if (state[x][y] == W) {
        w++;
        b = 0;
      } else w = b = 0;
      if (state[x][y] === EMPTY && res !== EMPTY) res = EMPTY;
      if (b === 5) return B;
      if (w === 5) return W;
    }
  }
  return res;
}

const Flags = [], EvalRange = 6;
for (let i = 0; i <= EvalRange * 2; i++) {
  Flags[i] = 10 ** i;
}

const DIR = [[0, 1], [1, 0], [1, 1], [1, -1]];
const evaluate2 = (fiveState, isAi) => {
  const {state, trace} = fiveState;
  const map = new Array(RC).fill(true).map(_ => new Array(RC).fill(0));
  let score = 0;
  trace.forEach(g => {
    const [x, y] = g, target = state[x][y], res = [];
    DIR.forEach(dir => {
      const s = getEvaluateLineScore(getEvaluateLineByGridDir(state, dir, g, target), isAi, target);
      score += s;
      if (s) res.push(s);
    })
    res.sort();
    for (let i = 0; i < res.length - 1; i++) {
      score += res[i];
    }
  });
  return score;
}

const getEvaluateLineScore = (line, isAi, player) => {
  let score = 0;
  for (const [st, div, sc] of ScoreTable2) {
    let ln = line;
    while (ln != 0) {
      if (ln - st === Math.floor(ln / div) * div) {
        score += sc;
      }
      ln = Math.floor(ln / 10);
    }
    if (score !== 0) break;
  }
  return player === B ? score : -score;
}

const getEvaluateLineByGridDir = (state, dir, grid, target) => {
  let line = 0, [x, y] = grid;
  for (let i = -EvalRange; i <= EvalRange; i++) {
    const [xx, yy] = [x + dir[0] * i, y + dir[1] * i], f = Flags[EvalRange - i];
    if (!inBoundary(xx, yy)) continue;
    if (state[xx][yy] === target) line += f;
    else if (state[xx][yy] === EMPTY) line += 2 * f;
  }
  return line;
}

const getNextStates = function* (isAi, fiveState) {
  const {state, trace} = fiveState;
  let around = [];
  chessForEach(state, c => c !== EMPTY).forEach(g => {
    getAroundGird(state, g[0], g[1]).forEach(g => {
      if (state[g[0]][g[1]] === EMPTY) around.push(g[0] * RC + g[1]);
    })
  });
  around = _.shuffle(_.uniq(around)).map(g => ([Math.floor(g / RC), g % RC]));
  for (const [x, y] of around) {
    state[x][y] = isAi ? B : W;
    trace.push([x, y]);
    yield fiveState;
    state[x][y] = EMPTY;
    trace.pop([x, y]);
    yield fiveState;
  }
}

const getAroundGird = (state, x, y, radius = 2) => {
  const grids = [];
  for (let i = -radius; i <= radius; i++) {
    let r = i + x, c = y;
    if (inBoundary(r, c) && state[r][c] === EMPTY) grids.push([r, c]);
    r = x;
    c = y + i;
    if (inBoundary(r, c) && state[r][c] === EMPTY) grids.push([r, c]);
    r = x + i;
    c = y + i;
    if (inBoundary(r, c) && state[r][c] === EMPTY) grids.push([r, c]);
    r = x + i;
    c = y - i;
    if (inBoundary(r, c) && state[r][c] === EMPTY) grids.push([r, c]);
  }
  return grids;
}

const inBoundary = (x, y) => {
  return x >= 0 && x < RC && y >= 0 && y < RC;
}

const chessForEach = (state, callBack) => {
  if (!state) throw Error(state);
  const grids = [];
  for (let i = 0; i < RC; i++) {
    for (let j = 0; j < RC; j++) {
      const res = callBack ? !!callBack(state[i][j], i, j) : false;
      if (res) grids.push([i, j]);
    }
  }
  return grids;
}

const getLinesByState = (state) => {
  const ops = chessForEach(state, c => c !== EMPTY);
  const lines = new Set();
  ops.forEach(g => {
    getLinesByGrid(g[0], g[1]).forEach(l => lines.add(l));
  });
  return [...lines];
}

</script>

<style lang="less" scoped>
.five-chess {
}

.chess-container-b {
  padding: 15px;
  background-color: #ad978a;

}

.chess-container {
  top: -1px;
  left: -1px;
}

.grid-b, .grid {
  box-sizing: border-box;
  width: 31px;
  height: 31px;

}

.grid {
  &.cursor-p:hover:not(.active) {
    border-color: #e1e1e1;
  }

  border: 1px solid transparent;

  &.active {
    border-color: #ffffff;
  }
}

.row-b:first-of-type {
  .grid-b {
    border-top: 1px solid #313131;
  }
}

.grid-b {
  border-bottom: 1px solid #313131;
  border-right: 1px solid #313131;

  &:first-of-type {
    border-left: 1px solid #313131;
  }
}

.chess {
  height: 89%;
  width: 89%;
  border-radius: 50%;
}

</style>
