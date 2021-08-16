import classes from "./Resume.module.css";

const ResumeItem = (props) => {
    return <div className={classes["resume-item"]}>
        {props.title.map((item,index)=>{
            return <h5 key={index} className={item?classes["resume-title"]:classes["resume-no-title"]}>
                {item}
            </h5>
        })}
        <p>
            <em>{props.date}</em>
        </p>
        <ul>
            {props.text.map((item,index)=>{
                return <li key={index}> ‣ {item}</li>
            })}
        </ul>
    </div>
}

export default ResumeItem;