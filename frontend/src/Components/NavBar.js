import React from 'react'


const NavBar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
            <a className="nav-item nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-item nav-link" href="#">Features</a>
            <a className="nav-item nav-link" href="#">Pricing</a>
            <a className="nav-item nav-link disabled">Disabled</a>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default NavBar
