import { Fragment, useEffect, useState,useRef } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Background from './Components/Layout/Background';
import Footer from './Components/Layout/Footer';
import Navbar from './Components/Layout/Navbar';
import Preloader from './Components/UI/Preloader';
import './styles.css'

function App() {

	const [ load,setLoad ] = useState(true);

	useEffect(()=>{
		const timer = setTimeout(()=>
			{setLoad(false)}
		,1500);

		return ()=>clearTimeout(timer);
	},[])

	const home = useRef(null);
	const about = useRef(null);
	// const projects = useRef(null);
	// const resume = useRef(null);

	
	function clickScrollHandler(ref) {
		ref.current.scrollIntoView({ behavior: 'smooth' })
		// console.log(ref.current)
	}

  	return <Fragment>
		<Preloader load={load}></Preloader>
		<Background />
		<Navbar 
			home={home}
			about={about}
			// projects={projects}
			// reusme={resume}
			onClickScroll = {clickScrollHandler}
		/>
			<main>
				<Home ref={home}/>
				<About ref={about} />
				{/* <Projects ref={projects} />
				<Resume ref={resume} /> */}
			</main>
		<Footer />
  	</Fragment>
}

export default App;
