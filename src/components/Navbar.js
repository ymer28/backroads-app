import React from 'react'
import logo from "../images/logo.svg";
import { SocialLinks } from './SocialLinks';
import { PageLinks } from './PageLinks';
export const Navbar = () => {
    return (
    <>      
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
							<img src={logo} className="nav-logo" alt="backroads" />
              <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
              </button>
          </div>
						<PageLinks ulClass="nav-links" aClass="nav-link"/>
						<SocialLinks ulClass="nav-icons" aClass="nav-icon"/>
          </div>
      </nav>
    </>
  )
}
