import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const styles = {
  nav: {
    height: '3rem',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    background: 'hotpink'
  }
}

export default () => (
  <div style={styles.nav}>
    <NavLink exact to="/" className="link">
      Room
    </NavLink>
    <NavLink to="/game" className="link">
      Game
    </NavLink>
    <NavLink to="/log" className="link">
      Log
    </NavLink>
  </div>
)
