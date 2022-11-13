import React, {useContext, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode, faAngleDown, faDatabase, faPalette} from '@fortawesome/free-solid-svg-icons'

import { ThemeContext } from '../context/ThemeContext'

const Skills = () => {
    const {theme, test} = useContext(ThemeContext)
    const [arrowOne, setArrowOne] = useState('false')
    const [arrowTwo, setArrowTwo] = useState('false')
    const [arrowThree, setArrowThree] = useState('false')
    const skillsOne = () =>{
        setArrowOne(!arrowOne)
    }
    const skillsTwo = () =>{
        setArrowTwo(!arrowTwo)
    }
    const skillsThree = () =>{
        setArrowThree(!arrowThree)
    }

  return (
    <section className={theme ? 'skills section' : 'skills section dark'}>
        <h2 className={theme ? 'section__title' : 'section__title dark'}>Mes compétences</h2>

        <div className="skills__container container grid">
                {/* frontend */}
                <div className={arrowOne ? 'skills__content skills__close' : 'skills__content skills__open'}>
                    <div className='skills__header'>
                        <FontAwesomeIcon icon={faCode} className='skills__icon'/>
                            <h2 className={theme ? 'skills__title' : 'skills__title dark'}>Développement Frontend</h2>
                        <FontAwesomeIcon icon={faAngleDown} className='skills__arrow' onClick={skillsOne}/>
                    </div>
                    <div className='skills__list grid'>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className={theme ? 'skills__name' : 'skills__name dark'}>HTML</h3>
                                <span className='skills__number'>50%</span>
                            </div>
                            <div className='skills__bar'>
                                <span className='skills__percentage skills__html'></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className={theme ? 'skills__name' : 'skills__name dark'}>CSS</h3>
                                <span className='skills__number'>50%</span>
                            </div>
                            <div className='skills__bar'>
                                <span className='skills__percentage skills__css'></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className={theme ? 'skills__name' : 'skills__name dark'}>SASS</h3>
                                <span className='skills__number'>50%</span>
                            </div>
                            <div className='skills__bar'>
                                <span className='skills__percentage skills__sass'></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className={theme ? 'skills__name' : 'skills__name dark'}>JS</h3>
                                <span className='skills__number'>50%</span>
                            </div>
                            <div className='skills__bar'>
                                <span className='skills__percentage skills__js'></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className={theme ? 'skills__name' : 'skills__name dark'}>REACT</h3>
                                <span className='skills__number'>50%</span>
                            </div>
                            <div className='skills__bar'>
                                <span className='skills__percentage skills__react'></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Backend */}
                <div className={arrowTwo ? 'skills__content skills__close' : 'skills__content skills__open'}>
                    <div className='skills__header'>
                        <FontAwesomeIcon icon={faDatabase} className='skills__icon'/>
                        <h2 className={theme ? 'skills__title' : 'skills__title dark'}>Développement Backend</h2>
                        <FontAwesomeIcon icon={faAngleDown} className='skills__arrow' onClick={skillsTwo}/>
                    </div>
                    <div className='skills__list grid'>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className={theme ? 'skills__name' : 'skills__name dark'}>HTML</h3>
                                <span className='skills__number'>50%</span>
                            </div>
                            <div className='skills__bar'>
                                <span className='skills__percentage skills__html'></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className={theme ? 'skills__name' : 'skills__name dark'}>CSS</h3>
                                <span className='skills__number'>50%</span>
                            </div>
                            <div className='skills__bar'>
                                <span className='skills__percentage skills__css'></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className={theme ? 'skills__name' : 'skills__name dark'}>SASS</h3>
                                <span className='skills__number'>50%</span>
                            </div>
                            <div className='skills__bar'>
                                <span className='skills__percentage skills__sass'></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className={theme ? 'skills__name' : 'skills__name dark'}>JS</h3>
                                <span className='skills__number'>50%</span>
                            </div>
                            <div className='skills__bar'>
                                <span className='skills__percentage skills__js'></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className={theme ? 'skills__name' : 'skills__name dark'}>REACT</h3>
                                <span className='skills__number'>50%</span>
                            </div>
                            <div className='skills__bar'>
                                <span className='skills__percentage skills__react'></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* design */}
                <div className={arrowThree ? 'skills__content skills__close' : 'skills__content skills__open'}>
                    <div className='skills__header'>
                        <FontAwesomeIcon icon={faPalette} className='skills__icon'/>
                            <h2 className={theme ? 'skills__title' : 'skills__title dark'}>Design</h2>
                        <FontAwesomeIcon icon={faAngleDown} className='skills__arrow' onClick={skillsThree}/>
                    </div>
                    <div className='skills__list grid'>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className={theme ? 'skills__name' : 'skills__name dark'}>FIGMA</h3>
                                <span className='skills__number'>50%</span>
                            </div>
                            <div className='skills__bar'>
                                <span className='skills__percentage skills__figma'></span>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    </section>


  )
}

export default Skills