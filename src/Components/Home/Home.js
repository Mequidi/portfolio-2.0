import classes from "./Home.module.css";
import introImg from "../../Assets/Home/lightpurple-undraw_feeling_proud_qne1.svg"
import Type from "./Type";
import { useEffect,useState } from "react";
import HomeAbout from "./HomeAbout";

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
                <HomeAbout />
                
            </section>
}

export default Home;