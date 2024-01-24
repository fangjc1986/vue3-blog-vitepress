const combination = (n, m) => {
  if (m > n) return 0;
  if (m === 0) return 1;
  if (m === 1) return n;
  if (m === n) return 1;
  return combination(n - 1, m - 1) + combination(n - 1, m);
};

console.log(combination(33, 6)); // 10

console.log(1107568 * 16);
