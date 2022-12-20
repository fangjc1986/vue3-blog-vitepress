<template>
  <div class="parkour">
    <div class="flex-grow pos-r"
         :style="{width: width + 'px', height: height + 'px'}"
    >
      <canvas ref="canvasRef" :width="width" :height="height"
              style="background-color: #f5f5f5;"
      />
      <start-over-mask
          :status="status"
          @on-click-start="clickStart">
      </start-over-mask>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onBeforeUnmount, onMounted, ref} from "vue";
import StartOverMask from "../common/start-over-mask.vue";
import {getRandomInteger} from "../../utils/number.util";

class Box {
  constructor(w, h) {
    this.width = w;
    this.height = h;
    this.h = 0;
    this.posX = 0;
    this.createTime = new Date().getTime();
  }

  width: number;
  height: number;
  createTime: number;

  posX: number;
  h: number;
}

export default defineComponent({
  name: "parkour",
  components: {StartOverMask},
  props: {},
  setup(props: any) {
    const canvasRef: any = ref("");
    const width = 800, height = 400;

    onMounted(() => {
      window.addEventListener("keydown", keydown);
      window.addEventListener("keyup", keyup);
      ctx = canvasRef.value.getContext('2d');
      ctx.fillStyle = "black";
      ctx.fillRect(0, height - horizonH, width, horizonH);
    })

    onBeforeUnmount(() => {
      window.removeEventListener("keydown", keydown);
      window.removeEventListener("keyup", keyup);
    })


    let runtimeTimeout = null, status = ref(1);
    let ctx = null, spaceDownTime = 0, rightDown = false, leftDown = false;
    let g = -0.005, upV = 0.7, t0 = 0, v0 = 0, s0 = 0;
    let defPlayerX = 100, horizonH = 10, playerSize = 30, roadBlocks: Box[] = [];
    let defSpeed = .2, speed = 0.1, defRunSpeed = .5, runSpeed = 0, frameTime = 0,
        playerBox: Box = new Box(playerSize, playerSize);

    const runtime = () => {
      clearTimeout(runtimeTimeout);
      if (status.value !== 2) return;
      frameTime = new Date().getTime();
      clearCanvas();
      drawPlayer();
      upPlayer();
      createBox();
      renderRoadBlocks();
      runtimeTimeout = setTimeout(runtime, 1);
    }

    const clearCanvas = () => {
      ctx.clearRect(0, 0, width, height - horizonH);
    }

    const drawPlayer = () => {
      const t = frameTime - t0;
      const tc = frameTime - playerBox.createTime;
      playerBox.posX += runSpeed * tc;
      playerBox.posX = Math.max(0, playerBox.posX);
      playerBox.posX = Math.min(width - playerSize, playerBox.posX);
      playerBox.createTime = frameTime;
      playerBox.h = g * t * t / 2 + v0 * t + s0;
      playerBox.h = Math.max(0, playerBox.h);
      ctx.fillStyle = "#1ebabe";
      ctx.fillRect(playerBox.posX, height - playerBox.h - playerSize - horizonH, playerSize, playerSize);
    }

    const getPosByBox = (box) => {
      return height - box.h - box.height - horizonH
    }

    const createBox = () => {
      const last = roadBlocks.length ? roadBlocks[roadBlocks.length - 1] : null;
      if (last == null) {
        const box = new Box(getRandomInteger(20, 50), getRandomInteger(20, 200));
        box.posX = width;
        box.h = 0;
        roadBlocks.push(box);
      } else if (last.posX < width + 100) {
        const box = new Box(getRandomInteger(20, 50), getRandomInteger(20, 200));
        box.posX = last.posX + last.width + getRandomInteger(0, 300);
        box.h = 0;
        roadBlocks.push(box);
      }
    }

    const renderRoadBlocks = () => {
      const filter = [];
      let crash = false;
      for (const box of roadBlocks) {
        if (box.posX < -500) continue;
        ctx.fillStyle = "black";
        const tc = frameTime - box.createTime;
        box.posX = box.posX - speed * tc;
        box.createTime = frameTime;
        ctx.fillRect(box.posX, getPosByBox(box), box.width, box.height);
        filter.push(box);
        if (!crash) crash = checkCrash(playerBox, box);
      }
      if (crash) return gameOver();
      roadBlocks = filter;
    }

    const gameOver = () => {
      status.value = 3;
    }

    const checkCrash = (b1: Box, b2: Box) => {
      const lt1 = [b1.posX, b1.h + b1.height],
          rt1 = [b1.posX + b1.width, b1.h + b1.height],
          lb1 = [b1.posX, b1.h],
          rb1 = [b1.posX + b1.width, b1.h];
      const lt2 = [b2.posX, b2.h + b2.height],
          rt2 = [b2.posX + b2.width, b2.h + b2.height],
          lb2 = [b2.posX, b2.h],
          rb2 = [b2.posX + b2.width, b2.h];
      if (lb1[1] >= lt2[1]) return false;
      if (lb1[0] >= rb2[0]) return false;
      if (lt1[1] <= rb2[1]) return false;
      if (rb1[0] <= lb2[0]) return false;
      return true;
    }

    const upPlayer = () => {
      if (spaceDownTime <= 0 || new Date().getTime() - spaceDownTime > 400) return;
      v0 = upV;
      t0 = new Date().getTime();
      s0 = playerBox.h;
    }

    const keydown = (e) => {
      if ([32, 38, 87].includes(e.keyCode)) return keydownJump();
      if ([39, 68].includes(e.keyCode)) return keydownRight();
      if ([65, 37].includes(e.keyCode)) return keydownLeft();
    }

    const keyup = (e) => {
      if ([32, 38, 87].includes(e.keyCode)) return keyupJump();
      if ([39, 68].includes(e.keyCode)) return keyupRight();
      if ([65, 37].includes(e.keyCode)) return keyupLeft();
    }

    const keydownRight = () => {
      runSpeed = Math.abs(defRunSpeed)
      rightDown = true;
    }
    const keyupRight = () => {
      runSpeed = 0;
      rightDown = false;
    }

    const keydownLeft = () => {
      runSpeed = -Math.abs(defRunSpeed)
      leftDown = true;
    }
    const keyupLeft = () => {
      runSpeed = 0
      leftDown = false;
    }

    const keydownJump = () => {
      if (playerBox.h === 0) spaceDownTime = -1;
      if (playerBox.h !== 0 || spaceDownTime > 0) return;
      spaceDownTime = new Date().getTime();
      upPlayer();
    }

    const keyupJump = () => {
      spaceDownTime = -1;
    }

    return {
      canvasRef, width, height, status,
      clickStart: () => {
        status.value = [0, 2, 3, 2][status.value];
        if (status.value === 2) {
          playerBox = new Box(playerSize, playerSize);
          playerBox.posX = defPlayerX;
          playerBox.h = 0;
          runSpeed = 0;
          speed = defSpeed;
          roadBlocks = [];
          runtime();
        }
      },
    }
  }
})
</script>

<style lang="less" scoped>
.parkour {
}
</style>