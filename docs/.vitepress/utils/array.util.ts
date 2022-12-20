import {getRandomInteger} from "./number.util";


export const getRandomInArray = (list = [], n = 1) => {
    if (!list.length) return [];
    const arr = [...list], res = [];
    while (n-- > 0) {
        const r = Math.floor(Math.random() * arr.length);
        res.push(arr.splice(r, 1)[0]);
    }
    return res;
}

export const getRandomRangeInArray = (list = [], len = 1, extend = false): any[] => {
    if (!list.length) return [];
    if (!extend) len = Math.min(len, list.length);
    const ans = [], offset = getRandomInteger(0, list.length - 1);
    for (let i = 0; i < len; i++) {
        ans.push(list[(i + offset) % list.length]);
    }
    return ans;
}
