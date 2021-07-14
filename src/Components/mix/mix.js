import React from 'react'

import './mix.css';

const Mix = () => {
    return (
        <div id='mix' className = "gallery">
            <div className="clipped-border">
                <img src="img/footer.jpg" className="imgclp" id="clipped" />
            </div>
            <div className="clipped-border">
                <img src="img/footer.jpg" className="imgclp" id="clipped" />
            </div>
            <div className="clipped-border">
                <img src="img/footer.jpg" className="imgclp" id="clipped" />
            </div>
            <div className="clipped-border">
                <img src="img/footer.jpg" className="imgclp" id="clipped" />
            </div>
            <div className="clipped-border">
                <img src="img/footer.jpg" className="imgclp" id="clipped" />
            </div>
            <div className = "shadow"></div>
        </div>
    )
}

export default Mix;