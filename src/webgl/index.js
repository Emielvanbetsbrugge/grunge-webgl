import * as THREE from 'three';
import { makeRings, animateRings } from "./rings";

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 2000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setPixelRatio( window.devicePixelRatio );
document.body.appendChild(renderer.domElement);

camera.position.z = 0;

const rings = makeRings();


export const init = () => {
  rings.map(ring => {
    return scene.add(ring);
  })
}

var animate = function () {
  requestAnimationFrame(animate);
  animateRings(rings);
  renderer.render(scene, camera );
};

animate();
