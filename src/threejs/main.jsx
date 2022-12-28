import './style.css'
import Experience from "./Experience/Experience.js"
import React,{Component} from "react";
class ThreeScene extends Component{
    componentDidMount(){
        this.mount = new Experience(document.querySelector(".experience-canvas"));
    }
    render(){
        return(
            <div 
            ref={mount=>{
                this.mount = mount;
            }}
            />
        )
    }
}
export default ThreeScene;