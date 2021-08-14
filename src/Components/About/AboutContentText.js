import classes from "./About.module.css"
import { ImPointRight } from "react-icons/im";

const AboutContentText = () =>{
    return <div className={classes["text-container"]}>
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
                </h1>
                <div className={classes["card-text"]}>
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am <span className="purple">Nikhil Sejwal </span>
                        from <span className="purple"> New Delhi, India.</span>
                        <br />"Personal Shit lorem20"#
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul className={classes["hobby-list"]}>
                        <li>
                        <ImPointRight /> Playing Games
                        </li>
                        <li>
                        <ImPointRight /> Listening To Music
                        </li>
                        <li>
                        <ImPointRight /> Travelling
                        </li>
                    </ul>

                    <p style={{ 
                        textAlign: "center",
                        marginBlockEnd: 0, 
                        color: "rgb(155 126 172)" }}
                    >
                        "No amount of natural talent trumps hard work"{" "}
                    </p>
                    <footer style={{ 
                        textAlign:"center" ,
                        color:"#a588c0",
                        fontSize:"1rem",
                    }}>~Rin Matsuoka</footer>
                </div>
            </div>
}

export default AboutContentText;