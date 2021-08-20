import classes from "./Navbar.module.css";
import logoImg from "../../Assets/Logo/lightpurplerinnegan.png"
import { AiOutlineHome } from 'react-icons/ai'
import { IoIosPerson } from 'react-icons/io'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { CgFileDocument } from 'react-icons/cg'
import { FaBars } from 'react-icons/fa'
import { useState } from "react";
import React from "react";
import { useEffect, useRef } from "react/cjs/react.development";

const Navbar = (props) =>{

    const [ hasScrolled,setHasScrolled ] = useState(false);
    const [ navHeight,setNavHeight ] = useState(0)
    const [ isToggleActive,setIsToggleActive ] = useState(false);
    const navbarHeight = useRef();

    document.addEventListener("scroll",()=>{
        if(window.pageYOffset>navHeight)
            setHasScrolled(true);
        else
            setHasScrolled(false);
    });
    
    useEffect(()=>{
        setNavHeight(navbarHeight.current.clientHeight)
    },[])

    const clickHandler = () =>{
        setIsToggleActive(()=>!isToggleActive);
    }
    
    return <nav ref={navbarHeight} className={hasScrolled?`${classes.navbar} ${classes["color-navbar"]}`:classes.navbar}>
                <div className={classes["nav-container"]}>
                    <div className={classes["logo-container"]}>
                        <img className={classes.logoimg} src={logoImg} alt="logo"/>
                        <button className={classes["togglebtn"]} onClick={clickHandler}>
                            < FaBars />
                        </button>
                    </div>
                    <div className={classes["list-container"]}>
                        <ul className={isToggleActive?`${classes.list} ${classes["toggle-list"]}`:classes.list}>
                            <li className={classes["list-item"]} onClick={()=>{
                                props.onClickScroll(props.home,navHeight)
                            }}>
                                <AiOutlineHome/>
                                <span>Home</span>
                            </li>
                            <li className={classes["list-item"]} onClick={()=>{
                                props.onClickScroll(props.about,navHeight)
                            }}>
                                <IoIosPerson/>
                                <span>About</span>    
                            </li>
                            <li className={classes["list-item"]} onClick={()=>{
                                props.onClickScroll(props.projects,navHeight)
                            }}>
                                <AiOutlineFundProjectionScreen/>
                                <span>Projects</span>
                            </li>
                            <li className={classes["list-item"]} onClick={()=>{
                                props.onClickScroll(props.resume,navHeight)
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