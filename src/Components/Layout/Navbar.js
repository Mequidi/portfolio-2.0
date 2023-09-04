import classes from "./Navbar.module.css";
// import logoImg from "../../Assets/Logo/lightpurplerinnegan.png"
import { AiOutlineHome } from 'react-icons/ai'
import { IoIosPerson } from 'react-icons/io'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { CgFileDocument } from 'react-icons/cg'
import { FaBars } from 'react-icons/fa'
import { useEffect , useRef , useState } from "react";
import React from "react";

const Navbar = (props) =>{

    const [ hasScrolled,setHasScrolled ] = useState(false);
    const [ navHeight,setNavHeight ] = useState(0)
    const [ isToggleActive,setIsToggleActive ] = useState(false);
    const navbarHeight = useRef();
    const ulRef = useRef();
    document.addEventListener("scroll",()=>{
        if(window.pageYOffset>navHeight)
            setHasScrolled(true);
        else
            setHasScrolled(false);
    });
    
    const clickHandler = () =>{
        setIsToggleActive(()=>!isToggleActive);
    }
    
    useEffect(()=>{
        setNavHeight(()=>navbarHeight.current.clientHeight);
    },[]) 

    function navbarCloser()
    {
        setIsToggleActive(false);
    }

    return <nav ref={navbarHeight} className={hasScrolled?`${classes.navbar} ${classes["color-navbar"]}`:classes.navbar}>
                <div className={classes["nav-container"]}>
                    <div className={classes["logo-container"]}>
                        {/* <img className={classes.logoimg} src={logoImg} alt="logo"/> */}
                        <button className={classes["togglebtn"]} onClick={clickHandler}>
                            < FaBars />
                        </button>
                    </div>
                    <div className={classes["list-container"]} style={isToggleActive?{ height:"230px" }:null}>
                        <ul ref={ulRef} className={isToggleActive?`${classes["toggle-list"]} ${classes.list}`:classes.list}
                        >
                            <li className={classes["list-item"]} onClick={()=>{
                                props.onClickScroll(props.home,navHeight)
                                navbarCloser()
                            }}>
                                <AiOutlineHome/>
                                <span>Home</span>
                            </li>
                            <li className={classes["list-item"]} onClick={()=>{
                                props.onClickScroll(props.about,navHeight)
                                navbarCloser()
                            }}>
                                <IoIosPerson/>
                                <span>About</span>    
                            </li>
                            <li  className={classes["list-item"]} onClick={()=>{
                                props.onClickScroll(props.projects,navHeight)
                                navbarCloser()
                            }}>
                                <AiOutlineFundProjectionScreen/>
                                <span>Projects</span>
                            </li>
                            <li  className={classes["list-item"]} onClick={()=>{
                                props.onClickScroll(props.resume,navHeight)
                                navbarCloser()
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