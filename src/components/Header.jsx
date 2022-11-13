import React, {useState, useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, 
        faFile, faBriefcase,
        faImage, faClose,
        faList, faMoon, faSun, faPalette} from '@fortawesome/free-solid-svg-icons'

import Home from './Home'


const Header = () => {
const {theme, toggleTheme} = useContext(ThemeContext)
const [activeMenu, setActiveMenu] = useState('false')
const [activeMenuColor, setActiveMenuColor] = useState('false')
const menu = () =>{
    setActiveMenu(!activeMenu)
}
const menuColor = () =>{
    setActiveMenuColor(!activeMenuColor)
}
  return (
    <header className={theme ? 'header' : 'header dark'}>
        <nav className="nav">
            <a href={Home} className={theme ? 'nav__logo' : 'nav__logo dark'}>
                Florian Lescribaa
            </a>
            {/* menu */}
            <div className={activeMenu ? 'nav__menu' : 'nav__menu show__menu'} >
                <ul className="nav__list grid">
                    <li className="nav__item" onClick={menu}>
                        <a href={Home} className={theme ? 'nav__link' : 'nav__link dark'}>
                            <FontAwesomeIcon icon={faHome} className='nav__icon' />
                            A propos
                        </a>
                    </li>
                    <li className="nav__item" onClick={menu}>
                        <a href="https://github.com" className={theme ? 'nav__link' : 'nav__link dark'}>
                            <FontAwesomeIcon icon={faUser} className='nav__icon'/>
                            Compétences
                        </a>
                    </li>
                    <li className="nav__item" onClick={menu}>
                        <a href="https://github.com" className={theme ? 'nav__link' : 'nav__link dark'}>
                            <FontAwesomeIcon icon={faFile} className='nav__icon'/>
                            Parcour
                        </a>
                    </li>
                    <li className="nav__item" onClick={menu}>
                        <a href="https://github.com" className={theme ? 'nav__link' : 'nav__link dark'}>
                        <FontAwesomeIcon icon={faBriefcase} className='nav__icon'/>
                        Portfolio
                        </a>
                    </li>
                    <li className="nav__item" onClick={menu}>
                        <a href="https://github.com" className={theme ? 'nav__link' : 'nav__link dark'}>
                        <FontAwesomeIcon icon={faImage} className='nav__icon'/>
                        Contact
                        </a>
                    </li>
                </ul>
                <FontAwesomeIcon icon={faClose} className='nav__close' onClick={menu}/>
            </div>

            {/* menu colors*/}
            <div className={activeMenuColor ? 'nav__menu nav__color' : ' nav__menu show__menu show__color'}>
                <ul className="nav__list grid">
                    <li className="nav__item" onClick={menuColor}>
                        <a href={Home} className="nav__link">
                            <span className='color bleu'></span> Bleu
                        </a>
                    </li>
                    <li className="nav__item" onClick={menuColor}>
                        <a href="https://github.com" className="nav__link">
                        <span className='color rouge'></span> Rouge
                        </a>
                    </li>
                    <li className="nav__item" onClick={menuColor}>
                        <a href="https://github.com" className="nav__link">
                        <span className='color orange'></span>  Orange
                        </a>
                    </li>
                    <li className="nav__item" onClick={menuColor}>
                        <a href="https://github.com" className="nav__link">
                        <span className='color jaune'></span> Jaune
                        </a>
                    </li>
                    <li className="nav__item" onClick={menuColor}>
                        <a href="https://github.com" className="nav__link">
                        <span className='color vert'></span> Vert
                        </a>
                    </li>
                    <li className="nav__item" onClick={menuColor}>
                        <a href="https://github.com" className="nav__link" >
                        <span className='color violet'></span> Violet
                        </a>
                    </li>
                </ul>
                <FontAwesomeIcon icon={faClose} className='nav__close' onClick={menuColor}/>
            </div>

            <div className="nav__btns">
            <FontAwesomeIcon icon={theme ? faMoon: faSun} onClick={toggleTheme} className={theme ? 'toggle button__icon' : 'toggle button__icon dark'}/>
            <FontAwesomeIcon icon={faPalette} onClick={menuColor} className='toggle button__icon'/>
                <div className={theme ? 'nav__toggle' : 'nav__toggle dark'}>
                    
                    
                    
                    <FontAwesomeIcon icon={faList}  onClick={menu} className='toggle button__icon'/>
                </div>
            </div>
        </nav>
    </header>
  );
}
export default Header