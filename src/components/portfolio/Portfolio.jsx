import React from 'react'
import './portfolio.css'
import Placeholder from '../../assets/placeholder.png'

const data = [
  {
    id: 1,
    image: Placeholder,
    title: 'This is a portfolio title',
    github: 'https://github.com',
    demo: 'http://dribbble.com',
  },
  {
    id: 2,
    image: Placeholder,
    title: 'This is a portfolio title',
    github: 'https://github.com',
    demo: 'http://dribbble.com',
  },
  {
    id: 3,
    image: Placeholder,
    title: 'This is a portfolio title',
    github: 'https://github.com',
    demo: 'http://dribbble.com',
  },
  {
    id: 4,
    image: Placeholder,
    title: 'This is a portfolio title',
    github: 'https://github.com',
    demo: 'http://dribbble.com',
  },
  {
    id: 5,
    image: Placeholder,
    title: 'This is a portfolio title',
    github: 'https://github.com',
    demo: 'http://dribbble.com',
  },
  {
    id: 6,
    image: Placeholder,
    title: 'This is a portfolio title',
    github: 'https://github.com',
    demo: 'http://dribbble.com',
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
            <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio