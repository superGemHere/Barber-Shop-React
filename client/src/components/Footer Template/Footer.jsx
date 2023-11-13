import './footer.css'

export default function Footer(){


    
    return(
        <>
        <footer>
            <div className="links">
                <div className='aboutUs-div'>
                <span><p>About Us </p></span>
                </div>
                <div className='contancts'>
                    <p>Contact us</p>
                </div>
                <div className='certificate'>
                    <p>Certificate</p>
                </div>
            </div>
            <div className='copyright'>
            <span>All rights reserved &copy;</span>
            </div>
        </footer>
        </>
        
    );
}