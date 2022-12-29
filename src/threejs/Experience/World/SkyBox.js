import * as THREE from "three";
import Experience from "../Experience";

export default class SkyBox {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    
    this.init("DimGray");
  }
  init(changecolor) {
        this.materialArray = [];
        let texture_ft = new THREE.TextureLoader().load( '..../../public/assets/SkyBox/Daylight_Box_Right.bmp');
        let texture_bk = new THREE.TextureLoader().load( '..../../public/assets/SkyBox/Daylight_Box_Left.bmp');
        let texture_up = new THREE.TextureLoader().load( '..../../public/assets/SkyBox/Daylight_Box_Top.bmp');
        let texture_dn = new THREE.TextureLoader().load( '..../../public/assets/SkyBox/Daylight_Box_Bottom.bmp');
        let texture_rt = new THREE.TextureLoader().load( '..../../public/assets/SkyBox/Daylight_Box_Front.bmp');
        let texture_lf = new THREE.TextureLoader().load( '..../../public/assets/SkyBox/Daylight_Box_Back.bmp');

        this.materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft,color:changecolor,opacity:1,visible:1 }));//DimGray
        this.materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk,color:changecolor,opacity:1,visible:1 }));//DimGray
        this.materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up,color:changecolor,opacity:1,visible:1 }));//DimGray
        this.materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn,color:changecolor,opacity:1,visible:1 }));//DimGray
        this.materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt,color:changecolor,opacity:1,visible:1 }));//DimGray
        this.materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf,color:changecolor,opacity:1,visible:1 }));//DimGray

        for (let i = 0; i < 6; i++)
          this.materialArray[i].side = THREE.BackSide;
        // console.log(this.materialArray);
        let skyboxGeo = new THREE.BoxGeometry( 100, 100, 100); //15k
        let skybox = new THREE.Mesh( skyboxGeo, this.materialArray );
        // console.log(skybox);
        this.scene.add( skybox );
  }
}
