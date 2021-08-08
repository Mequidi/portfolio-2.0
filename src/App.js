import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Background from './Components/Layout/Background';
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

  	return <Fragment>
		<Preloader load={load}></Preloader>
		<Background />
		<Navbar />
  	</Fragment>
}

export default App;
