import * as THREE from "three";
import Experience from "./Experience";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"

export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;

    this.createPerspectiveCamera();
    this.createOrthographicCamera();
    this.setOrbitControls()
  }
  createPerspectiveCamera() {
    this.prespectiveCamera = new THREE.PerspectiveCamera(
      45,
      this.sizes.aspect,
      0.1,
      1000
    );
    this.scene.add(this.prespectiveCamera);
    this.prespectiveCamera.position.z =1.7
    this.prespectiveCamera.position.y =0.75
    this.prespectiveCamera.position.x =2
  }
  createOrthographicCamera() {
    this.frustrum = 5;
    this.orthographicCamera = new THREE.OrthographicCamera(
      (-this.sizes.aspect * this.sizes.frustrum) / 2,
      (this.sizes.aspect * this.sizes.frustrum) / 2,
      this.frustrum / 2,
      -this.frustrum / 2,
      -100,
      100
    );
    this.scene.add(this.orthographicCamera);

    const size = 10;
    const divisions = 10;

    const gridHelper = new THREE.GridHelper( size, divisions );
    // this.scene.add( gridHelper );
    const axesHelper = new THREE.AxesHelper( 10 );
    // this.scene.add( axesHelper );
  }

  setOrbitControls() {
    this.controls = new OrbitControls(this.prespectiveCamera,this.canvas)
    this.controls.enableDamping = true
    this.controls.enableZoom = true
    this.controls.target = new THREE.Vector3(0,1,0)
    this.controls.maxZoom = 1;
    this.controls.minZoom = 0.1;
    this.controls.maxDistance =3;
    this.controls.maxPolarAngle = Math.PI/1.7
    this.controls.minPolarAngle = Math.PI/3;
    this.controls.minAzimuthAngle = 2*Math.PI
    this.controls.minAzimuthAngle = 0.5
    this.controls.maxAzimuthAngle = Math.PI / 2 -0.5
    this.controls.enableKeys = true //older versions
    this.controls.listenToKeyEvents(document.body)
    this.controls.keys = {
        LEFT: "ArrowLeft", //left arrow
        UP: "ArrowUp", // up arrow
        RIGHT: "ArrowRight", // right arrow
        BOTTOM: "ArrowDown" // down arrow
    }
  }

  resize() {// Updating PerspectiveCamera and OrthographicCamera
    this.prespectiveCamera.aspect = this.sizes.aspect;
    this.prespectiveCamera.updateProjectionMatrix();
    this.orthographicCamera.left =
      (-this.sizes.aspect * this.sizes.frustrum) / 2;
    this.orthographicCamera.right =
      (this.sizes.aspect * this.sizes.frustrum) / 2;
    this.orthographicCamera.top = this.frustrum / 2;
    this.orthographicCamera.bottom = -this.frustrum / 2;
    this.orthographicCamera.updateProjectionMatrix();
  }
  update(){
    this.controls.update()
  }
}
