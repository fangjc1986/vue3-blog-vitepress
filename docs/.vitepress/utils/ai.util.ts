import * as _ from "lodash";

export class MaxMinSearch {
  static MAX_SCORE = 2 ** 30;
  static MIN_SCORE = -(2 ** 30);
  root: any;
  maxDepth: number;
  getNextLevelState: Function;
  getEvaluateResult: Function;
  isLeafState: (any) => boolean;

  constructor(maxDepth = 5, root: any = null) {
    this.root = root;
    this.maxDepth = maxDepth;
  }

  getBestChoiceByState(
    state,
    isAi = true,
    depth = this.maxDepth,
    alpha = MaxMinSearch.MIN_SCORE,
    beta = MaxMinSearch.MAX_SCORE
  ): any {
    if (depth === 0 || (this.isLeafState ? this.isLeafState(state) : false)) {
      return this.getEvaluateResult(state, isAi);
    }
    let bestScore = isAi ? MaxMinSearch.MIN_SCORE : MaxMinSearch.MAX_SCORE;
    let bestChoice = null;
    const nextIt = this.getNextLevelState(isAi, state);
    for (const childState of nextIt) {
      const score = this.getBestChoiceByState(
        childState,
        !isAi,
        depth - 1,
        alpha,
        beta
      );
      if (isAi) {
        if (score > bestScore) {
          bestScore = score;
          if (depth === this.maxDepth) bestChoice = _.cloneDeep(childState);
          alpha = bestScore;
        }
      } else {
        if (score < bestScore) {
          bestScore = score;
          if (depth === this.maxDepth) bestChoice = _.cloneDeep(childState);
          beta = bestScore;
        }
      }
      if (nextIt.next) nextIt.next();
      if (alpha >= beta) break;
    }
    return depth === this.maxDepth ? bestChoice : bestScore;
  }

  setNextLevelState(func) {
    this.getNextLevelState = func;
    return this;
  }

  setEvaluateResult(func) {
    this.getEvaluateResult = func;
    return this;
  }

  setIsLeafState(func) {
    this.isLeafState = func;
    return this;
  }
}
