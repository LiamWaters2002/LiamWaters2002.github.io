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
  
  camera.fov -= 6; // decrease the field of view by 5 degrees
  camera.near = 10;
  camera.updateProjectionMatrix(); // required to apply changes to the camera

  const objectToFocus = gltf.scene.getObjectByName('W');


// create a bezier curve - switch x and y for blender coords...
//Use threejs.org to determine positions
var curve = new THREE.CubicBezierCurve3(
  new THREE.Vector3(0, -12.2077, -300),
  new THREE.Vector3(-400, -12.2077, -600),
  new THREE.Vector3(-400, -12.2077, 800),
  new THREE.Vector3(500.366, -12.2077, 424.684)
);

  // create a geometry from the curve
  var geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(50));

  // create a material for the curve
  var material = new THREE.LineBasicMaterial({color: 0xff0000});

  // create a line from the geometry and material
  var line = new THREE.Curve(geometry);

  // add the line to the scene
  scene.add(line);

  // set the initial position of the camera
  camera.position.set(-193.133, -12.2077, -45.016,);



  console.log(camera);
  console.log(gltf.scene);

  const light = new THREE.AmbientLight( 0x808080 ); // soft white light
  scene.add( light );

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(-80, 0, 0);
  directionalLight.target.position.set(0, 0, 0); // set the position of the object to point towards
  directionalLight.lookAt(objectToFocus.position); // make the light point towards the object
  scene.add(directionalLight);

  scene.add(gltf.scene);

  let leftMovement = false;
  let pointLocation = 0;
  
  function animate() {
      requestAnimationFrame(animate);
      
      camera.position.copy(curve.getPointAt(pointLocation));
      camera.lookAt(objectToFocus.position);
      
      // increment t by a small amount
      if(leftMovement == false){
          pointLocation += 0.001;
      }
      else{
          pointLocation -= 0.001;
      }
      
      if (pointLocation > 0.68){
          leftMovement = true;
      }
      else if (pointLocation < 0){
          leftMovement = false;
      }
      
      renderer.render(scene, camera);
  }
  animate();
});