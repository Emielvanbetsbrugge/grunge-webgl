import * as THREE from 'three';

const createGeometry = (innerWidth, depth, y) => {
  const geometry = new THREE.RingGeometry(innerWidth, innerWidth + 4, 120);
  const material = new THREE.MeshBasicMaterial({color: 0xffffff, side: THREE.DoubleSide});
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.y = y;
  mesh.position.z = depth;
  return mesh;
}

export const makeRings = () => {
  const meshes = [];
  for(let i = 0; i < 20; i++) {
    meshes[i] = createGeometry(70, 100 - 40 * i, 30);
  }
  return meshes;
}