import "./header.css";

import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

export default function Header() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <header className="header">
      {isAuthenticated && (
        <a className="profile-link" href="#">
        Profile
      </a>
      )}
      
      <nav className="navbar">
        <div className="interaction-links">
          <Link className="navbar__item" to="/">
            Home
          </Link>

          <Link className="navbar__item" to="/gallery">
            Gallery
          </Link>

          {/* <a className="navbar__item" href="#">
        Feedback
      </a> */}
          <Link className="navbar__item" to="/services">
            Services
          </Link>
          <Link className="navbar__item" to="/products">
            Products
          </Link>

          {isAuthenticated &&
            <Link className="navbar__item" to="/add-photo">
              Add Photo
            </Link>
            }
        </div>
        {isAuthenticated &&
          <Link className="user-links" id="userLogout" to="/logout">
          Logout
        </Link>

          }
        {!isAuthenticated &&
          <div className="user-links">
            <Link className="navbar__item" to="/login">
              Login
            </Link>
            <Link className="navbar__item" to="/register">
              Register
            </Link>
          </div>
          }

      </nav>
    </header>
  );
}
