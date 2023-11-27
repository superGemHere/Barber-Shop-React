import './notFound.css'

import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="NotFound">
      <div className="notFoundHeadings">
        <h1>Error 404</h1>
        <h3>The item you are looking is not found.</h3>
      </div>

      <div className="notFoundOptions">
        <p>You may like to go:</p>
        <div className="notFoundBtns">
            <Link to={'/'} className='notFoundBtn'>Home</Link>
            <Link to={'/gallery'} className='notFoundBtn'>Gallery</Link>
        </div>
      </div>
    </main>
  );
}
