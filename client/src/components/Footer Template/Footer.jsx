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
                    <p>Contact Us</p>
                </div>
                <div className='certificate'>
                    <p>Certificate</p>
                </div>
            </div>
            <div className='copyright'>
            <p>All rights reserved &copy;</p>
            </div>
        </footer>
        </>
        
    );
}