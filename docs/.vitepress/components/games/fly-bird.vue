<template>
  <div
    class="fly-bird flex-horiz flex-column flex-center-all pos-r w100p"
    onselectstart="return false"
  >
    <a-space class="pb-sm">
      <a-select v-model="selectedBird" :options="birds" style="width: 150px">
        <template #prefix> 选择小鸟 </template>
      </a-select>
    </a-space>
    <div class="pos-r">
      <div
        ref="screenRef"
        class="mar-center pos-r"
        style="width: 800px; height: 480px"
        @click="clickBird"
      ></div>
      <div class="pos-a score">{{ score }}</div>
      <start-over-mask :status="status" @on-click-start="start">
        得分：{{ score }}
      </start-over-mask>
    </div>
  </div>
</template>

<!--
 * Created by Eric.Fang
 * Create Time : 2022/12/22
 * IDE : WebStorm
-->
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "fly-bird",
});
</script>

<script setup>
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { onMounted, ref, watch } from "vue";
import StartOverMask from "../common/start-over-mask.vue";
import { GameStatus } from "../../utils/enum.util";

const screenRef = ref();
const [sw, sh, distance] = [800, 480, 300];
const score = ref(0);
const fbxLoader = new FBXLoader();
const textureLoader = new THREE.TextureLoader();
let [startTime, gameTime] = [0, 0];
const status = ref(GameStatus.wait);

const camera = new THREE.PerspectiveCamera(75, sw / sh, 0.001, 10000);
const renderer = new THREE.WebGLRenderer({
  logarithmicDepthBuffer: true,
  antialias: true,
  alpha: true,
});
renderer.shadowMap.enabled = true;
const scene = new THREE.Scene();
renderer.setSize(sw, sh);
renderer.setClearColor(0x159aff, 1);

camera.position.set(-1200, 300, 800); //设置相机位置
camera.lookAt(0, 0, 600);

// const orbitController = new OrbitControls(camera, renderer.domElement);
let bird = null;

const birds = [
  { label: "大红", value: "big-red,Mesh1" },
  { label: "小黑", value: "small-black,Mesh1" },
  { label: "小白", value: "small-white,Mesh2" },
  { label: "小黄", value: "small-yellow,Mesh2" },
  { label: "小蓝", value: "small-blue,Mesh2" },
  { label: "大嘴", value: "big-mouth,Mesh2" },
  { label: "小猪", value: "small-pig,none" },
];
const selectedBird = ref(birds[0].value);
watch(selectedBird, () => {
  gameOver();
});

scene.add(new THREE.AmbientLight(0xcccccc));
const dirLight = new THREE.DirectionalLight(0x444444);
dirLight.position.set(2000, 4000, 2000);
scene.add(dirLight);
const dirLight2 = new THREE.DirectionalLight(0x444444, 0.5);
dirLight2.position.set(10, -10, -10);
scene.add(dirLight2);

dirLight.castShadow = true;

dirLight.shadow.camera.left = -2000;
dirLight.shadow.camera.right = 2000;
dirLight.shadow.camera.top = 2000;
dirLight.shadow.camera.bottom = -2000;
dirLight.shadow.mapSize.width = 1024;
dirLight.shadow.mapSize.height = 1024;

// const directionalLightCameraHelper = new THREE.CameraHelper(dirLight.shadow.camera);
// scene.add(directionalLightCameraHelper);

dirLight.shadow.camera.far = 10000;
dirLight.shadow.bias = -0.001;
// //定义阴影贴图类型 减少马赛克阴影
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const reloadBird = () =>
  new Promise(resolve => {
    scene.remove(bird);
    const [path, mesh] = birds.find(b => b.value === selectedBird.value).value.split(",");
    fbxLoader.load(`/bird-3d/${path}/${path}.fbx`, obj => {
      bird = obj;
      bird.castShadow = true;
      bird.receiveShadow = true;
      bird.scale.set(0.04, 0.04, 0.04);
      scene.add(bird);
      if (mesh === "none") return resolve(true);
      textureLoader.load(`/bird-3d/${path}/${path}.jpg`, tx => {
        bird.traverse(obj => {
          obj.castShadow = true;
          obj.receiveShadow = true;
          if (obj.name === mesh) {
            obj.material = new THREE.MeshPhongMaterial({
              map: tx,
            });
            resolve(true);
          }
        });
      });
    });
  });

let [a, v0, t0, s, V0, s0, tb, bb] = [-0.007, 0, 0, 0, 1.5, 0, 800, -1200];
const computeBirdPosition = () => {
  const t = new Date().getTime() - t0;
  s = (a * t * t) / 2 + v0 * t + s0;
  const v = v0 + a * t;
  bird.rotation.x = Math.min(((v - V0) / (-V0 * 2)) * Math.PI - Math.PI / 2, Math.PI / 2);
  bird.position.y = Math.min(tb, Math.max(bb, s));
};

let [pillars, pw, pg, pd, pv, ps, ph] = [[], 340, 480, 860, 0.4, 3000, 3000];

const renderPillars = () => {
  const birdDistance = pv * gameTime,
    pn = Math.floor(birdDistance / pd);
  score.value = Math.max(Math.floor((birdDistance - ps + pw + 60) / pd), 0);
  if (pn < 0) return;
  let n = -1;
  pillars.forEach(p => {
    n = p[0];
    p[1].position.z = p[2].position.z = n * pd + ps - birdDistance + pw / 2;
  });
  if (n !== pn) {
    const g = Math.random() * (tb - bb - pg) + bb + pg / 2;
    pillars.push([pn, ...createPillar(g, pn * pd + ps - birdDistance + pw / 2)]);
  }
  pillars = pillars.filter(p => {
    if (p[1].position.z < -5000) {
      scene.remove(p[1]);
      scene.remove(p[2]);
      return false;
    }
    return true;
  });
};

const checkCrash = () => {
  const birdDistance = pv * gameTime,
    pn = Math.floor((birdDistance - ps) / pd),
    y = (birdDistance - ps) % pd;
  if (y > pw || pn < 0) return false;
  const p = pillars.find(p => p[0] === pn);
  if (!p) return false;
  return (
    bird.position.y < p[2].position.y + ph / 2 + 60 ||
    bird.position.y > p[2].position.y + ph / 2 + pg - 60
  );
};

const createPillar = (g, pn) => {
  const h = ph;
  const pillarTop = new THREE.Mesh(
    new THREE.BoxGeometry(pw, h, pw),
    new THREE.MeshLambertMaterial({ color: 0xffffff })
  );
  const pillarBottom = new THREE.Mesh(
    new THREE.BoxGeometry(pw, h, pw),
    new THREE.MeshLambertMaterial({ color: 0xffffff })
  );
  scene.add(pillarTop, pillarBottom);
  pillarTop.position.y = pg / 2 + g + h / 2;
  pillarBottom.position.y = -pg / 2 + g - h / 2;
  pillarTop.position.z = pillarBottom.position.z = pn;
  pillarTop.receiveShadow = true;
  pillarBottom.receiveShadow = true;
  pillarTop.castShadow = true;
  pillarBottom.castShadow = true;
  return [pillarTop, pillarBottom];
};

const gameOver = () => {
  status.value = GameStatus.over;
};

const clearPillars = () => {
  scene.remove(bird);
  pillars.forEach(p => {
    scene.remove(p[1]);
    scene.remove(p[2]);
  });
  pillars = [];
};

const clickBird = e => {
  e.preventDefault();
  v0 = V0;
  s0 = bird.position.y;
  t0 = new Date().getTime();
};

const start = async () => {
  clearPillars();
  await reloadBird();
  status.value = GameStatus.gaming;
  bird.position.y = 0;
  startTime = new Date().getTime();
  t0 = new Date().getTime();
};

const runtime = () => {
  if (status.value !== GameStatus.gaming) return;
  gameTime = new Date().getTime() - startTime;
  renderPillars();
  computeBirdPosition();
  if (checkCrash()) return gameOver();
};

onMounted(() => {
  screenRef.value.appendChild(renderer.domElement);
  render();
});

const render = () => {
  runtime();
  requestAnimationFrame(render);
  renderer.render(scene, camera);
};

// script end
</script>

<style lang="less" scoped>
.fly-bird {
}
.score {
  height: 40px;
  width: 70px;
  background-color: #fff;
  top: 10px;
  right: 10px;
  border-radius: 5px;
  border: 5px solid #fff;
  text-align: center;
  line-height: 30px;
  font-size: 18px;
  font-weight: bold;
  color: #1a1a1a;
}
</style>
