import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faQuestion } from '@fortawesome/free-solid-svg-icons'

import './Navbar.scss';

export const Navbar = () => {
  return (
    <>
    <div className="nav-bar">
            < NavLink className="icono-home" exact='true' activeclassname="active" to='/' >
                <FontAwesomeIcon icon={faBook} />
            </NavLink>
            < NavLink className="icono-about" exact='true' activeclassname="active" to='/about' >
                <FontAwesomeIcon icon={faQuestion} />
            </NavLink>
    </div>
    </>
  )
}
