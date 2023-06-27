import React, {useContext, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode, faAngleDown, faDatabase, faPalette, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {faHtml5, faCss3, faSass, faJs, faReact, faNodeJs, faPhp, faSymfony, faFigma, faWordpress} from '@fortawesome/free-brands-svg-icons'

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
    <section className={theme ? 'skills section' : 'skills section dark'} id="competences">
        <h2 className={theme ? 'section__title' : 'section__title dark'}>Mes compétences</h2>

        <div className="skills__container container grid">
                {/* frontend */}
                <div className={arrowOne ? 'skills__content skills__close' : 'skills__content skills__open'}>
                    <div className='skills__header'>
                        <FontAwesomeIcon icon={faCode} className='skills__icon'/>
                            <h2 className={theme ? 'skills__title' : 'skills__title dark'}>Frontend & Backend</h2>
                        <FontAwesomeIcon icon={faAngleDown} className='skills__arrow' onClick={skillsOne}/>
                    </div>
                    <div className='skills__list grid'>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className={theme ? 'skills__name' : 'skills__name dark'}>HTML</h3>
                                <FontAwesomeIcon icon={faHtml5} className={theme ? 'icon__skill' : 'icon__skill dark'}/>
                            </div>
                            <div className='skills__bar'></div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className={theme ? 'skills__name' : 'skills__name dark'}>CSS</h3>
                                <FontAwesomeIcon icon={faCss3} className={theme ? 'icon__skill' : 'icon__skill dark'}/>
                            </div>
                            <div className='skills__bar'>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className={theme ? 'skills__name' : 'skills__name dark'}>SASS</h3>
                                <FontAwesomeIcon icon={faSass} className={theme ? 'icon__skill' : 'icon__skill dark'}/>
                            </div>
                            <div className='skills__bar'>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className={theme ? 'skills__name' : 'skills__name dark'}>JS</h3>
                                <FontAwesomeIcon icon={faJs} className={theme ? 'icon__skill' : 'icon__skill dark'}/>
                            </div>
                            <div className='skills__bar'>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className={theme ? 'skills__name' : 'skills__name dark'}>PHP</h3>
                                <FontAwesomeIcon icon={faPhp} className={theme ? 'icon__skill' : 'icon__skill dark'}/>
                            </div>
                            <div className='skills__bar'>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className={theme ? 'skills__name' : 'skills__name dark'}>SQL / NoSQL</h3>
                                <FontAwesomeIcon icon={faDatabase}className={theme ? 'icon__skill' : 'icon__skill dark'}/>
                            </div>
                            <div className='skills__bar'>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Backend */}
                <div className={arrowTwo ? 'skills__content skills__close' : 'skills__content skills__open'}>
                    <div className='skills__header'>
                        <FontAwesomeIcon icon={faDatabase} className='skills__icon'/>
                        <h2 className={theme ? 'skills__title' : 'skills__title dark'}>Frameworks & CMS</h2>
                        <FontAwesomeIcon icon={faAngleDown} className='skills__arrow' onClick={skillsTwo}/>
                    </div>
                    <div className='skills__list grid'>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className={theme ? 'skills__name' : 'skills__name dark'}>REACT</h3>
                                <FontAwesomeIcon icon={faReact} className={theme ? 'icon__skill' : 'icon__skill dark'}/>
                            </div>
                            <div className='skills__bar'>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className={theme ? 'skills__name' : 'skills__name dark'}>SYMPHONY</h3>
                                <FontAwesomeIcon icon={faSymfony}className={theme ? 'icon__skill' : 'icon__skill dark'}/>
                            </div>
                            <div className='skills__bar'>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className={theme ? 'skills__name' : 'skills__name dark'}>WORDPESS</h3>
                                <FontAwesomeIcon icon={faWordpress} className={theme ? 'icon__skill' : 'icon__skill dark'}/>
                            </div>
                            <div className='skills__bar'>
                            </div>
                        </div>

                        
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className={theme ? 'skills__name' : 'skills__name dark'}>PRESTASHOP</h3>
                                <FontAwesomeIcon icon={faShoppingCart} className={theme ? 'icon__skill' : 'icon__skill dark'}/>
                            </div>
                            <div className='skills__bar'>
                            </div>
                        </div>
                    </div>
                </div>
                {/* design */}
                <div className={arrowThree ? 'skills__content skills__close design' : 'skills__content skills__open design'}>
                    <div className='skills__header'>
                        <FontAwesomeIcon icon={faPalette} className='skills__icon'/>
                            <h2 className={theme ? 'skills__title' : 'skills__title dark'}>Design</h2>
                        <FontAwesomeIcon icon={faAngleDown} className='skills__arrow' onClick={skillsThree}/>
                    </div>
                    <div className='skills__list grid'>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className={theme ? 'skills__name' : 'skills__name dark'}>FIGMA</h3>
                                <FontAwesomeIcon icon={faFigma} className={theme ? 'icon__skill' : 'icon__skill dark'}/>
                            </div>
                            <div className='skills__bar'>
                            </div>
                        </div>
                    </div>
                
                </div>
        </div>
    </section>


  )
}

export default Skills