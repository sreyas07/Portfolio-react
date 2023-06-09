import React from 'react'
import './about.css'
import ME from '../../assets/me.about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='about image'/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
             <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>Fresher</small>
             </article>

             <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Certifications</h5>
              <small>Meta Front-End Developer Certificate</small>
             </article>


             <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>5+ projects</small>
             </article>
          </div>
          <p>
          Frontend Developer with ability to adapt in both self-starting and collaborative environment while staying focused on achieving high-quality results under strict deadlines. Seeking a challenging position at a prestigious company that will expand my learning and build upon my developer skills
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About