import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faTiktok} from '@fortawesome/free-brands-svg-icons'
import {faPaperPlane, faComputerMouse, faArrowDown} from '@fortawesome/free-solid-svg-icons'
import img from '../assets/img/floflo.png'

import { ThemeContext } from '../context/ThemeContext'

const Home = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <section className={theme ? 'home section' : 'home section dark'}>
       <div className="home__container container grid">
            <div className="home__content grid">
                <div className='home__social'>
                    <a href="https://www.linkedin.com/in/florian-lescribaa-240051210/" className='home__social-icon' target="_blank" rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://www.linkedin.com/in/florian-lescribaa-240051210/" className='home__social-icon' target="_blank" rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/florian-lescribaa-240051210/" className='home__social-icon' target="_blank" rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faTiktok} />
                    </a>
                </div>  

                <div className="home__image">
                    <img src={img} alt="" />
                </div>

                <div className="home__data">
                    <h1 className={theme ? 'section__title' : 'section__title dark'}>Bonjour, Je suis Florian</h1>
                    <h3 className={theme ? 'section__subtitle' : 'section__subtitle dark'}>Full Stack Développeur Junior</h3>
                    <p className={theme ? 'home__description' : 'home__description dark'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt tenetur deleniti vel alias nostrum fuga reiciendis, eos maxime non. Vitae minima consectetur earum nemo accusamus quo cupiditate officia eos vel.</p>
                    <a href="" className='button button--flex'>
                        Me contacter <FontAwesomeIcon icon={faPaperPlane} className='button__icon'/>
                    </a>
                </div>
            </div>

            <div className="home__scroll">
                <a href="" className='home__scroll-button button--flex'>
                    <FontAwesomeIcon icon={faComputerMouse} className='home__scroll-mouse'/>
                    <span className="home__scroll-name">
                    Sroller en bas
                    </span>
                    <FontAwesomeIcon icon={faArrowDown} className='home__scroll_arrow'/>
                </a>
            </div>
       </div>

    </section>
  )
}

export default Home