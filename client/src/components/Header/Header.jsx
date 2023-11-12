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

      <a className="navbar__item" href="#">
        Dashboard
      </a>
      <Link className='navbar__item'  to='/services'>Services</Link>
      <Link className='navbar__item'  to='/products'>Products</Link>


      <a className="navbar__item" href="#">
        Post Haircut
      </a>
    </div>
    <div className="user-links">
    <Link className='navbar__item'  to='/login'>Login</Link>
      <Link className='navbar__item'  to='/register'>Register</Link>
      <a id="userLogout" href="#">
        Logout
      </a>
    </div>
  </nav>
</header>
    );
}