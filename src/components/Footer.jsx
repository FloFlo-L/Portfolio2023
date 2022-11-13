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
                        <a href="#a_propos" className='footer__link'>A propos</a>
                    </li>
                    <li>
                        <a href="#competences"className='footer__link'>Compétences</a>
                    </li>
                    <li>
                        <a href="#parcour"className='footer__link'>Parcour</a>
                    </li>
                    <li>
                        <a href="#portfolio"className='footer__link'>Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact"className='footer__link'>Contact</a>
                    </li>
                </ul>

                <div className='footer__socials'>
                    <a href="https://www.linkedin.com/in/florian-lescribaa-240051210/" className='footer__social' target="_blank" rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/FloFlo-L" className='footer__social' target="_blank" rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.tiktok.com/@_floflo_dev" className='footer__social' target="_blank" rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faTiktok} /> 
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer