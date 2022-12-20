export const divideColor = (count = 1) => {
  let colors = [0xff0000, 0x00ff00, 0x0000ff];
  if (count < 2)
    return colors.map((c) => `#${c.toString(16).padStart(6, "0")}`);
  colors.push(colors[0]);
  let res = [];
  for (let i = 0; i < colors.length - 1; i++) {
    const cs = colors[i],
      ce = colors[i + 1],
      rg = (((ce >> 16) & 0xff) - ((cs >> 16) & 0xff)) / count,
      gg = (((ce >> 8) & 0xff) - ((cs >> 8) & 0xff)) / count,
      bg = ((ce & 0xff) - (cs & 0xff)) / count;
    let c = count;
    res.push(colors[i]);
    while (--c > 0) {
      const ls = res[res.length - 1],
        i = count - c;
      res.push(
        (Math.floor(((cs >> 16) & 0xff) + i * rg) << 16) +
          (Math.floor(((cs >> 8) & 0xff) + i * gg) << 8) +
          (Math.floor(((cs >> 0) & 0xff) + i * bg) << 0)
      );
    }
  }
  return res.map((c) => `#${c.toString(16).padStart(6, "0")}`);
};
