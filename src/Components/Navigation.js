import React, { Component } from 'react';

class Navigation extends Component {
	handleHireBtn = (props) => {
		this.props.history.push("/hire-us")
	}
	render() {
		return (
			<nav id='menu' className='navbar navbar-default navbar-fixed-top'>
				<div className='container'>
					<div className='navbar-header'>
						<button
							type='button'
							className='navbar-toggle collapsed'
							data-toggle='collapse'
							data-target='#bs-example-navbar-collapse-1'
						>
							{' '}
							<span className='sr-only'>Toggle navigation</span>{' '}
							<span className='icon-bar'></span>{' '}
							<span className='icon-bar'></span>{' '}
							<span className='icon-bar'></span>{' '}
						</button>
						<a className='navbar-brand page-scroll' href='/'>
							<div className="nav-pic">
								<img alt="Company Logo" className="img" src="img/footer.jpg" />
							</div>
						</a>{' '}
						<div className='row'>
						<div className='social'>
							<ul>
								<li>
									<a href={this.props.data ? this.props.data.facebook : '/'}>
										<i className='fa fa-facebook'></i>
									</a>
								</li>
								<li>
									<a href={this.props.data ? this.props.data.twitter : '/'}>
										<i className='fa fa-twitter'></i>
									</a>
								</li>
								<li>
									<a href={this.props.data ? this.props.data.instagram : '/'}>
										<i className='fa fa-instagram'></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
					</div>
					<div
						className='collapse navbar-collapse'
						id='bs-example-navbar-collapse-1'
					>
						<ul className='nav navbar-nav navbar-right'>
							<li>
								<a href='/about-us' className='page-scroll'>
									About Us
								</a>
							</li>
							<li>
								<a href='/menu' className='page-scroll'>
									The Menu
								</a>
							</li>
							<li>
								<a href="/blog" className='page-scroll'>
									Blog
								</a>
							</li>
							<li>
								<a href='/#contact' className='page-scroll'>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default Navigation;