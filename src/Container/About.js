import React from 'react';

const About = (props) => {
    return (
        <div id='about' className='text-center'>
            <div className='container'>
                <div className='section-title'>
                    <h2>About Us</h2>
                </div>
                    <p>{props.data ? props.data.paragraph : 'loading...'}</p>
                <div className='Cnt'>
                    <img src='img/intro-bg.jpg' className='img-responsive' alt='' />
                    <div className='abtContainer'>
                        <p>{props.data ? props.data.paragraph : 'loading...'}</p>
                    </div>
                </div>
                <div className='Cnt'>
                    <p>{props.data ? props.data.plong : 'loading...'}</p>
                </div>
            </div>
        </div>
    )
}

export default About;