import { v4 as uuidv4 } from "uuid";
import { computed, ref } from "vue";

/**
 * 常量
 */
export const CONST = {
  // 日期格式
  DATE_FORMAT: "YYYY-MM-DD",
  // 日期时间格式
  DATE_TIME_FORMAT: "YYYY-MM-DD HH:mm:ss",
};

// uuid 生成函数 透传
export const genUid = uuidv4;

/**
 * 一个简易的基于 ref 的状态管理器
 * @param fn 生成 store 的函数
 */
export const genStore = <T>(fn: () => T): (() => T) => {
  const store = fn();
  return () => ({ ...store });
};

/**
 * 一个将时间字符串转换为毫秒数的函数
 * @param str 时间字符串 1s 1m 1h 1d，其他单位不支持
 */
const STR_UNIT_TIME = {
  s: 1000,
  m: 60 * 1000,
  h: 60 * 60 * 1000,
  d: 24 * 60 * 60 * 1000,
};
export const str2ms = (str: string | number): number => {
  if (typeof str === "number") return str;
  const num = Number(str.slice(0, -1));
  const unit = str.slice(-1) as keyof typeof STR_UNIT_TIME;
  if (!["s", "m", "h", "d"].includes(unit)) throw new Error("str2ms: 时间单位必须为 [s,m,h,d])");
  return num * STR_UNIT_TIME[unit];
};

/**
 * 一个简易的 loading 状态管理器
 * @param startDelay 开始 loading 的延迟时间
 * @param endDelay 结束 loading 的延迟时间
 */
export const useLoading = (startDelay = 0, endDelay = 0) => {
  const isLoading = ref(false);
  let startTmo = null;
  let endTmo = null;
  const clearTmo = () => {
    clearTimeout(startTmo);
    clearTimeout(endTmo);
  };
  const startLoading = () => {
    clearTmo();
    startTmo = setTimeout(() => {
      isLoading.value = true;
    }, startDelay);
  };
  const finishLoading = () => {
    clearTmo();
    endTmo = setTimeout(() => {
      isLoading.value = false;
    }, endDelay);
  };
  return { isLoading: computed(() => isLoading.value), startLoading, finishLoading };
};

///////////// debounce 防抖

/**
 * 防抖函数
 * 返回的函数会在 delay 时间内，只执行一次 fn
 * @param fn 要防抖的函数
 * @param delay 防抖时间
 * @returns 防抖函数
 */
export const debounce = (fn: Function, delay = 300) => {
  let tmo = null;
  return (...args: any[]) => {
    clearTimeout(tmo);
    tmo = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const DEBOUNCE_KEY_MAP = new Map<string, any>();
/**
 * 防抖函数，根据 key 来区分
 * 直接调用 debounceKey(key, fn) 会在 delay 时间内，只执行一次 fn
 * @param key 防抖的 key
 * @param fn 要防抖的函数
 * @param delay 防抖时间
 */
export const debounceKey = (key: any, fn: Function, delay = 300) => {
  let tmo = DEBOUNCE_KEY_MAP.get(key);
  if (tmo) clearTimeout(tmo);
  tmo = setTimeout(() => {
    fn();
    DEBOUNCE_KEY_MAP.delete(key);
  }, delay);
  DEBOUNCE_KEY_MAP.set(key, tmo);
};

/**
 * 防抖函数，根据 fn 来区分
 * @param fn 要防抖的函数
 * @param delay 防抖时间
 */
export const debounceRun = (fn: Function, delay = 300) => {
  debounceKey(fn, fn, delay);
};

///////////// throttle 节流

/**
 * 节流函数
 * 返回的函数会在 delay 时间内，只执行一次 fn
 * @param fn 要节流的函数
 * @param delay 节流时间
 * @returns 节流函数
 */
export const throttle = (fn: Function, delay = 300) => {
  let tmo: any;
  return (...args: any[]) => {
    if (tmo) return;
    tmo = setTimeout(() => {
      fn(...args);
      tmo = 0;
    }, delay);
  };
};

const THROTTLE_KEY_MAP = new Map<string, any>();

/**
 * 节流函数，根据 key 来区分
 * 直接调用 fn 时，会立即执行一次
 * @param key 节流的 key
 * @param fn 要节流的函数
 * @param delay 节流时间
 */
export const throttleKey = (key: any, fn: Function, delay = 300) => {
  let tmo = THROTTLE_KEY_MAP.get(key);
  if (tmo) return;
  tmo = setTimeout(() => {
    fn();
    THROTTLE_KEY_MAP.delete(key);
  }, delay);
  THROTTLE_KEY_MAP.set(key, tmo);
};

/**
 * 节流函数，根据 fn 来区分
 * @param fn 要节流的函数
 * @param delay 节流时间
 */
export const throttleRun = (fn: Function, delay = 300) => {
  throttleKey(fn, fn, delay);
};

/**
 * 一个简易的 Promise 错误处理函数
 * @param promise 要处理的 Promise
 */
export const to = async (promise: Promise<any>) => {
  try {
    const res = await promise;
    return [null, res];
  } catch (err) {
    return [err, null];
  }
};

/**
 * 一个简易的 sleep 函数
 * @param time 等待时间 支持字符串：1s 1m 1h 1d，其他单位不支持，数值：毫秒
 * @returns Promise 对象
 */
export const sleep = (time: string | number) => {
  return new Promise(resolve => setTimeout(resolve, str2ms(time)));
};

/**
 * 过滤对象的字段
 * @param map 要过滤的对象
 * @param filter 过滤函数
 */
export const filterFields = (map: object, filter: (k: string, v: any) => boolean) => {
  const res: { [field: string]: any } = {};
  for (const [k, v] of Object.entries(map)) {
    if (filter(k, v)) res[k] = v;
  }
  return res;
};

/**
 * 根据 keys 过滤对象的字段
 * @param map 要过滤的对象
 * @param keys 要过滤的字段
 */
export const filterByFields = (map: object, keys: string[]) => {
  return filterFields(map, k => keys.includes(k));
};

/**
 * 根据 keys 排除对象的字段
 * @param map 要过滤的对象
 * @param values 要排除的字段
 */
export const filterByFieldsExclude = (map: object, values: any[]) =>
  filterFields(map, k => !values.includes(k));

/**
 * 根据 arr 过滤重复的 key 的对象
 * @param arr 要过滤的数组
 * @param key 要过滤的 key
 */
export const uniqueBy = (arr: any[], key: string) => {
  const res = new Map();
  return arr.filter(a => !res.has(a[key]) && res.set(a[key], 1));
};

/**
 * 数组转树
 * @param data 数组
 * @param pid 父级 id
 * @param pidKey  父级 id 的 key
 * @param idKey id 的 key
 * @param childrenKey 子级的 key
 */
export const toTree = (
  data: any[],
  pid: string | number = "0",
  pidKey = "pid",
  idKey = "id",
  childrenKey = "children"
) => {
  const tree = [];
  for (const item of data) {
    if (item[pidKey] === pid) {
      const children = toTree(data, item[idKey], pidKey, idKey, childrenKey);
      if (children.length) item[childrenKey] = children;
      tree.push(item);
    }
  }
  return tree;
};

/**
 * 从树状结构中过滤需要的叶子节点
 *
 * @param tree 树状结构
 * @param filter 过滤函数
 * @param onlyLeaf 是否保留叶子节点
 */
export const filterTree = (tree: any[], filter: (item: any) => boolean, onlyLeaf = true) => {
  const res: any[] = [];
  for (const item of tree) {
    const matched = filter(item);
    const hasChildren = item.children && item.children.length;
    if (!hasChildren && matched) res.push(item);
    else if (!onlyLeaf && matched) {
      res.push({ ...item, children: filterTree(item.children, filter, onlyLeaf) });
    } else if (hasChildren) {
      const children = filterTree(item.children, filter);
      if (children.length) res.push({ ...item, children });
    }
  }
  return res;
};

/**
 * 将数组根据 KEY 转为分组
 *
 * @param arr 数组
 * @param key 分组的 key
 * @param genGroupRow 生成分组行的函数
 */
export const groupBy = (arr: any[], key: string, genGroupRow: Function): any[] => {
  const res = new Map<string, any>();
  for (const item of arr) {
    const k = item[key];
    if (!res.has(k)) {
      const groupRow = genGroupRow(item);
      groupRow.children = [];
      res.set(k, groupRow);
    }
    res.get(k).children.push(item);
  }
  return [...res.values()];
};

/**
 * 数值分割
 * 将 123456 转换为 123,456
 * @param num 数值
 * @param len 分割长度
 * @param delimiter 分隔符
 */
export const numberSplit = (
  num: number | string,
  len: number = 3,
  delimiter: string = ","
): string => {
  let ans = num + "",
    dot = ans.indexOf(".");
  if (dot === -1) dot = ans.length - len;
  else dot -= len;
  while (dot > 0) {
    ans = ans.slice(0, dot) + delimiter + ans.slice(dot);
    dot -= len;
  }
  return ans;
};

/**
 * 数值转换为字节
 * 1024 => 1K
 * 1024 * 1024 => 1M
 * 1024 * 1024 * 1024 => 1G
 * 1024 * 1024 * 1024 * 1024 => 1T
 * @param num 数值
 * @param fixed 保留小数位数
 */
export const toByteString = (num: number, fixed = 2): string => {
  if (!num && num !== 0) return "";
  const unit = ["B", "K", "M", "G", "T"];
  let i = 0;
  while (num > 1024) {
    num /= 1024;
    i++;
  }
  return `${num.toFixed(fixed)}${unit[i]}`;
};
