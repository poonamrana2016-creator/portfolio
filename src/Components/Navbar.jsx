import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ menu }) => {
  return (
    <>

      <nav className="navbar navbar-expand-lg nav_bg sticky-top ">
        <div className="container-fluid py-2">
          <Link to={'/'} className="navbar-brand logo_heading" >Portfolio</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse me-5 justify-content-end" id="navbarNav">
            <ul className="navbar-nav  ">
              {menu.map((item, index) => (

                <li key={index}>
                  <Link to={item.url} className="nav-link active menu_list   " aria-current="page" >{item.name}</Link>
                </li>
              ))}

            </ul>
          </div>
        </div>
      </nav>


    </>
  )
}

export default Navbar