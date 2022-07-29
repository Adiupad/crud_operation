import React from "react";

import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <>
      <nav className="navbar sticky-top navbar-dark bg-dark d-flex ">
        <div className="container-fluid">
          <div className="d-flex">
            <div className="nav-item ms-4">
              <Link to={"/"}>Home</Link>
            </div>
            <div className="nav-item ms-4">
              <Link to={"/add"}>Add Employee</Link>
            </div>
          </div>
          <div>
          </div>
        </div>
      </nav>

    </>
  );
};

export default NavBar;
