import React, { useState } from 'react'
import { Link } from "react-router-dom";

const make_active = (setNavLink, link)=>{
  setNavLink(prev_val=>{
    let new_obj = []
    for(let i=0;  i<prev_val.length; i++){
      let x = {
        title: prev_val[i].title,
        path: prev_val[i].path,
        active: prev_val[i].active,
      }
      new_obj.push(x);
    }
    return new_obj;
  });
}

const NavBar = ({login_api}) => {
  const [navlink, setNavLink] = useState([
    {
      title: 'Login',
      path: '/login',
      active: function(){return window.location.pathname===this.path? true: false},
    },
    {
      title: 'Dashboard',
      path: '/dashboard',
      active: function(){return window.location.pathname===this.path? true: false},

    },
    {
      title: 'Search',
      path: '/search',
      active: function(){return window.location.pathname===this.path? true: false},

    },
    {
      title: 'Logout',
      path: '/logout',
      active: function(){return window.location.pathname===this.path? true: false},
    },

  ]);
  
  return (
    
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
    <div className="container-fluid">
      <Link className="navbar-brand"  to={login_api === false ? '/' : '/dashboard'}>Interview Review</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
            {navlink.map((e)=>{
              if(login_api === false && e.title !== 'Login' || (login_api === true && e.title === 'Login')){
                return;
              }
              return (
              <div key={e.path} onClick={(e)=>{make_active(setNavLink, e.target)}}>
                <Link 
                className={e.active()===true ? 'nav-item nav-link active': 'nav-item nav-link'} 
                aria-current="page" to={e.path}>
                  {e.title}
                </Link>
                </div>
              )
            })}
            {/* <Link className="nav-item nav-link active" aria-current="page" to={'/login'}>Login</Link>
            <Link className="nav-item nav-link" to={'/signup'}>Signup</Link>
            <Link className="nav-item nav-link" to={'/dashboard'}>Dashboard</Link> */}
        </div>
      </div>
    </div>
  </nav>
  )
}

export default NavBar
