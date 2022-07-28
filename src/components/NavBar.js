import React from 'react';
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <>
<nav className="navbar sticky-top navbar-dark bg-dark d-flex ">
  <div className="container-fluid">
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button> */}
    <div className='d-flex'>
  
        <div className="nav-item ms-4">
          <Link to={"/"}>Home</Link>
        </div>
        <div className="nav-item ms-4">
        <Link to={"/delete"}>Delete</Link>
        </div>
      
        <div className="nav-item ms-4">
        <Link to={"/update"}>Update</Link>
        </div>
      
        <div className="nav-item ms-4">
        <Link to={"/edit"}>Edit</Link>
        </div>
      </div>
      <div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </>
  )
}

export default NavBar