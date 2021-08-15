import classes from "./Projects.module.css"
import React from "react"
import img1 from "../../Assets/Projects/MovieApp.JPG"
import img2 from "../../Assets/Projects/MealsAPp.JPG"
import img3 from "../../Assets/Projects/CoffeeApp.JPG"
import img4 from "../../Assets/Projects/ExpenseTrackerApp.JPG"
import img5 from "../../Assets/Projects/VidyayanApp.JPG"
import img6 from "../../Assets/Projects/GroceryBudApp.JPG"
import { BiLinkExternal } from "react-icons/bi";

const imgArr = [ img1,img2,img3,img4,img5,img6 ];

const Projects = React.forwardRef((props,ref) => {
    return <section ref={ref} className={classes["projects-section"]}>
        <div className={classes["section-container"]}>
            <h1 className="project-heading" style={{marginBottom:"0.5rem"}}>
                My Recent <strong className="purple">Works </strong>    
            </h1>
            <p style={{ color: "white" }}>
                Here are a few projects I've worked on recently.
            </p>
            <div className={classes["projects-list"]}>
                
                {props.projects.map((project,index)=>{
                    return <div className={classes.project}>
                        <img src={imgArr[index]} alt={project.title} />
                        <div className={classes["project-content"]}>
                            <h2>{project.title}</h2>
                            <p>{project.text}</p>
                            <button className={classes["link-btn"]}>
                                <a href={project.linkProject} className={classes["link"]} target="_blank">
                                    <BiLinkExternal />
                                    <span>View Project</span>
                                </a>
                            </button>
                            <button className={classes["link-btn"]}>
                            <a href={project.linkCode} className={classes["link"]} target="_blank">
                                <BiLinkExternal />
                                <span>Source Code</span>
                            </a>
                            </button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </section>
})

export default Projects