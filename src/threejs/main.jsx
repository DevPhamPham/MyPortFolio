import './style.css'
import Experience from "./Experience/Experience.js"
import React,{Component, useState, useEffect} from "react";
class ThreeScene extends Component{
    componentDidMount(){
        this.mount = new Experience(document.querySelector(".experience-canvas"));
    }
    LoadAgain() {
        const [load, setLoad] = useState(false);
        useEffect(()=> {
            setLoad(!load)
            // if (localStorage.getItem("loadThree")){
            //     localStorage.setItem("loadThree",false)
            //     location.reload()
            // }
        }, [])
        return <></>
        console.log(this.mount)
    }
    render(){
        console.log("loadddddddddddd")
        return(
            <>
            <div 
            ref={mount=>{
                this.mount = mount;
            }}
            />
            <this.LoadAgain/>
            </>
            
        )
    }
}

export default ThreeScene;