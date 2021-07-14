import React from "react";

import Mix from '../Components/mix/mix';

const Menu = (props) => {
    return (
        <div id='our-menu' className='text-center'>
            <div className='container'>
                <div className='section-title'>
                    <h2>Our Menu</h2>
                </div>
                <p>{props.data ? props.data.intro : 'loading...'}</p>
                <div className='Cnt'>
                    <div className='items'>
                        <div className='img-cnt'>
                            <Mix />
                        </div>
                    </div>
                    <div className='items'>
                        <div className='abtContainer'>
                            <h4>Our Coffee Range</h4>
                            <div className='list-style'>
                                {
                                    props.data
                                        ? props.data.coffee.map((d, i) => (
                                            <div className='menu-item' key={d.i} >
                                                <a>{d.item}</a>
                                                <p>{d.desc}</p>
                                                <p>{d.amount}</p>
                                            </div>
                                        ))
                                        : 'loading...'
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <h4>Our freshly baked</h4>
                    {
                        props.data
                            ? props.data.Food.map((d, i) => (
                                <div className='col-md-3 food-item' key={d.i}>
                                    <a>{d.item}</a>
                                    <p>{d.desc}</p>
                                    <p>{d.amount}</p>
                                </div>
                            ))
                            : 'loading...'
                    }
                </div>
            </div>
        </div>
    )
}

export default Menu;