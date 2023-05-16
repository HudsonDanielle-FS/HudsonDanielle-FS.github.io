import React from 'react'
import './about.css'
import AboutMePic from '../../assets/AboutMePic.jpg'
import { FaAward } from 'react-icons/fa'
import { MdOutlineSchool } from 'react-icons/md'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutMePic} alt='About' />
          </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward  className='about__icon'/>
                <h5>Experience</h5>
                <small>2+ Academic Years of Experience</small>
              </article>

              <article className='about__card'>
                <MdOutlineSchool  className='about__icon'/>
                <h5>GPA</h5>
                <small>3.91</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary  className='about__icon'/>
                <h5>Projects</h5>
                <small>20+ Completed</small>
              </article>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis tempore error vero blanditiis eius officiis explicabo consectetur deleniti veritatis, earum dolore unde accusamus. Nam atque harum necessitatibus in quod? Minima.
              </p>

              <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About