import React from 'react';
import {Link} from "react-router-dom";

import './css/navbar.css';
<nav className="navbar navbar-expand-lg navbar-dark">
  <Link className="navbar-brand" to="/">Scouts BSA Troop 485, Westlake Village, CA</Link>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarToggler">
    <ul className="navbar-nav me-auto">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Contacts
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item nav-item" href="https://www.facebook.com/pg/Troop485/about/">Facebook</a>
          <a className="dropdown-item nav-item" href="mailto:boyscouts485@gmail.com">Mail</a>
          <a className="dropdown-item nav-item" href="https://docs.google.com/forms/d/1pGRtCcQcu5Ur30JJIome3ddnbXSZjjsOUscb8tYL-rc/">Request Access</a>
        </div>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="photos">Photos</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="events">Events</Link>
      </li>
    </ul>
  </div>
</nav>
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link className="navbar-brand" to="/">Scouts Troop 485</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Contacts
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="https://www.facebook.com/pg/Troop485/about/">Facebook</a></li>
              <li><a className="dropdown-item" href="mailto:boyscouts485@gmail.com">Mail</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="https://docs.google.com/forms/d/1pGRtCcQcu5Ur30JJIome3ddnbXSZjjsOUscb8tYL-rc/">Request Access</a></li>
            </ul>
          </li>
          <li className="d-flex nav-item">
            <Link className="nav-link" to="photos">Photos</Link>
          </li>
          <li className="d-flex nav-item">
            <Link className="nav-link" to="events">Events</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
/*
<li className="nav-item">
  <Link className="nav-link" to="events">Events</Link>
</li>
*/
