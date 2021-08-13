import classes from "./About.module.css";
import React from "react";
import AboutContentText from "./AboutContentText";
import laptopImg from "../../Assets/About/about-laptop.png"

const About = React.forwardRef((props,ref) => {
    return <section ref={ref}>
        <div className={classes["about-container"]}>
            <div className={classes["about-content"]}>
                <AboutContentText />
                <div className={classes["image-container"]}>
                    <img src={laptopImg} alt="about" />
                </div>
            </div>
        </div>
    </section>
})

export default About;