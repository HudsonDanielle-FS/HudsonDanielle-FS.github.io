import React from 'react'

const CTA = () => {
  return (
    <div className='cta'>
        {/* resume pdf goes in the href below without '' */}
        {/* will have to import cv from assets folder */} 
        <a href={''} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA