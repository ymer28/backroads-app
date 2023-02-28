import React from 'react'
import { socialLinks } from '../data';

export const SocialLinks = ({ulClass, aClass}) => {
  return (
    <ul className={ulClass}>
      {socialLinks.map((socialLink) => {
        const {id, href, icon} = socialLink
        return (
          <li key={id}>
            <a href={href} target="_blank" className={aClass} rel="noreferrer"
            ><i className={icon}></i></a>
        </li>
        )
      })}
    </ul>
  )
}
