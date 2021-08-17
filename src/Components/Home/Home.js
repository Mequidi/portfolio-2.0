import classes from "./Home.module.css";
import introImg from "../../Assets/Home/laptopondesk.svg"
import Type from "./Type";
import { useEffect,useState } from "react";
import HomeAbout from "./HomeAbout";
import React from "react";

const Home = React.forwardRef((props,ref) =>{

    const [ startType,setStartType ]=useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setStartType(true)
        },3000)
    },[])

    return <section ref={ref}>
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
                <HomeAbout />
            </section>
})

export default Home;