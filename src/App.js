import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
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

  	return <Router>
		<Preloader load={load}></Preloader>
		<Background />
		<Navbar />
		<Switch>
			<Route path="/" exact component={Home} />
			{/* <Route path="/project" component={Projects} />
			<Route path="/about" component={About} />
			<Route path="/resume" component={Resume} /> */}
		</Switch>
		<Footer />
  	</Router>
}

export default App;
