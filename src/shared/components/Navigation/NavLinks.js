import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavLinks.css';



function NavLinks(props){
  return (
    <ul className='nav-links'>  {/*  exact : 설정된 경로가 정확히 일치하는 경우 */}
      <li><NavLink to="/" exact>ALL USERS</NavLink></li>
      <li><NavLink to="/u1/places">MY PLACES</NavLink></li>
      <li><NavLink to="/places/new">ADD PLACE</NavLink></li>
      <li><NavLink to="/auth">AUTHENTICATE</NavLink></li>
    </ul>
  );
}

export default NavLinks