export const directKeyAction = (e, all = null, up = null, down = null, left = null, right = null) => {
    let res = -1;
    if ([87, 38].includes(e.keyCode)) {
        up && up();
        res = 0;
    } else if ([83, 40].includes(e.keyCode)) {
        down && down();
        res = 1;
    } else if ([65, 37].includes(e.keyCode)) {
        left && left();
        res = 2;
    } else if ([68, 39].includes(e.keyCode)) {
        right && right();
        res = 3;
    }
    all && all();
    return res;
}
