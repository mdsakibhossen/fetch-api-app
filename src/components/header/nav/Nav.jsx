import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./nav.module.css"

const Nav = ({isMenuOpen}) => {
  return (
    <nav className={`flex gap-4 transition-all ${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? `${styles.linkActive} text-purple-600 font-medium` : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          isActive ? `${styles.linkActive} text-purple-600 font-medium` : ""
        }
      >
        About
      </NavLink>
      <NavLink
        to={"/users"}
        className={({ isActive }) =>
          isActive ? `${styles.linkActive} text-purple-600 font-medium` : ""
        }
      >
        Users
      </NavLink>
      <NavLink
        to={"/products"}
        className={({ isActive }) =>
          isActive ? `${styles.linkActive} text-purple-600 font-medium` : ""
        }
      >
        Products
      </NavLink>
      <NavLink
        to={"/books"}
        className={({ isActive }) =>
          isActive ? `${styles.linkActive} text-purple-600 font-medium` : ""
        }
      >
        Books
      </NavLink>
    </nav>
  );
}

export default Nav