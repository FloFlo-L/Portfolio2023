import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faTiktok, faGit} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
        <div className='footer__bg'>
            <div className='footer__container container grid'>
                <div>
                    <h2 className='footer__title'>Florian Lescribaa</h2>
                    <p className='footer__subtitle'>Développeur Web Full Stack Junior</p>
                </div>

                <ul className='footer__links'>
                    <li>
                        <a href="" className='footer__link'>About</a>
                    </li>
                    <li>
                        <a href=""className='footer__link'>Compétences</a>
                    </li>
                    <li>
                        <a href=""className='footer__link'>Portfolio</a>
                    </li>
                    <li>
                        <a href=""className='footer__link'>Me contacter</a>
                    </li>
                </ul>

                <div className='footer__socials'>
                    <a href="" className='footer__social'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="" className='footer__social'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="" className='footer__social'>
                        <FontAwesomeIcon icon={faTiktok} /> 
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer