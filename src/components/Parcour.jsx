import React, {useState, useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGraduationCap, faBriefcase, faCalendar} from '@fortawesome/free-solid-svg-icons'

import { ThemeContext } from '../context/ThemeContext'

const Qualifications = () => {
  const {theme} = useContext(ThemeContext)
  const [parcour, setParcour] = useState('true')
  const formations = () => {
    setParcour('true')
  }
  const experiences = () => {
    setParcour('false')
  }
  return (
    <section className={theme ? 'qualification section' : 'qualification section dark'} id="parcour">
        <h2 className={theme ? 'section__title' : 'section__title dark'}>Mon parcours</h2>

        <div className="qualification__container container">
          <div className='qualification__tabs'>
            <div className={parcour ==='true' ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"} onClick={formations}>
              <FontAwesomeIcon icon={faGraduationCap} className='qualification__icon'/>
              Formations
            </div>

            <div className={parcour ==='false' ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"} onClick={experiences}>
              <FontAwesomeIcon icon={faBriefcase}  className='qualification__icon'/>
              Expériences
            </div>
          </div>

          <div className="qualification__sections">
            {parcour==='true' ? 
            <>
            {/* formations */}
            <div className="qualification__content">
              <div className="qualification__data text__right">
                <div>
                  <h3 className={theme ? 'qualification__title' : 'qualification__title dark'}>Licence Pro Développeur Web Full Stack</h3>
                  <p className='qualification__subtitle'>Université de la Rochelle</p>
                  <div className="qualification__calendar">
                    <FontAwesomeIcon icon={faCalendar} className='qualification__calendar-icon' />
                    Sept 2022 - Août 2023
                  </div>
                </div>
                
                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>
              </div>

              <div className="qualification__data">
              <div></div>
              <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
              </div>

                <div>
                  <h3 className={theme ? 'qualification__title' : 'qualification__title dark'}>Formation Développeur Web</h3>
                  <p className='qualification__subtitle'>Openclassrooms</p>
                  <div className="qualification__calendar">
                    <FontAwesomeIcon icon={faCalendar} className='qualification__calendar-icon'/>
                    Fév 2022 - Août 2022
                  </div>
                </div>
                
              </div>

              <div className="qualification__data text__right">
                <div>
                  <h3 className={theme ? 'qualification__title' : 'qualification__title dark'}>DUT GEII</h3>
                  <p className='qualification__subtitle'>Université de l'Indre site de Châteauroux</p>
                  <div className="qualification__calendar">
                    <FontAwesomeIcon icon={faCalendar} className='qualification__calendar-icon' />
                    Sept 2019- Juillet 2021
                  </div>
                </div>
                
                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className='qualification__rounder'></span>
                  {/* <span className='qualification__line'></span> */}
                </div>
                <div>
                  <h3 className={theme ? 'qualification__title' : 'qualification__title dark'}>Baccalauréat STI2D</h3>
                  <p className='qualification__subtitle'>Lycée Jules Ferry Versailles</p>
                  <div className="qualification__calendar">
                    <FontAwesomeIcon icon={faCalendar} className='qualification__calendar-icon'/>
                    Sept 2017 - Juillet 2019
                  </div>
                </div>
                
              </div>

            </div>
            </>
            :
            <>
            {/* expériences */}
            <div className="qualification__content">
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>
                <div>
                  <h3 className={theme ? 'qualification__title' : 'qualification__title dark'}>Projets TUT Licence pro</h3>
                  <p className='qualification__subtitle'>Agence Web Truc&Pic,<br></br>Projets : Be-boosted et CampusInnov</p>
                  <div className="qualification__calendar">
                    <FontAwesomeIcon icon={faCalendar}  className='qualification__calendar-icon'/>
                    Sept 2022- Avril 2023
                  </div>
                </div>
                
              </div>

              <div className="qualification__data text__right">
                <div>
                  <h3 className={theme ? 'qualification__title' : 'qualification__title dark'}>Réalisations de 7 projets</h3>
                  <p className='qualification__subtitle'>Formation Openclassromms</p>
                  <div className="qualification__calendar">
                    <FontAwesomeIcon icon={faCalendar} className='qualification__calendar-icon'/>
                    Février - Août 2022
                  </div>
                </div>
                
                <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
              <div>
                  <span className='qualification__rounder'></span>
                  <span className='qualification__line'></span>
                </div>
                <div>
                  <h3 className={theme ? 'qualification__title' : 'qualification__title dark'}>Stage DUT GEII</h3>
                  <p className='qualification__subtitle'>ASV Packaging, Châteauroux</p>
                  <div className="qualification__calendar">
                    <FontAwesomeIcon icon={faCalendar} className='qualification__calendar-icon'/>
                    Avril - Juin 2021
                  </div>
                </div>
                
                
              </div>

              <div className="qualification__data text__right">
                <div>
                  <h3 className={theme ? 'qualification__title' : 'qualification__title dark'}>Projet TUT DUT GEII</h3>
                  <p className='qualification__subtitle'>Développer une application mobile pour paramétrer un hyperlapse</p>
                  <div className="qualification__calendar">
                    <FontAwesomeIcon icon={faCalendar} className='qualification__calendar-icon'/>
                    Nov 2019 - Fév 2020
                  </div>
                </div>

                <div>
                  <span className='qualification__rounder'></span>
                  {/* <span className='qualification__line'></span> */}
                </div>
                
              </div>

            </div>
            </>
            }
            

            
          </div>
        </div>
    </section>
  )
}

export default Qualifications