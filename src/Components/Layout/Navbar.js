import classes from "./Navbar.module.css";
import logoImg from "../../Assets/Logo/lightpurplerinnegan.png"
import { AiOutlineHome } from 'react-icons/ai'
import { IoIosPerson } from 'react-icons/io'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { CgFileDocument } from 'react-icons/cg'





const Navbar = () =>{
    return <nav className={classes.navbar}>
        <div className={classes["nav-container"]}>
            <div className={classes["logo-container"]}>
                <img className={classes.logoimg} src={logoImg} alt="logo"/>
            </div>
            <button className={classes.togglebtn}></button>
            <div className={classes["list-container"]}>
                <ul className={classes.list}>
                    <li className={classes["list-item"]}>
                        <AiOutlineHome/>
                        <p>Home</p>
                    </li>
                    <li className={classes["list-item"]}>
                        <IoIosPerson/>
                        <p>About</p>
                    </li>
                    <li className={classes["list-item"]}>
                        <AiOutlineFundProjectionScreen/>
                        <p>Projects</p>
                    </li>
                    <li className={classes["list-item"]}>
                        <CgFileDocument/>
                        <p>Resume</p>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}

export default Navbar