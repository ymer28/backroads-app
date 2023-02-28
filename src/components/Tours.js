import React from 'react'
import { Title } from './Title'
import { Tour } from './Tour'

export const Tours = () => {
  return (
		<>
			<section className="section" id="tours">
				<Title title="featured" subtitle="tours"/>
				<Tour/>
      </section>
		</>
  )
}
