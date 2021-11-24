import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

import JsonData from './data/data.json';
import About from './Container/About';
import Blog from './Container/Blog';
import Home from './Container/Home';
import Menu from './Container/Menu';
import Layout from './Components/Layout/Layout';
// import Contact  from './Container/Contact';

// You need to make thse mothafuckas PRIVATE!!!

const App = () => {
	const [jaysData, setJaysData] = useState({})
	useEffect(() => {
		setJaysData(JsonData)
	}, [])
	return (
		<Layout>
			<div>
				<Route path="/" exact component={Home} />
				<Route path="/about-us" render={(props) => <About data={jaysData.About} />} />
				<Route path="/blog" component={Blog} />
				<Route path="/menu" render={(props) => <Menu data={jaysData.Menu} /> } />
				{/* <Route path="/contact" component={Contact} /> */}
			</div>

		</Layout>
	)
}

export default App;
