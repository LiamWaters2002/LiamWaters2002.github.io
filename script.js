import * as THREE from './three/build/three.module.js';

//To import any loaders, go
import {GLTFLoader} from './three/examples/jsm/loaders/GLTFLoader.js';
var TrendingSlider = new Swiper('.trending-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 4,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

const cards = document.querySelectorAll('.swiper-slide');
cards.forEach(card => {
  card.addEventListener('click', () => {
    window.location.href = 'project-page.html';
  });
});


//Scene

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setClearColor(0x000000, 0);
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('renderObject').appendChild(renderer.domElement);

//Load the model
const loader = new GLTFLoader();
loader.load("./animations/LiamWatersAnimation.glb", function (gltf) {

  console.log(gltf.cameras);
  console.log(gltf.scene.children);
  console.log("hello");

  const light = new THREE.AmbientLight( 0x404040 ); // soft white light
  scene.add( light );

  scene.add(gltf.scene);
});
console.log("hello");
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

function animate() {
  requestAnimationFrame(animate);
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();