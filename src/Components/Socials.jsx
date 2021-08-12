import React from 'react'
import Github from '../Assets/Svg/Github'
import Twitter from '../Assets/Svg/Twitter'
import LinkedIn from '../Assets/Svg/LinkedIn'

export default function Socials() {
  return (
    <nav className="socials">
      <a href="https://github.com/ryanjwise">
        <Github className="social-link"/>
      </a>
      <a href="https://twitter.com/RyanJWise">
        <Twitter className="social-link"/>
      </a>
      <a href="https://www.linkedin.com/in/ryanjwise/">
        <LinkedIn className="social-link"/>
      </a>
    </nav>
  )
}
