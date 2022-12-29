import * as THREE from "three";
import Experience from "../Experience";
export default class Room {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.room = this.resources.items.room;
    this.actualRoom = this.room.scene;

    this.lerp = {
      current: 0,
      target: 0,
      ease: 0.1,
    };

    this.setModel();
    this.onMouseMove();
  }

  setModel() {
    this.actualRoom.children.forEach((child) => {
      child.castShadow = true;
      child.receiveShadow = true;
      if (child instanceof THREE.Group) {
        child.children.forEach((groupChild) => {
          groupChild.castShadow = true;
          groupChild.receiveShadow = true;
        });
      }
      // console.log(child)
      if (child.name == "AquaGlass") {
        child.material = new THREE.MeshPhysicalMaterial();
        child.material.roughness = 0;
        child.material.color.set(0x549dd2);
        child.material.ior = 3;
        child.material.transmission = 1;
        child.material.opacity = 1;
      }
      console.log(child.name);
      // console.log(child.children)
      if (child.name == "CV") {
        var loader = new THREE.TextureLoader();
        var texture = loader.load("../../../../public/textures/CV.jpg");
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.magFilter = THREE.NearestFilter;
        texture.repeat.set(1, 1);
        child.material = new THREE.MeshPhongMaterial({
          // map: this.resources.items.screen,
          map: texture,
          side: THREE.DoubleSide,
        });
      }
      if (child.name == "KeyBoard") {
        var loader = new THREE.TextureLoader();
        var texture = loader.load("../../../../public/textures/sea.jpg");
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.magFilter = THREE.NearestFilter;
        texture.repeat.set(1, 1);
        child.material = new THREE.MeshPhongMaterial({
          // map: this.resources.items.screen,
          map: texture,
          side: THREE.DoubleSide,
        });
      }
      if (child.name == "treotuong") {
        var loader = new THREE.TextureLoader();
        var texture = loader.load("../../../../public/textures/treotuong.jpg");
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.magFilter = THREE.NearestFilter;
        texture.repeat.set(1, 1);
        child.material = new THREE.MeshPhongMaterial({
          // map: this.resources.items.screen,
          map: texture,
          side: THREE.DoubleSide,
        });
      }
      if (child.name == "Floor") {
        var loader = new THREE.TextureLoader();
        var texture = loader.load("../../../../public/textures/floor.jpg");
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.magFilter = THREE.NearestFilter;
        texture.repeat.set(1, 1);
        child.material = new THREE.MeshPhongMaterial({
          // map: this.resources.items.screen,
          map: texture,
          side: THREE.FrontSide,
        });
      }
      if (child.name == "PC_CV") {
        child.material = new THREE.MeshBasicMaterial({
          map: this.resources.items.screen,
          side: THREE.DoubleSide,
        });
      }
    });

    this.scene.add(this.actualRoom);
    this.actualRoom.scale.set(0.12, 0.12, 0.12);
    this.actualRoom.rotation.y = Math.PI;
    // this.actualRoom.position.y = -1
  }

  onMouseMove() {
    window.addEventListener("mousemove", (e) => {
      this.rotation =
        ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
      this.lerp.target = this.rotation;
    });
  }

  resize() {}
  update() {
    this.lerp.current = GSAP.utils.interpolate(
      this.lerp.current,
      this.lerp.target,
      this.lerp.ease
    );

    this.actualRoom.rotation.y = this.lerp.current;

    this.mixer.update(this.time.delta * 0.0009);
  }
}
