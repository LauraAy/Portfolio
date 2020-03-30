import React from 'react'
import {
  Link
} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="navbar navbar-default navbar-fixed-top navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" >Laura Aydelotte</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to='/'>About</Link>
          <Link className="nav-item nav-link" to='/portfolio'>Portfolio</Link>
          <Link className="nav-item nav-link" to='/contact'>Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar