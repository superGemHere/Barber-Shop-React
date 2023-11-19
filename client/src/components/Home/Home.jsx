import './home.css'

import {Link} from 'react-router-dom'

export default function Home(){
    return ( 
        <main id="home">
  <div className="homeMsg">
    <div className="intro">
      <h1 className="color-white">Welcome to Compass</h1>
      <h4 className="color-white">
        We are #1 Barber Shop and this is possible because of our satisfied
        clients.
      </h4>
      <div className='home-buttons'>
        {/* <h2>Check out our</h2> */}
        <div className='home-button-links'>
      <Link className='buttons'  to='/services'>Services</Link>
      <Link className='buttons'  to='/Products'>Products</Link>
      </div>
      </div>
    </div>
  </div>
  {/* <h1>Hello</h1> */}
</main>
    );
}