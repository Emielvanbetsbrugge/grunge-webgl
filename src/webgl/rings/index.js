import * as THREE from 'three';

const createGeometry = (innerWidth, depth, y) => {
  console.log(y);
  const geometry = new THREE.RingGeometry(innerWidth, innerWidth + 4, 120);
  const material = new THREE.MeshBasicMaterial({color: "#fff", side: THREE.DoubleSide});
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.y = y;
  mesh.position.z = depth;
  return mesh;
}

export const makeRings = () => {
  const meshes = [];
  const totalShapes = 100;
  const totalTranslate = 0;
  // let previousDeduction = 0;

  for(let i = 0; i < totalShapes; i++) {
    /* 
     * So... what we're looking for right now is a way to fit the y between 2 values. 
     * What could these values be? Right now they're between 0 & -760.
     * I think I'll need a value to go between, 
     * i becomes the value between numbers
    */ 

    // const percentageDone = i - totalShapes;
    const percentage = (i * 100) / totalShapes;
    // working some way
    meshes[i] = createGeometry(70, 100 - 60 * i, totalTranslate - i * (1 * percentage));

    // let's set a base and deduct a value off of that, let's increase that value, from the previous + an extra for each layer

    // middle of the screen - previous deduction - (max deduction * percentage of items drawn)

    // const percentage = (i * 100) / totalShapes;
    // const base = 0;
    // const maxDeduction = 20;

    // const y = base - previousDeduction - (maxDeduction * percentage);
    
    // console.log(base, previousDeduction, maxDeduction, percentage);
    // meshes[i] = createGeometry(70, 100 - 100 * i, y);
    // previousDeduction = y;
  }
  return meshes;
}