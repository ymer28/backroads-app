import React from 'react'
import { Title } from './Title'
import { Service } from './Service'

export const Services = () => {
  return (
		<>
      <section className="section services" id="services">
        <Title title="our" subtitle="services" />
        <Service/>
      </section>
		</>
  )
}
