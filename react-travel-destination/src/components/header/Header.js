import React from "react"
import './Header.css'
import { Link } from "react-router-dom";

function Header(){
    return(
        <div>
            <header>
                <h1>My Travel Destinations</h1>
                <Link to='/'>Home</Link>
            </header>
        </div>
    );
}

export default Header;