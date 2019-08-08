import * as THREE from 'three';

let direction = 1;
let frames = 0;
const totalShapes = 30;

const createGeometry = (innerWidth, depth, y) => {
  const geometry = new THREE.RingGeometry(innerWidth - 20, (innerWidth - 17), 50);
  const material = new THREE.MeshBasicMaterial({color: "#fff", side: THREE.DoubleSide});
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.y = y;
  mesh.position.z = depth;
  return mesh;
}

export const makeRings = () => {
  const meshes = [];
  
  const yOffset = 10;

  for(let i = 0; i < totalShapes; i++) {
    /* 
     * So... what we're looking for right now is a way to fit the y between 2 values. 
     * What could these values be? Right now they're between 0 & -760.
     * I think I'll need a value to go between, 
     * i becomes the value between numbers
    */ 
    const percentage = (i * 100) / totalShapes;
    // add another value to the percentage to transform the location.
    // meshes[i] = createGeometry(70, 100 - 60 * i, yOffset - i * percentage * -.2);
    meshes[i] = createGeometry(70, 100 - 60 * i, yOffset - (i / 2) * percentage);
  }
  return meshes;
}

const fluctuateValue = (number, max) => {
  if (number === max - 1) {
    direction = -1;
  }

  if(number === 0) {
    direction = 1;
  }
  
  return number + direction;
}

export const animateRings = meshes => {
  frames = fluctuateValue(frames, totalShapes);
  meshes.map((mesh, index) => {
    if (index < frames) {
      mesh.visible = true;
    } else {
      mesh.visible = false;
    }
    return mesh;
  })
}