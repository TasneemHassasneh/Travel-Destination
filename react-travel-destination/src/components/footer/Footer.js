import React from "react";
import facebook from './facebook (1).png'
import twitter from './twitter (1).png'
import './Footer.css'

function Footer(){
    return(
        <footer>
            <p>Created by Tasneem Hassasneh</p>
            <div id="footer-container">
                <a href=".."><img id='icon' src={facebook} alt='facebook'/></a>
                <a href=".."><img id='icon' src={twitter} alt='facebook'/></a>
            </div>
            
        </footer>
    );
}

export default Footer;