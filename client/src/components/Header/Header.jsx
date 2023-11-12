import './header.css';

import {Link} from 'react-router-dom'

export default function Header(){
    return (
        <header className="header">
  <a className="profile-link" href="#">
    Profile
  </a>
  <nav className="navbar">
    <div className="interaction-links">
      <Link className='navbar__item'  to='/'>Home</Link>
      {/* <a className="navbar__item" href="./home.html">
        Home
      </a> */}
      <a className="navbar__item" href="#">
        Dashboard
      </a>
      <Link className='navbar__item'  to='/services'>Services</Link>
      {/* <a className="navbar__item" href="./services.html">
        Services
      </a> */}
      <a className="navbar__item" href="./products.html">
        Products
      </a>
      <a className="navbar__item" href="#">
        Post Haircut
      </a>
    </div>
    <div className="user-links">
      <a className="navbar__item" href="./login.html">
        Login
      </a>
      <a className="navbar__item" href="./register.html">
        Register
      </a>
      <a id="userLogout" href="#">
        Logout
      </a>
    </div>
  </nav>
</header>
    );
}