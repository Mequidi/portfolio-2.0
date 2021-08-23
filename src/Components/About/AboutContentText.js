import classes from "./About.module.css"
import { BsArrowRight } from "react-icons/bs";

const AboutContentText = () =>{
    return <div className={classes["text-container"]}>
                <h1>
                Know Who <strong className="purple">I'M</strong>
                </h1>
                <div className={classes["card-text"]}>
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am <span className="purple">Nikhil Sejwal </span>
                        from <span className="purple"> New Delhi, India.</span>
                        <br />I have completed my Graduation in Computer Science from Delhi University and looking for work.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul className={classes["hobby-list"]}>
                        <li>
                        < BsArrowRight /> Playing Games
                        </li>
                        <li>
                        < BsArrowRight /> Listening To Music
                        </li>
                        <li>
                        < BsArrowRight /> Travelling
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