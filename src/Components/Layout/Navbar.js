import classes from "./Navbar.module.css";
import logoImg from "../../Assets/Logo/lightpurplerinnegan.png"
import { AiOutlineHome } from 'react-icons/ai'
import { IoIosPerson } from 'react-icons/io'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { CgFileDocument } from 'react-icons/cg'
import { useState } from "react";
// import { Link } from "react-router-dom"

const Navbar = (props) =>{

    const [ hasScrolled,setHasScrolled ] = useState(false)

    document.addEventListener("scroll",()=>{
        if(window.pageYOffset>20)
            setHasScrolled(true);
        else
            setHasScrolled(false);
    });

    return <nav className={hasScrolled?`${classes.navbar} ${classes["color-navbar"]}`:classes.navbar}>
        <div className={classes["nav-container"]}>
            <div className={classes["logo-container"]}>
                <img className={classes.logoimg} src={logoImg} alt="logo"/>
            </div>
            <button className={classes.togglebtn}></button>
            <div className={classes["list-container"]}>
                <ul className={classes.list}>
                    <li className={classes["list-item"]} onClick={()=>{
                        props.onClickScroll(props.home)
                    }}>
                        <AiOutlineHome/>
                        <span>Home</span>
                    </li>
                    <li className={classes["list-item"]} onClick={()=>{
                        props.onClickScroll(props.about)
                    }}>
                        <IoIosPerson/>
                        <span>About</span>    
                    </li>
                    <li className={classes["list-item"]} onClick={()=>{
                        props.onClickScroll(props.projects)
                    }}>
                        <AiOutlineFundProjectionScreen/>
                        <span>Projects</span>
                    </li>
                    <li className={classes["list-item"]} onClick={()=>{
                        props.onClickScroll(props.resume)
                    }}>
                        <CgFileDocument/>
                        <span>Resume</span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}

export default Navbar