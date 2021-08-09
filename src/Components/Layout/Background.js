import { Fragment } from "react"

const Background = () =>{
    return <Fragment>
        <div className="stars"></div>
		<div className="twinkling"></div>
		<div className="purple-overlay">
            <div id="first-circle"></div>
            <div id="second-circle"></div>
            <div id="third-circle"></div>
        </div>
    </Fragment>
}

export default Background;