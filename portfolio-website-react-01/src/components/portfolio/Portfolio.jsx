import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Little Lemon image.png'
import IMG2 from '../../assets/My Portfolio image.png'
import IMG3 from '../../assets/Weather App image.png'
import IMG4 from '../../assets/Simple portfolio image.png'
import IMG5 from '../../assets/covid care image.jpg'
import IMG6 from '../../assets/Advocate Office mngmt image.jpg'

const data=[
{
  id:1,
  image:IMG1,
  title:"Little Lemon restaurant",
  github:"https://github.com",
  demo:"https://github.com",
},
{
  id:2,
  image:IMG2,
  title:"My Portfolio",
  github:"https://github.com",
  demo:"https://github.com",
},
{
  id:3,
  image:IMG3,
  title:"Weather App",
  github:"https://github.com",
  demo:"https://github.com",
},
{
  id:4,
  image:IMG4,
  title:"Simple portfolio",
  github:"https://github.com",
  demo:"https://github.com",
},
{
  id:5,
  image:IMG5,
  title:"Covid Care Application",
  github:"https://github.com",
  demo:"https://github.com",
},
{
  id:6,
  image:IMG6,
  title:"Advocate office Management system",
  github:"https://github.com",
  demo:"https://github.com",
},
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
         {
          data.map(({id,image,title,github,demo})=>{
            return(

              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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