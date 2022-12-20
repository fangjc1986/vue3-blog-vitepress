export const getIntegerLength = (num) => {
    let res = 0;
    while (num != 0) {
        num = Math.floor(num / 10);
        res++;
    }
    return res;
}

export const getRandomInteger = (start = 0, end = 100) => {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}
