<template>
  <div class="tic-tac-toe flex-center-all flex-column vue-component-container">
    <div class="mb-sm">轮到 {{ turnUser ? "您" : "AI" }} 走棋</div>
    <div class="bca-border pos-r" style="padding: 5px">
      <div class="row flex-horiz flex-center-all" v-for="(row, i) in chessState">
        <div
          class="item flex-horiz flex-center-all"
          :class="[item === 'O' ? 'color-primary' : 'color-error', item === '' ? 'cursor-p' : '']"
          @click="onClickItem(i, j)"
          v-for="(item, j) in row"
        >
          <i class="iconfont icon-close-line" v-if="item === X"></i>
          <i
            class="iconfont icon-checkbox-blank-circle-line"
            style="font-size: 0.8em"
            v-else-if="item === O"
          ></i>
        </div>
      </div>
      <start-over-mask :status="gameState" @on-click-start="onClickRestart">
        <div class="mb-sm" style="font-size: 30px">
          <span v-if="gameState === 3">你赢了</span>
          <span v-else-if="gameState === 4">你输了</span>
          <span v-else-if="gameState === 5">棋逢对手</span>
        </div>
      </start-over-mask>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, getCurrentInstance, toRaw } from "vue";
import _ from "lodash";
import { MaxMinSearch } from "../../utils/ai.util";
import StartOverMask from "../common/start-over-mask.vue";

export default defineComponent({
  name: "tic-tac-toe",
  components: { StartOverMask },
  props: {},
  setup(props: any) {
    const instance = getCurrentInstance();
    let chessState = ref(new Array(9).fill(""));
    // 1 准备开始, 2 游戏中， 3 玩家赢了， 4 电脑赢了, 5 平局
    const gameState = ref(1);
    const turnUser = ref(true);
    const aiUser = new MaxMinSearch(10)
      .setNextLevelState(getNextLevelState)
      .setIsLeafState(checkWhoWin)
      .setEvaluateResult(evaluate);

    const checkGameOver = () => {
      const win = checkWhoWin(chessState.value);
      if (win === true) return (gameState.value = 5);
      if (win) gameState.value = win === O ? 3 : 4;
      else if (chessState.value.every(v => v !== "")) gameState.value = 5;
    };

    const aiTurn = () => {
      if (gameState.value !== 2) return;
      const best = aiUser.getBestChoiceByState(_.clone(chessState.value));
      if (best == null) return;
      chessState.value = best;
      turnUser.value = true;
      checkGameOver();
    };

    return {
      X,
      O,
      turnUser,
      gameState,

      chessState: computed(() => _.chunk(chessState.value, 3)),
      onClickItem: (i, j) => {
        if (gameState.value !== 2) return;
        const idx = i * 3 + j;
        if (!turnUser.value || chessState.value[idx] != "") return;
        turnUser.value = false;
        chessState.value[idx] = O;
        checkGameOver();
        setTimeout(aiTurn.bind(this), 10);
      },
      onClickRestart: () => {
        chessState.value = new Array(9).fill("");
        gameState.value = 2;
        turnUser.value = _.sample([true, false]);
        if (!turnUser.value) setTimeout(aiTurn.bind(this), 10);
      },
    };
  },
});

const X = "X",
  O = "O",
  EMPTY = "";

const winState = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWin = state => {
  return !!checkWhoWin(state);
};

const checkWhoWin = state => {
  for (const q of [O, X]) {
    if (
      winState.some(line => {
        const rs = line.map(c => state[c]);
        return rs.every(s => s === q);
      })
    )
      return q;
  }
  return !!state.every(s => s !== "");
};

const getNextLevelState = function* (isAi, state) {
  const canMove = state
    .reduce((t, x, i) => {
      if (x === EMPTY) t.push(i);
      return t;
    }, [])
    .sort(() => Math.random() - 0.5);
  for (let i = 0; i < canMove.length; i++) {
    state[canMove[i]] = isAi ? X : O;
    yield state;
    state[canMove[i]] = EMPTY;
    yield state;
  }
};

const evaluate = state => {
  const winner = checkWhoWin(state);
  if (winner === true) return 0;
  if (winner === X) return 10;
  return -10;
};
</script>

<style lang="less" scoped>
.tic-tac-toe {
}

.row {
  &:not(:first-of-type) {
    margin-top: 5px;
  }
  .item {
    border: 1px solid #cccccc;
    height: 80px;
    width: 80px;
    font-weight: bold;
    font-size: 60px;
    line-height: 0;
    &:not(:first-of-type) {
      margin-left: 5px;
    }
  }
}
</style>
