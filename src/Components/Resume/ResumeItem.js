import classes from "./Resume.module.css";

const ResumeItem = (props) => {
    return <div className={classes["res"]}>
        <h5 className={props.title?classes["resume-title"]:classes["resume-no-title"]}>
            {props.title}
        </h5>
        <p>
            <em>{props.date}</em>
        </p>
        <ul>
            {props.text.map((item,index)=>{
                <li key={index}> ‣ {item}</li>
            })}
        </ul>
    </div>
}

export default ResumeItem;