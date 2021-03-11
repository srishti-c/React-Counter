import  React from 'react';
import Nav from './routers/nav';

import Shop from './routers/shop';
import About from './routers/About';


const App = () => {
    return (
        <div>
            <Nav />
            <Shop />
            <About />
        </div>
    )
}

export default App;