import * as THREE from '../three/build/three.module.js';
import { GLTFLoader } from '../three/examples/jsm/loaders/GLTFLoader.js';
import { LoopPingPong } from '../three/build/three.module.js';

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setClearColor(0x000000, 0);
renderer.setSize(200, 200);
document.getElementById('renderObject').appendChild(renderer.domElement);

const loader = new GLTFLoader();
loader.load("./animations/newAnimation.gltf", function (gltf) {
  const camera = gltf.cameras[0];
  const objectToFocus = gltf.scene.getObjectByName('W');

  const light = new THREE.AmbientLight(0x404040);
  scene.add(light);

  const animations = gltf.animations;

  // Create an animation mixer
  const mixer = new THREE.AnimationMixer(gltf.scene);
  mixer.timeScale = 1; // Optionally adjust the playback speed of the animation


  // Play all animations with looping
  animations.forEach((animation) => {
    const action = mixer.clipAction(animation);
    action.setLoop(LoopPingPong); // Set the loop mode to ping-pong
    action.clampWhenFinished = true; // Clamp the animation to prevent it from freezing at the end
    action.play();
});

  scene.add(gltf.scene);

  function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    mixer.update(delta); // Update the animation mixer with the time delta
    renderer.render(scene, camera);
  }

  const clock = new THREE.Clock();
  animate();
});
