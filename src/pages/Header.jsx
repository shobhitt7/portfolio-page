import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header(){
  console.log("header")
    return(
        <header>
        <Link className="site-logo" to="/">shobhit_sharma</Link>
        <nav id='nav-bar'>
          <NavLink to="/about"
          >About</NavLink>

          <NavLink to="/contact"
          >Contact</NavLink>

          <NavLink to="/projects"
          >Project</NavLink>

        </nav>
      </header>
    )
}