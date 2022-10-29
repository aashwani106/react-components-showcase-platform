import React, { useState } from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Container wrapper */}
        <div className="container">
          {/* Navbar brand */}
          <a className="navbar-brand me-2" href="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1183/1183723.png"
              height={36}
              alt="MDB Logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />
          </a>
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/event">
                  Event Handling
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  Sign Up
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/addcomponent">
                  Add New Components
                </NavLink>
              </li>
            </ul>
            {/* Left links */}
            <div className="d-flex align-items-center">


              {
                !loggedIn ?

                  <button type="button" className="btn btn-link px-3 me-2"  onClick={() => { setLoggedIn(true)  }}>
                    Login
                  </button>
                  :
                  <button className="btn btn-danger" onClick={() => { setLoggedIn(false) }}>
                    <i class="fas fa-sign-out-alt"></i> Logout
                  </button>
              }

              <button type="button" className="btn btn-primary me-3">
                Sign up for free
              </button>
              <a className="btn btn-dark px-3" href="https://github.com/mdbootstrap/mdb-ui-kit" role="button">
                <i className="fab fa-github" />
              </a>
            </div>
          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  )
}

export default Header
