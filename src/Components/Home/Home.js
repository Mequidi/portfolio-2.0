import classes from "./Home.module.css";
import introImg from "../../Assets/Home/lightpurple-undraw_feeling_proud_qne1.svg"
import avatarImg from "../../Assets/Home/avatar.svg"
import Type from "./Type";
import { useEffect,useState } from "react";

const Home = () =>{

    const [ startType,setStartType ]=useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setStartType(true)
        },3000)
    },[])

    return <section>
                <div className={classes.home}>
                    <div className={classes["home-container"]}>
                        <div className={classes["home-content"]}>
                            <h1 className={classes.greeting}>
                                Hi There! <span className={classes["wave"]} role="img" aria-labelledby="wave">👋🏻</span>
                            </h1>
                            <h1 className={classes.name}>
                                I'M
                                <strong className={classes["main-name"]}> NIKHIL SEJWAL</strong>
                            </h1>
                            {startType&&<Type />}
                        </div>
                        <div className={classes["home-img-container"]}>
                            <img src={introImg} alt="Me sitting on desk" />
                        </div>
                    </div>
                </div>
                <div className={classes.about}>
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
                            <div>
                                <img src={avatarImg} alt="avatar" />
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </section>
}

export default Home;