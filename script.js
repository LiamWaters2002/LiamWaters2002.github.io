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
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setClearColor(0x000000, 0);
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('renderObject').appendChild(renderer.domElement);

//Load the model
const loader = new GLTFLoader();
loader.load("./animations/LiamWatersAnimation.gltf", function (gltf) {

  const camera = gltf.cameras[0];
  const objectToFocus = gltf.scene.getObjectByName('W');


// create a bezier curve - switch x and y for blender coords...
var curve = new THREE.CubicBezierCurve3(
new THREE.Vector3(16.30502, -12.2077, -292.602),
new THREE.Vector3(-386.266, -12.2077, 90.032),
new THREE.Vector3(16.30502, -12.2077, 512.538),
new THREE.Vector3(418.876, -12.2077, 90.032)
);

  // create a geometry from the curve
  var geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(50));

  // create a material for the curve
  var material = new THREE.LineBasicMaterial({color: 0xff0000});

  // create a line from the geometry and material
  var line = new THREE.Line(geometry, material);

  // add the line to the scene
  scene.add(line);

  // set the initial position of the camera
  camera.position.set(-193.133, -12.2077, -45.016,);

  // create a variable to store the current point on the curve
  var t = 0;


  console.log(camera);
  console.log(gltf.scene);

  const light = new THREE.AmbientLight( 0x404040 ); // soft white light
  scene.add( light );

  scene.add(gltf.scene);

  function animate() {
    requestAnimationFrame(animate);

     // update the position of the camera based on the curve point at t
  camera.position.copy(curve.getPointAt(t));

  // update the direction of the camera to look at an object in the scene
  camera.lookAt(objectToFocus.position);

  // increment t by a small amount
  t += 0.001;

  // wrap t around if it exceeds 1
  if (t > 1) t = 0;

    renderer.render(scene, camera);
  }
  animate();
});