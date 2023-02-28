import React from 'react'
import { SocialLinks } from './SocialLinks'
import { PageLinks } from './PageLinks'

export const Footer = () => {
  return (
    <>
      <footer className="section footer">
        <PageLinks ulClass="footer-links" aClass="footer-link"/>
        <SocialLinks ulClass="footer-icons" aClass="footer-icon"/>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>    
    </>
  )
}
