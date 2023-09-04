import classes from "./Resume.module.css";
import ResumeItem from "./ResumeItem";
import pdf from "../../Assets/Nikhil's-Resume.pdf";
import React, { forwardRef } from "react";
import { AiOutlineDownload } from "react-icons/ai";

const Resume = forwardRef((_, ref) => {
  return (
    <section ref={ref} className={classes["resume-section"]}>
      <div className={classes["resume-container"]}>
        <div className={classes["download-resume"]}>
          <button>
            <a
              href={pdf}
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </a>
          </button>
        </div>
        <div className={classes["resume"]}>
          <div className={classes["resume-left"]}>
            <h3 className={classes["resume-title"]}>Experience</h3>
            <ResumeItem
              title={["Squareboat"]}
              text={[
                "Developed modular and scalable frontend code using HTML, SCSS, and TypeScript.",
                "Implemented responsive design techniques to ensure optimal user experience across devices.",
                "Utilized Next.js framework for server-side rendering and routing Responsible for Page Speed and SEO improvements.",
                "Collaborated with cross-functional teams, including designers and backend developers, to ensure seamless integration of frontend and backend components.",
                "Contributed to code reviews, providing constructive feedback to fellow developers.",
              ]}
              date={"december 2021 - present"}
            />
            <ResumeItem
              title={["OpenWorkPark"]}
              text={[
                "Designed and developed a user-friendly flight booking and tracking website, integrating with airline APIs to provide real-time flight information and streamline the booking process.",
                "Developed and implemented an innovative education platform that facilitated seamless access to educational resources, student-teacher interactions, and progress tracking.",
                "Responsible for developing Web Application using JavaScript, HTML, CSS, JQuery, Less and AngularJs",
                "Demonstrated problem-solving skills by identifying and resolving technical challenges during the development",
              ]}
              date={"september 2021 - december 2021"}
            />
          </div>
          <div className={classes["resume-right"]}>
            <h3 className={classes["resume-title"]}>Education</h3>
            <ResumeItem
              title={[
                "B.Sc Computer Science",
                "College of Vocational Studies, Delhi University",
              ]}
              date={"july 2018 - july 2021"}
              text={["7 CGPA"]}
            />
            <ResumeItem
              title={[
                "Senior Secondary Education",
                "The Mothers International School",
              ]}
              date={"may 2016 - may 2018"}
              text={["12th - 92.25%"]}
            />
            <ResumeItem
              title={[
                "Senior Secondary Education",
                "The Mothers International School",
              ]}
              date={"may 2011 - may 2016"}
              text={["10th - 8CGPA "]}
            />
          </div>
        </div>
        <div className={classes["download-resume"]}>
          <button>
            <a
              href={pdf}
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </a>
          </button>
        </div>
      </div>
    </section>
  );
});

export default Resume;
