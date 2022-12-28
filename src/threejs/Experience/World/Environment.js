import * as THREE from "three";
import Experience from "../Experience";
export default class Environment{
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources

    this.setSunLight()
  }

  setSunLight(){
    this.sunLight = new THREE.DirectionalLight("#ffffff",1)
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.far = 1000;
    this.sunLight.shadow.mapSize.set(2048,2048)
    this.sunLight.shadow.normalBias = 0.05
    this.sunLight.position.set(100,100,100)
    this.scene.add(this.sunLight)

    this.ambientLight = new THREE.AmbientLight("#ffffff",0.6)
    this.scene.add(this.ambientLight)

    this.hemiLight = new THREE.HemisphereLight( 0x000000, 0xffffff, 1 );
    this.scene.add(this.hemiLight)
  }

  resize() {}
  update() {}
}
