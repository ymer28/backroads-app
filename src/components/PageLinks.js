import React from 'react'
import { pageLinks } from '../data';

export const PageLinks = ({ulClass, aClass}) => {
  return (
    <ul className={ulClass} id="nav-links">
			{pageLinks.map((pageLink) => {
				const { id, href, text } = pageLink;
				return (
					<li key={id}>
						<a href={href} className={aClass}> {text} </a>
					</li>
				);
			})}
		</ul>
  )
}
