import React from 'react';

import Aux from '../../hoc/Aux';
import Navigation from '../Navigation';
import Footer from '../Footer';

import './Layout.css';

const Layout = (props) => {
    return (
        <Aux>
            <Navigation />
            <main>
                {props.children}
            </main>
            <Footer />
        </Aux>
    )
}

export default Layout;