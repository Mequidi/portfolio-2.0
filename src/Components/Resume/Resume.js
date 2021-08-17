import classes from "./Resume.module.css";
import ResumeItem from "./ResumeItem";
import pdf from "../../Assets/Nikhil's-Resume.pdf";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai"

const Resume = React.forwardRef((props,ref) =>{
    return <section ref={ref} className={classes["resume-section"]}>
        <div className={classes["resume-container"]}>
            <div className={classes["download-resume"]}>
                <button>
                    <a href={pdf} target="_blank" rel="noreferrer" style={{color:"white",textDecoration:"none"}}>
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </a>
                </button>
            </div>
            <div className={classes["resume"]}>
                <div className={classes["resume-left"]}>
                    <h3 className={classes["resume-title"]}>Experience</h3>
                    <ResumeItem 
                        title={["Encrypt - The Tech Society of CVS "]}
                        text={[
                            "Helped and managed in hosting multiple successful academic and non - academic events in the academic year",
                            "Worked as a Graphics Designer and Information System manager for multiple successful events. Also supervised a team of highly capable Graphics Designers."
                        ]}
                    />
                    <ResumeItem
                        title={["AAGHAAZ - The Women Development & Empowerment Cell of CVS"]}
                        text={[
                            "Worked as a Designer and supervised a team of highly capable Graphics Designers."
                        ]} />
                </div>
                <div className={classes["resume-right"]}>
                    <h3 className={classes["resume-title"]}>Education</h3>
                    <ResumeItem 
                        title={["B.Sc Computer Science","College of Vocational Studies, Delhi University"]} 
                        date={"july 2018 - july 2021"}
                        text={["7 CGPA"]}
                    />
                    <ResumeItem 
                        title={["Senior Secondary Education","The Mothers International School"]} 
                        date={"may 2016 - may 2018"}
                        text={["12th - 92.25%"]}
                    /> 
                    <ResumeItem 
                        title={["Senior Secondary Education","The Mothers International School"]} 
                        date={"may 2011 - may 2016"}
                        text={["10th - 8CGPA "]}
                    /> 
                </div>
            </div>
            <div className={classes["download-resume"]}>
                <button>
                    <a href={pdf} target="_blank" rel="noreferrer" style={{color:"white",textDecoration:"none"}}>
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </a>
                </button>
            </div>
        </div>
    </section>
})

export default Resume;