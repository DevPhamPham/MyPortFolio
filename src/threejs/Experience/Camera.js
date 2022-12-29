import * as THREE from "three";
import Experience from "./Experience";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;

    // this.objects = []
    // this.raycaster;

    // this.moveForward = false;
    // this.moveBackward = false;
    // this.moveLeft = false;
    // this.moveRight = false;
    // this.canJump = false;
    // this.prevTime = performance.now();
    // this.velocity = new THREE.Vector3();
    // this.direction = new THREE.Vector3();
    // this.vertex = new THREE.Vector3();
    // this.color = new THREE.Color();

    this.createPerspectiveCamera();
    this.createOrthographicCamera();
    this.setOrbitControls();


    // objects

    // const boxGeometry = new THREE.BoxGeometry( 20, 20, 20 ).toNonIndexed();

    // let position = boxGeometry.attributes.position;
    // const colorsBox = [];

    // for ( let i = 0, l = position.count; i < l; i ++ ) {

    //   this.color.setHSL( Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );
    //   colorsBox.push( this.color.r, this.color.g, this.color.b );

    // }

    // boxGeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colorsBox, 3 ) );

    // for ( let i = 0; i < 10; i ++ ) {

    //   const boxMaterial = new THREE.MeshPhongMaterial( { specular: 0xffffff, flatShading: true, vertexColors: true } );
    //   boxMaterial.color.setHSL( Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75 );

    //   const box = new THREE.Mesh( boxGeometry, boxMaterial );
    //   box.position.x = Math.floor( Math.random() * 20 - 10 ) * 20;
    //   box.position.y = Math.floor( Math.random() * 20 ) * 20 + 10;
    //   box.position.z = Math.floor( Math.random() * 20 - 10 ) * 20;

    //   this.scene.add( box );
    //   this.objects.push( box );
    // }
  }
  createPerspectiveCamera() {
    this.prespectiveCamera = new THREE.PerspectiveCamera(
      45,
      this.sizes.aspect,
      0.1,
      1000
    );
    this.scene.add(this.prespectiveCamera);
    this.prespectiveCamera.position.z = 1.7;
    this.prespectiveCamera.position.y = 0.75;
    this.prespectiveCamera.position.x = 2;
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

    const gridHelper = new THREE.GridHelper(size, divisions);
    // this.scene.add( gridHelper );
    const axesHelper = new THREE.AxesHelper(10);
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
    this.controls.minAzimuthAngle = 0
    this.controls.maxAzimuthAngle = Math.PI / 2
    this.controls.enableKeys = true //older versions
    this.controls.listenToKeyEvents(document.body)
    this.controls.keys = {
        LEFT: "ArrowLeft", //left arrow
        UP: "ArrowUp", // up arrow
        RIGHT: "ArrowRight", // right arrow
        BOTTOM: "ArrowDown" // down arrow
    }

    // let controls = new PointerLockControls(this.prespectiveCamera, this.canvas);
    // this.controls = controls;
    // // console.log(this.controls.getObject());
    // document.addEventListener(
    //   "click",
    //   function () {
    //     controls.lock();
    //   },
    //   false
    // );
    // // newwwwwwwwwwwwwwwwww
    // this.scene.add( controls.getObject() );
    // function onKeyDown(event) {
    //   console.log(event.code);
    //   switch (event.code) {
    //     case "ArrowUp":
    //     case "KeyW":
    //       this.moveForward = true;
    //       break;

    //     case "ArrowLeft":
    //     case "KeyA":
    //       this.moveLeft = true;
    //       break;

    //     case "ArrowDown":
    //     case "KeyS":
    //       this.moveBackward = true;
    //       break;

    //     case "ArrowRight":
    //     case "KeyD":
    //       this.moveRight = true;
    //       break;

    //     case "Space":
    //       if (this.canJump === true) velocity.y += 350;
    //       this.canJump = false;
    //       break;
    //   }
    // };

    // function onKeyUp(event) {
    //   switch (event.code) {
    //     case "ArrowUp":
    //     case "KeyW":
    //       this.moveForward = false;
    //       break;

    //     case "ArrowLeft":
    //     case "KeyA":
    //       this.moveLeft = false;
    //       break;

    //     case "ArrowDown":
    //     case "KeyS":
    //       this.moveBackward = false;
    //       break;

    //     case "ArrowRight":
    //     case "KeyD":
    //       this.moveRight = false;
    //       break;
    //   }
    // };

    // document.addEventListener("keydown", onKeyDown);
    // document.addEventListener("keyup", onKeyUp);

    // this.raycaster = new THREE.Raycaster(
    //   new THREE.Vector3(),
    //   new THREE.Vector3(0, -1, 0),
    //   0,
    //   10
    // );
  }

  resize() {
    // Updating PerspectiveCamera and OrthographicCamera
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
  update() {
    this.controls.update()

//     const time = performance.now();

//     if (this.controls.isLocked === true) {
//       this.raycaster.ray.origin.copy(this.controls.getObject().position);
//       this.raycaster.ray.origin.y -= 0.75;

//       const intersections = this.raycaster.intersectObjects(this.objects, false);
// console.log(intersections)
//       const onObject = true;

//       const delta = (time - this.prevTime) / 1000;

//       this.velocity.x -= this.velocity.x * 10.0 * delta;
//       this.velocity.z -= this.velocity.z * 10.0 * delta;

//       this.velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

//       this.direction.z = Number(this.moveForward) - Number(this.moveBackward);
//       this.direction.x = Number(this.moveRight) - Number(this.moveLeft);
//       this.direction.normalize(); // this ensures consistent movements in all directions

//       if (this.moveForward || this.moveBackward)
//         this.velocity.z -= this.direction.z * 400.0 * delta;
//       if (this.moveLeft || this.moveRight) this.velocity.x -= this.direction.x * 400.0 * delta;

//       if (onObject === true) {
//         this.velocity.y = Math.max(0, this.velocity.y);
//         this.canJump = true;
//       }

//       this.controls.moveRight(-this.velocity.x * delta);
//       this.controls.moveForward(-this.velocity.z * delta);

//       this.controls.getObject().position.y += this.velocity.y * delta; // new behavior

//       if (this.controls.getObject().position.y < 0.75) {
//         this.velocity.y = 0;
//         this.controls.getObject().position.y = 0.75;

//         this.canJump = true;
//       }
//     }

//     this.prevTime = time;
  }
}
