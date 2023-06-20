import * as THREE from './three/build/three.module.js';

//To import any loaders, go
import {GLTFLoader} from './three/examples/jsm/loaders/GLTFLoader.js';

//Scene

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setClearColor(0x000000, 0);
renderer.antialias = true;
renderer.setPixelRatio(window.devicePixelRatio * 2);
renderer.setSize(500, 500);
document.getElementById('renderAnimatedObject').appendChild(renderer.domElement);

//Load the texture
const textureLoader = new THREE.TextureLoader();

//Load the model
const loader = new GLTFLoader();
loader.load("./animations/LiamWatersAnimation.gltf", function (gltf) {

  const camera = gltf.cameras[0];

  const light = new THREE.AmbientLight( 0x808080 ); // soft white light
  scene.add( light );

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(-80, 0, 0);
  directionalLight.target.position.set(0, 0, 0); // set the position of the object to point towards
  directionalLight.lookAt(objectToFocus.position); // make the light point towards the object
  scene.add(directionalLight);

  scene.add(gltf.scene);
  
  function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
  }
  animate();
});