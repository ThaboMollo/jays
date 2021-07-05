import React from 'react';

const Footer = (props) => {
    return (
        <footer id="footer" className="text-center">
            <div className="container">
                <div className="footer">
                    <div className="footer-items">
                        <div className="footer-img">
                            <img src={'img/footer.jpg'} alt={"Footer logo"} lazy/>
                        </div>
                        <div className="footer-text">
							<p>Established: 2020</p>
                            <p>© Copyright jay's. All Rights Reserved.</p>
                            <p>Website designed and Developed by Thabo Mponya.</p>
                        </div>
                    </div>
					<div className='social'>
						<ul>
							<li>
								<a href={props.data ? props.data.facebook : '/'}>
									<i className='fa fa-facebook'></i>
								</a>
							</li>
							<li>
								<a href={props.data ? props.data.twitter : '/'}>
									<i className='fa fa-twitter'></i>
								</a>
							</li>
							<li>
								<a href={props.data ? props.data.insta : '/'}>
									<i className='fa fa-instagram'></i>
								</a>
							</li>
						</ul>
					</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;