import { Fragment, useEffect, useState,useRef } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Background from './Components/Layout/Background';
import Footer from './Components/Layout/Footer';
import Navbar from './Components/Layout/Navbar';
import Projects from './Components/Projects/Projects';
import Preloader from './Components/UI/Preloader';
import Resume from './Components/Resume/Resume';
import './styles.css'

function App() {

	const [ load,setLoad ] = useState(true);

	useEffect(()=>{
		const timer = setTimeout(()=>
			{setLoad(false)}
		,1500);

		return ()=>clearTimeout(timer);
	},[])

	const projectsArr = [
			{ 
				id:1,
				linkProject:"https://movieappbymequidi.netlify.app/",
				linkCode:"https://github.com/Mequidi/Movie-App",
				title : "Movie App", 
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ut expedita sed veritatis animi voluptatibus cum tempora beatae asperiores. Labore."
			},
			{ 
				id:2,
				linkProject:"https://foodappbymequidi.netlify.app",
				linkCode:"https://github.com/Mequidi/food-shopping-app", 
				title : "Meals App", 
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ut expedita sed veritatis animi voluptatibus cum tempora beatae asperiores. Labore."
			},
			{ 
				id:3,
				linkProject:"https://coffeeshopbymequidi.netlify.app/",
				linkCode:"https://github.com/Mequidi/Coffee-Shop", 
				title : "Coffee Sourse", 
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ut expedita sed veritatis animi voluptatibus cum tempora beatae asperiores. Labore."
			},
			{ 
				id:4,
				linkProject:"https://expensetrackerbymequidi.netlify.app/",
				linkCode:"https://github.com/Mequidi/expense-tracker", 
				title : "Expense Tracker", 
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ut expedita sed veritatis animi voluptatibus cum tempora beatae asperiores. Labore."
			},
			{ 
				id:5,
				linkProject:"https://vidyayan-app.netlify.app",
				linkCode:"https://github.com/Mequidi/vidyayan-project", 
				title : "Vidyayan", 
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ut expedita sed veritatis animi voluptatibus cum tempora beatae asperiores. Labore."
			},
			{ 
				id:6,
				linkProject:"https://gorcerylistbymequidi.netlify.app/",
				linkCode:"https://github.com/Mequidi/Grocery-Bud", 
				title : "Grocery Bud", 
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ut expedita sed veritatis animi voluptatibus cum tempora beatae asperiores. Labore."
			},
		]

	const home = useRef(null);
	const about = useRef(null);
	const projects = useRef(null);
	const resume = useRef(null);
	
	function clickScrollHandler(ref) {
		ref.current.scrollIntoView({ behavior: 'smooth' })
	}

  	return <Fragment>
		<Preloader load={load}></Preloader>
		<Background />
		<Navbar 
			home={home}
			about={about}
			projects={projects}
			resume={resume}
			onClickScroll = {clickScrollHandler}
		/>
			<main>
				<Home ref={home}/>
				<About ref={about} />
				<Projects ref={projects} projects={projectsArr}/> 
				<Resume ref={resume} />
			</main>
		<Footer />
  	</Fragment>
}

export default App;
