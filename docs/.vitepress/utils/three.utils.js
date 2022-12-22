const THREE = require("three");
import "./FBXLoader.util";

const loader = new THREE.FBXLoader();

export const loadFBXModule = (modulePath, scale = 1, materialPath = null, materialName = null) => {
    let tp = null;
    if (materialPath !== null) {
        tp = THREE.ImageUtils.loadTexture(materialPath, null, function (t) {});
    }
    return new Promise(resolve => {
        loader.load(modulePath, (fbx) => {
            fbx.scale.set(scale, scale, scale);
            if (materialPath && tp && materialName) {
                fbx.traverse((child) => {
                    if (!child.name.includes(materialName)) return;
                    child.material = new THREE.MeshPhongMaterial({
                        map: tp
                    });
                })
            }
            resolve(fbx);
        })
    })
}

export const computeObjectBoundary = (obj) => {
    return new THREE.Box3().setFromObject(obj);
}
