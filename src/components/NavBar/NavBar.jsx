import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <header>

      <Link to='/'>
        <img class="loguito" src='../img/loguito.png' width="70" />
      </Link>
      <nav>
        <li>
          <NavLink to={'/'}> Todos los productos </NavLink>
        </li>

        <li>
          <NavLink to={`/categoria/2`}>Sin Tacc</NavLink>
        </li>
        <li>
          <NavLink to={`/categoria/3`}>Vegano </NavLink>
        </li>

        <li>
          <NavLink to={`/categoria/1`}>A granel </NavLink>
        </li>
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar

