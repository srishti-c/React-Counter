import  React from 'react';


const Nav = () => {
    return (
        <nav style={{display:'flex', justifyContent: 'space-around', alignItems:'center', backgroundColor: 'lightBlue'}}>
        <h1>Navbar</h1>
        <ul style={{display:'flex', justifyContent: 'space-around', listStyle:'none'}}>
            <li>About</li>
            <li>Shop</li>
        </ul>
        </nav>
    )
}

export default Nav;