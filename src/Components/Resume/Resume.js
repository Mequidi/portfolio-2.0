import classes from "./Resume.module.css";
import ResumeItem from "./ResumeItem";

const Resume = () =>{
    return <section className={classes["resume-section"]}>
        <div className={classes["resume-container"]}>
            <div className={classes["download-resume"]}>
                <Button variant="primary" href={pdf} target="_blank">
                    <AiOutlineDownload />
                    &nbsp;Download CV
                </Button>
            </div>
            <div className={classes["resume"]}>
                <div className={classes["resume-left"]}>
                    <h3 className={classes["resume-title"]}>Experience</h3>
                    <ResumeItem 
                        title={"Encrypt - The Tech Society of CVS "}
                        text={[
                            "Helped and managed in hosting multiple successful academic and non - academic events in the academic year",
                            "Worked as a Graphics Designer and Information System manager for multiple successful events. Also supervised a team of highly capable Graphics Designers."
                        ]}
                    />
                    <ResumeItem
                        title={"AAGHAAZ - The Women Development & Empowerment Cell of CVS"}
                        text={[
                            "Worked as a Designer and supervised a team of highly capable Graphics Designers."
                        ]} />
                </div>
                <div className={classes["resume-right"]}>
                    <h3 className={classes["resume-title"]}>Education</h3>
                    <ResumeItem 
                        title={"B.Sc Computer Science <br/> College of Vocational Studies, Delhi University"} 
                        date={"july 2018 - july 2021"}
                        text={""}
                        />
                </div>
            </div>
            <div className={classes["download-resume"]}></div>
        </div>
    </section>
}

export default Resume;