import "./header.css";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

export default function Header() {
  const { isAuthenticated, isAdmin } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      {isAuthenticated && (
       <Link className="profile-link" to="/profile" onClick={closeMenu}>
       Profile
     </Link>
      )}
      
      {/* Hamburger Menu Button */}
      <button 
        className={`hamburger ${isMenuOpen ? 'hamburger--active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="hamburger__line"></span>
        <span className="hamburger__line"></span>
        <span className="hamburger__line"></span>
      </button>

      <nav className={`navbar ${isMenuOpen ? 'navbar--open' : ''}`}>
        <div className="interaction-links">
          <Link className="navbar__item" to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link className="navbar__item" to="/gallery" onClick={closeMenu}>
            Gallery
          </Link>

          <Link className="navbar__item" to="/services" onClick={closeMenu}>
            Services
          </Link>
          <Link className="navbar__item" to="/products" onClick={closeMenu}>
            Products
          </Link>

          <Link className="navbar__item wishlist-link" to="/wishlist" onClick={closeMenu}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="wishlist-icon">
              <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
            </svg>
            Wishlist
          </Link>

          {isAuthenticated &&
            <Link className="navbar__item" to="/add-photo" onClick={closeMenu}>
              Add Photo
            </Link>
            }
        </div>
        {isAuthenticated &&
        <div className="user-links">
          <Link className="navbar__item" id="userLogout" to="/logout" onClick={closeMenu}>
          Logout
        </Link>
          {isAdmin && <Link className="navbar__item" id="admin" to="/admin" onClick={closeMenu}>
          Admin
        </Link>}
          

        </div>


          }
        {!isAuthenticated &&
          <div className="user-links">
            <Link className="navbar__item" to="/login" onClick={closeMenu}>
              Login
            </Link>
            <Link className="navbar__item" to="/register" onClick={closeMenu}>
              Register
            </Link>
          </div>
          }

      </nav>
    </header>
  );
}
