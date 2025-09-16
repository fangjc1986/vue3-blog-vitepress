/**
 * 生成随机数列表
 * @param min 最小
 * @param max 最大
 * @param len 长度
 */
export const genRandArray = (min: number, max: number, len: number) => {
  const arr: number[] = [];
  for (let i = 0; i < len; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
};

/**
 * 生成随机数池
 */
export class GenRandomFromPool<T> {
  private pool: T[];

  public static toArray = <T>(min: number, max: number) => {
    return new Array(max - min + 1).fill(0).map((_, i) => i + min);
  };

  constructor(pool: T[]) {
    this.pool = pool;
  }

  poll(len: number) {
    const arr: T[] = [];
    while (len > 0 && this.pool.length > 0) {
      const index = Math.floor(Math.random() * this.pool.length);
      arr.push(this.pool.splice(index, 1)[0]);
      len--;
    }
    return arr;
  }
}

/**
 * 交换数组元素
 * 为了保证 VUE 的响应式
 * 使用 splice 替换函数
 * @param arr 目标数组
 * @param p1 位置1
 * @param p2 位置2
 */
export const sortExchangeReact = (arr: number[], p1: number, p2: number) => {
  const temp = arr[p1];
  arr.splice(p1, 1, arr[p2]);
  arr.splice(p2, 1, temp);
};

/**
 * 将 xy 转换为索引
 * @param x
 * @param y
 * @param width
 */
export const xy2index = (x: number, y: number, width: number) => {
  return y * width + x;
};

/**
 * 将索引转换为 xy
 * @param index
 * @param width
 */
export const index2xy = (index: number, width: number) => {
  return [index % width, Math.floor(index / width)];
};

/**
 * 生成矩阵
 * @param w 宽度
 * @param h 高度
 * @param val 默认值
 */
export const genMatrix = <T>(w: number, h: number, val: (x: number, y: number) => T): T[][] => {
  return new Array(h).fill(0).map((_, y) => {
    return new Array(w).fill(0).map((_, x) => {
      return val(x, y);
    });
  });
};
