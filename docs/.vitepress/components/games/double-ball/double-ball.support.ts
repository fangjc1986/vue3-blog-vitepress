import { ref } from "vue";

/**
 * 红球，篮球基类
 */
export class Ball {
  // 球的颜色
  color: "red" | "blue";
  // 球的号码
  number: number;
  // 是否被选中
  checked: boolean = false;

  constructor(color: "red" | "blue", number: number) {
    this.color = color;
    this.number = number;
  }
}

/**
 * 中奖条件与奖金
 */
export const wins = [
  {
    name: "一等奖",
    balls: [[6, 1]],
    prize: 5_000_000,
  },
  {
    name: "二等奖",
    balls: [[6, 0]],
    prize: 1_000_000,
  },
  {
    name: "三等奖",
    balls: [[5, 1]],
    prize: 3000,
  },
  {
    name: "四等奖",
    balls: [
      [5, 0],
      [4, 1],
    ],
    prize: 200,
  },
  {
    name: "五等奖",
    balls: [
      [4, 0],
      [3, 1],
    ],
    prize: 10,
  },
  {
    name: "六等奖",
    balls: [
      [2, 1],
      [1, 1],
    ],
    prize: 5,
  },
];

/**
 * 一注彩票
 */
export class Ticket {
  // 红球
  redBalls: Ball[];
  // 蓝球
  blueBalls: Ball[];
  // 红球号码
  redNums: number[];
  // 蓝球号码
  blueNums: number[];
  // 注数
  qty: number;
  // 单注价格
  price: number = 2;
  // 总价格
  totalPrice: number = 0;
  // 是否复式
  isComplex: boolean = false;
  // 是否有效
  isValid: boolean = true;
  // 是否中奖 -2 未开奖 -1 未中奖 0 一等奖 1 二等奖 2 三等奖 3 四等奖 4 五等奖 5 六等奖
  win: number = -2;
  // 中奖金额
  winPrize: number = 0;
  // 中一等奖概率
  probability: number = 0;

  /**
   * 获取所有球
   */
  getBalls() {
    return this.redBalls.concat(this.blueBalls);
  }

  /**
   * 刷新单价、总价以及是否复式
   */
  refresh() {
    if (this.redBalls.length < 6 || this.blueBalls.length < 1) {
      this.isValid = false;
      this.price = 0;
      this.totalPrice = 0;
      return;
    }
    this.isValid = true;
    this.isComplex = this.redBalls.length > 6 || this.blueBalls.length > 1;
    this.price = this.isComplex
      ? combination(this.redBalls.length, 6) * this.blueBalls.length * 2
      : 2;
    this.totalPrice = this.price * this.qty;
    this.probability = probability(this.redBalls.length, this.blueBalls.length);
  }

  /**
   * 计算中奖情况
   */
  computeWin(ticket: Ticket) {
    const redWinCount = this.redBalls.filter(b => ticket.redBalls.includes(b)).length;
    const blueWinCount = this.blueBalls.filter(b => ticket.blueBalls.includes(b)).length;
    const winCount = [redWinCount, blueWinCount];
    this.win = wins.findIndex(w => w.balls.some(b => b.every((c, i) => c === winCount[i])));
    this.winPrize = this.win === -1 ? 0 : wins[this.win].prize * this.qty;
    return this.win;
  }

  /**
   * 克隆一注
   */
  clone() {
    return new Ticket(
      this.redBalls.map(b => b),
      this.blueBalls.map(b => b),
      this.qty
    );
  }

  constructor(redBalls: Ball[], blueBalls: Ball[], qty: number = 1) {
    this.redBalls = redBalls;
    this.blueBalls = blueBalls;
    this.redNums = redBalls.map(b => b.number);
    this.blueNums = blueBalls.map(b => b.number);
    this.qty = qty;
    this.refresh();
  }
}

/**
 * 结果
 */
export class DoubleResult {
  // 中奖号码
  ticket: Ticket;
  // 中奖情况 [一等奖，二等奖...]
  winCounts = [0, 0, 0, 0, 0, 0];
  // 中奖金额 [一等奖，二等奖...]
  winPrizes: number[] = [0, 0, 0, 0, 0, 0];
  // 中奖总金额
  winTotalPrize: number = 0;
  // 开奖期号
  sort: number;
}

// 开奖状态 wait: 等待开奖, opening: 正在开奖, opened: 已开奖
export declare type Status = "wait" | "opening" | "opened";

/**
 * 开奖结果
 */
export class OpenedResult {
  constructor() {
    this.results = [];
  }
  results: DoubleResult[];
  winCounts: number[] = [0, 0, 0, 0, 0, 0];
  winPrizes: number[] = [0, 0, 0, 0, 0, 0];
  winTotalPrize = 0;

  /**
   * 添加一条开奖结果
   * 仅保留最后100条
   * 更新中奖次数和中奖金额
   * @param result 开奖结果
   */
  addResult(result: DoubleResult) {
    if (this.results.length >= 100) {
      this.results.shift();
    }
    this.results.push(result);
    for (let i = 0; i < 6; i++) {
      this.winCounts[i] += result.winCounts[i];
      this.winPrizes[i] += result.winPrizes[i];
      this.winTotalPrize += result.winPrizes[i];
    }
  }
}

/**
 * 选中的彩票
 * 带有总金额
 */
export class SelectedTickets {
  tickets: Ticket[] = [];
  cost: number = 0;

  /**
   * 添加彩票
   * @param tickets 彩票
   */
  addTickets(tickets: Ticket[]) {
    this.tickets.push(...tickets);
    this.cost += tickets.reduce((p, c) => p + c.totalPrice, 0);
  }

  /**
   * 移除彩票
   * @param tickets 彩票
   */
  removeTickets(tickets: Ticket[]) {
    this.tickets = this.tickets.filter(t => !tickets.includes(t));
    this.cost -= tickets.reduce((p, c) => p + c.totalPrice, 0);
  }
}

/**
 * 在 n 个球中选 m 个球的组合数
 * @param n
 * @param m
 */
export const combination = (n: number, m: number): number => {
  return factorial(n, n - m + 1) / factorial(m);
};

/**
 * 阶乘
 * @param n 阶乘数
 * @param min 最小值 默认为 0
 */
export const factorial = (n: number, min = 0): number => {
  if (n === 0 || n < min) return 1;
  return n * factorial(n - 1, min);
};

/**
 * 计算中奖概率
 * @param red 红球数量
 * @param blue 蓝球数量
 */
export const probability = (red: number, blue: number): number => {
  return ((combination(red, 6) / combination(33, 6)) * blue) / 16;
};
