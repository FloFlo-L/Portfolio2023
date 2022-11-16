import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDownload} from '@fortawesome/free-solid-svg-icons'
import CVPDF from '../assets/pdf/CV stage Florian Lescribaa.pdf'
import floflo from '../assets/img/floflo.png'

import { ThemeContext } from '../context/ThemeContext'

const About = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <section className={theme ? 'about section ' : 'about section dark'} id="a_propos">
        <h2 className={theme ? 'section__title' : 'section__title dark'}>A propos de moi</h2>

        <div className="about__container container">
            {/* <img src={floflo} alt="" className="about__img" /> */}
        
        <div className='about__data'>
            <p className="about__description">
                Après avoir compété avec succés la formation Développeur Web avec Openclassroom, j'ai maintenant intégré la Licence Pro Développeur Web Full Stack à l'Ecole du Web de l'Université de la Rochelle.
            </p>
            <div className="about__info">
                <div>
                    <span className={theme ? 'about__info-title' : 'about__info-title dark'}>+ de 2</span>
                    <span className="about__info-name">ans d'expérience</span>
                </div>

                <div>
                    <span className={theme ? 'about__info-title' : 'about__info-title dark'}>+ de 7</span>
                    <span className="about__info-name">projets réalisés</span>
                </div>
            </div>
   
            <div className='about__buttons'>
                <a download={CVPDF} href="" className='button button--flex'>
                    Télécharger mon CV<FontAwesomeIcon icon={faDownload} className='button__icon'/>
                </a>
            </div>
        </div>
        </div>
    </section>
  )
}
export default About