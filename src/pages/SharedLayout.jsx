import React from 'react';
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const SharedLayout = () => {
    return (
    <div className='container'>
        <nav className='nav'>
          <NavLink className='navLink' to="">Home</NavLink>
          <NavLink className='navLink' to="movies">Movies</NavLink>
        </nav>
        <Outlet/>
    </div>)
}

export default SharedLayout