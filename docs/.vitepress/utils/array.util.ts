import { getRandomInteger } from "./number.util";

export const getRandomInArray = (list = [], n = 1) => {
  if (!list.length) return [];
  const arr = [...list],
    res = [];
  while (n-- > 0) {
    const r = Math.floor(Math.random() * arr.length);
    res.push(arr.splice(r, 1)[0]);
  }
  return res;
};

export const getRandomRangeInArray = (list = [], len = 1, extend = false): any[] => {
  if (!list.length) return [];
  if (!extend) len = Math.min(len, list.length);
  const ans = [],
    offset = getRandomInteger(0, list.length - 1);
  for (let i = 0; i < len; i++) {
    ans.push(list[(i + offset) % list.length]);
  }
  return ans;
};

// 旧版实现方法

export const randomRange = (start, end) => {
  // @ts-ignore
  return Number.parseInt(Math.random() * (end - start + 1));
};

// @ts-ignore
Array.prototype.getRandom = function (n = null) {
  if (n === null) n = this.length;
  let arr = [...this],
    res = [];
  while (n-- > 0) {
    const r = randomRange(0, arr.length - 1);
    res.push(arr.splice(r, 1)[0]);
  }
  return res;
};

// @ts-ignore
Array.prototype.randomSort = function () {
  const arr = this.getRandom();
  for (let i = 0; i < this.length; i++) {
    this[i] = arr[i];
  }
  return this;
};

// @ts-ignore
Array.prototype.getRandomSlice = function (n = null) {
  if (n === null) n = this.length;
  const arr = [];
  const r = randomRange(0, this.length - 1);
  for (let i = 0; i < n; i++) {
    arr.push(this[(r + i) % this.length]);
  }
  return arr;
};

// @ts-ignore
Array.prototype.createNatureNumber = function (num, start = 1) {
  return new Array(num).fill(null).map((x, i) => i + start);
};

// @ts-ignore
Array.prototype.isSame = function (arr = []) {
  if (this.length !== arr.length) return false;
  const s = new Set(this.concat(arr));
  return s.size === this.length && s.size === arr.length;
};

// @ts-ignore
Array.prototype.eachOneByOne = function (arr, cb = null, self = true) {
  const res = self ? this : [];
  for (let i = 0; i < this.length; i++) {
    res[i] = this[i];
    if (arr.length <= i) continue;
    if (cb) {
      res[i] = cb(this[i], arr[i]);
    }
  }
  return res;
};

// @ts-ignore
Number.prototype.floor = function () {
  return Math.floor(this);
};

// @ts-ignore
Number.prototype.round = function () {
  return Math.round(this);
};

// @ts-ignore
Number.prototype.ceil = function () {
  return Math.ceil(this);
};
