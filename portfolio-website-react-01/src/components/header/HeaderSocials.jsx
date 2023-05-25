import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/sreyas-s-962b9a266/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/sreyas07' target='_blank'><FaGithub/></a>
        <a href='https://instagram.com/sreyasxx?igshid=MzNlNGNkZWQ4Mg==' target='_blank'><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials