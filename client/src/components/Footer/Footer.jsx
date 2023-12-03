import './footer.css'


import {Link, Route, Routes} from 'react-router-dom'

export default function Footer(){


    
    return(
        <>
        <footer>
            <div className="links">
                <div className='aboutUs-div'>
                <Link to='/about-us'>About Us</Link>
                </div>
                <div className='contancts'>
                <Link to='/contact-us'>Contact Us</Link>
                </div>
            </div>
            <div className='copyright'>
            <p>All rights reserved &copy;</p>
            </div>
        </footer>
        </>
        
    );
}