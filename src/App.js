import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from './Container/About';
import Blog from './Container/Blog';
import Home from './Container/Home';
import Menu from './Container/Menu';
import Layout from './Components/Layout/Layout';

class App extends Component{
	render() {
		return(
			<Layout>
				<div>
					<Route path="/" exact component={Home} />
					<Route path="/about-us" component={About} />
					<Route path="blog" component={Blog} />
					<Route path="menu" component={Menu} />
				</div>

			</Layout>
		)
	}
}

export default App;
