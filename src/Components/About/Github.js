import classes from "./About.module.css";
import GitHubCalendar from "react-github-calendar";

const Github = () =>{

    const colourTheme = {
        background: "transparent",
        text: "#ffffff",
        level4: "#8400b8",
        level3: "#b22ff4",
        level2: "#b265f6",
        level1: "#c084f5",
        // level0: "#ecd9fc",
        level0: "#d1c0df"
    };

    return <div className={classes.github}>
        <h1 className={classes["project-heading"]} style={{ paddingBottom: "20px" }}>
            Days I <strong className="purple">Code</strong>
        </h1>
        <GitHubCalendar
            username="Mequidi"
            blockSize={15}
            blockMargin={5}
            theme={colourTheme}
            // color={"purple"}
            fontSize={16}
        />
    </div>
}

export default Github