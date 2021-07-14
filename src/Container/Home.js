import React from 'react';

import Header from '../Components/header';
import Contact from '../Container/Contact';
import Aux from '../hoc/Aux';

const Home = () => {
    return (
        <Aux>
            <Header />
            <Contact />
        </Aux>
    )
}

export default Home;