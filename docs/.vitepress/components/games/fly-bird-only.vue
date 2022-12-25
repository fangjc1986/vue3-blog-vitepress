<template>
  <div
    class="fly-bird flex-horiz flex-column flex-center-all pos-r w100p"
    onselectstart="return false"
  >
    <div class="pb-sm">
      <n-input-group>
        <n-input-group-label>选择小鸟</n-input-group-label>
        <n-select
          v-model:value="selectedBird"
          :options="birds"
          style="width: 100px"
          @change="$nextTick(reloadBird)"
        >
        </n-select>
        <n-input-group-label>拖动旋转，滚轮缩放</n-input-group-label>
      </n-input-group>
    </div>
    <div class="pos-r">
      <div ref="screenRef" class="mar-center pos-r" style="width: 480px; height: 480px"></div>
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
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GameStatus } from "../../utils/enum.util";

const screenRef = ref();
const [sw, sh, distance] = [480, 480, 300];
const score = ref(0);
const fbxLoader = new FBXLoader();
const textureLoader = new THREE.TextureLoader();
const status = ref(GameStatus.wait);

const camera = new THREE.PerspectiveCamera(75, sw / sh, 0.001, 10000);
const renderer = new THREE.WebGLRenderer({
  logarithmicDepthBuffer: true,
  antialias: true,
  alpha: true,
});
const scene = new THREE.Scene();
renderer.setSize(sw, sh);
renderer.setClearColor(0x159aff, 1);

camera.position.set(-1200, 300, 800); //设置相机位置
camera.lookAt(0, 0, 600);

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

scene.add(new THREE.AmbientLight(0xcccccc));
const directionalLight = new THREE.DirectionalLight(0x444444);
directionalLight.position.set(1000, 1000, 1000);
scene.add(directionalLight);
const dirLight2 = new THREE.DirectionalLight(0x444444);
dirLight2.position.set(10, -10, -10);
scene.add(dirLight2);

const controls = new OrbitControls(camera, renderer.domElement);

const reloadBird = () =>
  new Promise(resolve => {
    scene.remove(bird);
    const [path, mesh] = birds.find(b => b.value === selectedBird.value).value.split(",");
    fbxLoader.load(`/bird-3d/${path}/${path}.fbx`, obj => {
      bird = obj;
      bird.scale.set(0.2, 0.2, 0.2);
      scene.add(bird);
      if (mesh === "none") return resolve(true);
      textureLoader.load(`/bird-3d/${path}/${path}.jpg`, tx => {
        bird.traverse(obj => {
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

reloadBird();

onMounted(() => {
  screenRef.value.appendChild(renderer.domElement);
  render();
});

const render = () => {
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
