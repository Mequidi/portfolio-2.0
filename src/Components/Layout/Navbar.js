import classes from "./Navbar.module.css";
import logoImg from "../../Assets/Logo/lightpurplerinnegan.png"
import { AiOutlineHome } from 'react-icons/ai'
import { IoIosPerson } from 'react-icons/io'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { CgFileDocument } from 'react-icons/cg'
import { useState } from "react";
import React from "react";
import { useEffect, useRef } from "react/cjs/react.development";

const Navbar = (props) =>{

    const [ hasScrolled,setHasScrolled ] = useState(false);
    const [ navHeight,setNavHeight ] = useState(0)
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
    
    return <nav ref={navbarHeight} className={hasScrolled?`${classes.navbar} ${classes["color-navbar"]}`:classes.navbar}>
                <div className={classes["nav-container"]}>
                    <div className={classes["logo-container"]}>
                        <img className={classes.logoimg} src={logoImg} alt="logo"/>
                    </div>
                    <button className={classes.togglebtn}></button>
                    <div className={classes["list-container"]}>
                        <ul className={classes.list}>
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