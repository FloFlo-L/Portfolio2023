import React, {useContext} from 'react'
//assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import imgTravaux from'../assets/img/travaux.jpg'
import TrucEtPic from '../assets/img/Truc&Pic.svg'
import Groupomania from '../assets/img/Groupomania.png'
import Booki from '../assets/img/Booki.png'
import Piiquante from '../assets/img/piiquante.png'
import Kanap from '../assets/img/canap.png'
import Panthere from '../assets/img/panthere.png'
import OhMyFood from '../assets/img/ohmyfood.png'
//carousel
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
//darkMode
import { ThemeContext } from '../context/ThemeContext'
//lottie
import Lottie from "lottie-react";
import manAnimation from "../assets/img/animation.json";


const Portfolio = () => {
    const {theme} = useContext(ThemeContext)
    
  return (
    <section className={theme ? 'portfolio section' : 'portfolio section dark'} id="portfolio">
        <h2 className={theme ? 'section__title section__portfolio__title' : 'section__title section__portfolio__title dark'}>Portfolio</h2>
        <Lottie animationData={manAnimation} className='portfolio__img'/>
        <div className="portfolio__container container">
            <div>
            <Swiper
                pagination={{
                dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='portfolio__content grid'>
                        <img src={imgTravaux} alt="" className='portfolio__img' />
                        <div className='portfolio__data'>
                            <h3 className={theme ? 'portfolio__title' : 'portfolio__title dark'}>Be-boosted</h3>
                            <p className='portfolio__description'>Réalisation du site web Be-boosted dans le cadre du projet tuteuré de la Licence Pro Développeur Web Full Stack</p>
                            {/* <a href="" className='button button--flex portfolio__button'>
                                Demo dès fini <FontAwesomeIcon icon={faArrowRight} className='button__icon'/>
                            </a>    */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='portfolio__content grid'>
                        <img src={imgTravaux} alt="" className='portfolio__img' />
                        <div className='portfolio__data'>
                            <h3 className={theme ? 'portfolio__title' : 'portfolio__title dark'}>CampusInnov</h3>
                            <p className='portfolio__description'>Refonte du site CampusInnov dans le cadre du projet tuteuré de la Licence Pro Développeur Web Full Stack</p>
                            {/* <a href="" className='button button--flex portfolio__button'>
                                Demo dès fini <FontAwesomeIcon icon={faArrowRight} className='button__icon'/>
                            </a>    */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='portfolio__content grid'>
                        <img src={TrucEtPic} alt="" className='portfolio__img' />
                        <div className='portfolio__data'>
                            <h3 className={theme ? 'portfolio__title' : 'portfolio__title dark'}>Truc&Pic</h3>
                            <p className='portfolio__description'>Création du site de notre agence Web Truc&Pic fictive dans le cadre du projet tuteuré de la Licence Pro Développeur Web Full Stack</p>
                            {/* <a href="" className='button button--flex portfolio__button'>
                                Demo dès fini <FontAwesomeIcon icon={faArrowRight} className='button__icon'/>
                            </a>    */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='portfolio__content grid'>
                        <img src={Groupomania} alt="" className='portfolio__img' />
                        <div className='portfolio__data'>
                            <h3 className={theme ? 'portfolio__title' : 'portfolio__title dark'}>Groupomania</h3>
                            <p className='portfolio__description'>Openclassromms - Projet 7 <br />Création d'un réseau social interne pour une entreprise <br />React - NodeJS - Express- MongoDB - MaterializeCss</p>
                            <a href="https://github.com/FloFlo-L/Groupomania_OC_P7" className='button button--flex portfolio__button'>
                                Github<FontAwesomeIcon icon={faArrowRight} className='button__icon'/>
                            </a>   
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='portfolio__content grid'>
                        <img src={Piiquante} alt="" className='portfolio__img' />
                        <div className='portfolio__data'>
                            <h3 className={theme ? 'portfolio__title' : 'portfolio__title dark'}>Piquante</h3>
                            <p className='portfolio__description'>Openclassromms - Projet 6 <br />Construire une API sécurisée pour une application d'avis gastronomique <br />OWASP - NodeJS - MongoDB - Express</p>
                            <a href="https://github.com/FloFlo-L/P6_OC" className='button button--flex portfolio__button'>
                                Github<FontAwesomeIcon icon={faArrowRight} className='button__icon'/>
                            </a>   
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='portfolio__content grid'>
                        <img src={Kanap} alt="" className='portfolio__img' />
                        <div className='portfolio__data'>
                            <h3 className={theme ? 'portfolio__title' : 'portfolio__title dark'}>Kanap</h3>
                            <p className='portfolio__description'>Openclassromms - Projet 5 <br />Construire un site e-commerce (Frontend)<br />JavaScript - HTML - CSS - API (Get, Post...) - LocalStorage</p>
                            <a href="https://github.com/FloFlo-L/Kanap_P5" className='button button--flex portfolio__button'>
                                Github<FontAwesomeIcon icon={faArrowRight} className='button__icon'/>
                            </a>   
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='portfolio__content grid'>
                        <img src={Panthere} alt="" className='portfolio__img' />
                        <div className='portfolio__data'>
                            <h3 className={theme ? 'portfolio__title' : 'portfolio__title dark'}>Agence la Panthère</h3>
                            <p className='portfolio__description'>Openclassromms - Projet 4 <br />Optimiser un site web existant. Améliorer le SEO l'accessibilité et les performances du site web <br />SEO - LightHouse - Accesibilité - HTML - CSS</p>
                            <a href="https://github.com/FloFlo-L/P4-Agence-La-Panthere" className='button button--flex portfolio__button'>
                                Github<FontAwesomeIcon icon={faArrowRight} className='button__icon'/>
                            </a>   
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='portfolio__content grid'>
                        <img src={OhMyFood} alt="" className='portfolio__img' />
                        <div className='portfolio__data'>
                            <h3 className={theme ? 'portfolio__title' : 'portfolio__title dark'}>Ohmyfood</h3>
                            <p className='portfolio__description'>Openclassromms - Projet 3 <br />Dynamiser une page web avec des animations CSS<br />HTML - SASS - Animations CSS</p>
                            <a href="https://github.com/FloFlo-L/FlorianLescribaa_3_25022022" className='button button--flex portfolio__button'>
                                Github<FontAwesomeIcon icon={faArrowRight} className='button__icon'/>
                            </a>   
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='portfolio__content grid'>
                        <img src={Booki} alt="" className='portfolio__img' />
                        <div className='portfolio__data'>
                            <h3 className={theme ? 'portfolio__title' : 'portfolio__title dark'}>Booki</h3>
                            <p className='portfolio__description'>Openclassromms - Projet 2<br />Transformer une maquette en site web avec HTML & CSS (Intégration Web)<br />HTML - CSS - Git - Github</p>
                            <a href="https://github.com/FloFlo-L/FlorianLescribaa_2_16022022" className='button button--flex portfolio__button'>
                                Github<FontAwesomeIcon icon={faArrowRight} className='button__icon'/>
                            </a>   
                        </div>
                    </div>
                </SwiperSlide>
                
                </Swiper>
            </div> 
        </div>
    </section>
  )
}

export default Portfolio