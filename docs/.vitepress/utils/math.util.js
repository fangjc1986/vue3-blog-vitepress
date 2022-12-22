export const MathUtil = {

    factorial(n) {
        if (n < 1) return 1;
        let res = n;
        while (--n > 0) {
            res *= n;
        }
        return res;
    },

    arrange(n, m) {
        return this.factorial(n) / this.factorial(n - m);
    },

    combine(n, m) {
        return this.arrange(n, m) / this.factorial(m);
    },

    numberAddSep(num, gap = 3, deli = ",") {
        let numStr = num + "", nums = numStr.split(".");
        let res = "";
        nums[0].split("").reverse().forEach((n, i) => {
            res = n + res;
            if ((i + 1) % gap === 0 && i !== nums[0].length - 1) {
                res = deli + res;
            }
        });
        if (nums.length > 1 && nums[1].length) res += "." + nums[1];
        return res;
    },

    simplify(...nums) {
        let numbers = [...nums];
        let min = Math.min(...numbers) + 1;
        loop1: while (--min > 1) {
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] % min) {
                    continue loop1;
                }
            }
            let mm = null;
            numbers = numbers.map(x => {
                const res = Math.round(x / min);
                if (mm === null || mm > res) mm = res;
                return res;
            });
            min = mm + 1;
        }
        return numbers;
    },
}
