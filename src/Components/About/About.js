import classes from "./About.module.css";
import React from "react";
import AboutContentText from "./AboutContentText";
import laptopImg from "../../Assets/About/about-laptop.png"
import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3} from 'react-icons/di';
import {SiTypescript} from 'react-icons/si';
import {
  DiJavascript1,
  DiReact,
  DiGit,
} from "react-icons/di";
import { SiFirebase,SiRedux } from "react-icons/si";
import {
    SiVisualstudiocode,
    SiPostman, 
  } from "react-icons/si";
import { FiFigma } from "react-icons/fi"
// import Github from "./Github"; 

const About = React.forwardRef((props,ref) => {
    return <section ref={ref} className={classes["about-section"]}>
        <div className={classes["about-container"]}>
            <div className={classes["about-content"]}>
                <AboutContentText />
                <div className={classes["image-container"]}>
                    <img src={laptopImg} alt="about" />
                </div>
            </div>
        </div>
        <h1 className={classes["project-heading"]}>
            Professional <strong className="purple">Skillset </strong>
        </h1>
        <div className={classes["tech-icons-list"]}>
            <div className={classes["tech-icons"]}><DiJavascript1 className={classes["tech-images"]}/></div>
            <div className={classes["tech-icons"]}><AiFillHtml5  className={classes["tech-images"]}/></div>
            <div className={classes["tech-icons"]}><DiCss3 className={classes["tech-images"]}/></div>
            <div className={classes["tech-icons"]}><DiReact className={classes["tech-images"]}/></div>
            <div className={classes["tech-icons"]}><SiTypescript className={classes["tech-images"]}/></div>
            <div className={classes["tech-icons"]}><DiGit className={classes["tech-images"]}/></div>
            <div className={classes["tech-icons"]}><SiFirebase className={classes["tech-images"]}/></div>
            <div className={classes["tech-icons"]}><SiRedux className={classes["tech-images"]}/></div>
        </div>
        <h1 className={classes["project-heading"]}>
          <strong className="purple">Tools</strong> I use
        </h1> 
        <div className={classes["tools-list"]}>
            <div className={classes["tech-icons"]}><SiVisualstudiocode /></div>
            <div className={classes["tech-icons"]}><SiPostman /></div> 
            <div className={classes["tech-icons"]}><FiFigma /></div>
        </div>
        {/* <Github></Github> */}
    </section>
})

export default About;