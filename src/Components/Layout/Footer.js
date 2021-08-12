import classes from "./Footer.module.css"
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'

const Footer = () =>{
    return <div className={classes.footer}>
        <div className={classes["footer-container"]}>
            <div>© Crooked</div>
            <div>
            <ul className={classes["footer-icons"]}>
                    <li className={classes["social-icons"]}>
                    <a
                        href="https://github.com/Mequidi"
                        target="_blank" 
                        style={{color:"white"}}
                        rel="noopener noreferrer"
                    >
                        <AiFillGithub />
                    </a>
                    </li>
                    <li className={classes["social-icons"]}>
                    <a
                        href="https://twitter.com/NikhilSejwal4"
                        target="_blank" 
                        style={{color:"white"}}
                        rel="noopener noreferrer"
                    >
                        <AiOutlineTwitter />
                    </a>
                    </li>
                    <li className={classes["social-icons"]}>
                    <a
                        href="https://www.linkedin.com/in/nikhil-sejwal-320014209/"
                        target="_blank" 
                        style={{color:"white"}}
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn />
                    </a>
                    </li>
                    <li className={classes["social-icons"]}>
                    <a
                        href="https://www.instagram.com/sejwal_nikhil/"
                        target="_blank" 
                        style={{color:"white"}}
                        rel="noopener noreferrer"
                    >
                        <AiFillInstagram />
                    </a>
                    </li>
                </ul>
                </div>
            <div>
               <span style={{fontFamily : "sans-serif"}}>{2021}</span> All Rights Reserved
            </div>
        </div>
    </div>
}

export default Footer;