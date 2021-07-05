import React from "react";

const Header = (props) => {
	return (
		<header id='header'>
			<div className='intro'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-8 col-md-offset-2 intro-text'>
							<h2>
								{/* {props.data ? props.data.title : 'Loading'} */}
								<span></span>
							</h2>
							{/* <p>{props.data ? props.data.paragraph : 'Loading'}</p> */}
							<div className="learn-more">
								{/* <a className="btn btn-custom btn-lg" href="post">Get Candidates</a>
								<br />
								<a className="btn btn-custom btn-lg" href="candidate">Get a Job</a> */}
							</div>{' '}
						</div>
					</div>
				</div>
        	</div>
    	</header>
  	)
}

export default Header;