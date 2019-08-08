import * as THREE from 'three';
import { makeRings } from "./rings";

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 10000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setPixelRatio( window.devicePixelRatio );
document.body.appendChild(renderer.domElement);

camera.position.z = 200;

export const init = () => {
  const rings = makeRings();
  rings.map(ring => {
    return scene.add(ring);
  })
}

var animate = function () {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
};

animate();
