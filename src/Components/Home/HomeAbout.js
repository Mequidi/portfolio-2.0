import classes from "./Home.module.css"
import avatarImg from "../../Assets/Home/avatar.svg"
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'

const HomeAbout = () =>{
    return <div className={classes.about}>
                <div className={classes["about-container"]}>
                    <div className={classes["about-content"]}>
                        <h1>LET ME <span className={classes.purple}> INTRODUCE </span> MYSELF</h1>
                        <p>
                            I fell in love with programming and I have at least learnt
                            something, I think… 🤷‍♂️
                            <br />
                            <br />I am fluent in classics like
                            <i>
                                <b className={classes["purple"]}> C++, Javascript and Python. </b>
                            </i>
                            <br />
                            <br />
                            My field of Interest's are building new &nbsp;
                            <i>
                                <b className={classes["purple"]}>Web Technologies and Products </b>
                            </i>
                            <br />
                            <br />
                            Whenever possible, I also apply my passion for developing products
                            with <b className={classes["purple"]}>Node.js</b> and
                            <i>
                                <b className={classes["purple"]}>
                                {" "}
                                Modern Javascript Library and Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className={classes["purple"]}> React.js</b>
                            </i>
                        </p>
                    </div>
                    <div>
                        <img src={avatarImg} alt="avatar" />
                    </div>
                </div>
                <div className={classes["about-social"]}>
                    <div className={classes["social-container"]}>
                        <h1>FIND ME ON</h1>
                        <p> Feel free to <span className={classes["purple"]}>connect </span>with me</p>
                        <ul className={classes["social-links"]}>
                            <li className={classes["social-icon"]}>
                                <a href="https://github.com/Mequidi" target="_blank" rel="noreferrer" className={classes["home-social-icons"]}>
                                    <AiFillGithub className={classes.icon} />
                                </a>
                            </li> 
                            <li className={classes["social-icon"]}>
                                <a href="https://twitter.com/NikhilSejwal4" target="_blank" rel="noreferrer"  className={classes["home-social-icons"]}>
                                    <AiOutlineTwitter className={classes.icon} />
                                </a>
                            </li>
                            <li className={classes["social-icon"]}>
                                <a href="https://www.linkedin.com/in/nikhil-sejwal-320014209/" target="_blank" rel="noreferrer"  className={classes["home-social-icons"]}>
                                    <FaLinkedinIn className={classes.icon} />
                                </a>
                            </li>
                            <li className={classes["social-icon"]}>
                                <a href="https://www.instagram.com/sejwal_nikhil/" target="_blank" rel="noreferrer"  className={classes["home-social-icons"]}>
                                    <AiFillInstagram className={classes.icon} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
}

export default HomeAbout; 