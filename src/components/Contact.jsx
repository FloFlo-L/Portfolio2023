import React, {useContext, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone, faEnvelope, faLocationDot, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
//email
import emailjs from '@emailjs/browser';
//darkTheme
import { ThemeContext } from '../context/ThemeContext'
//notification

import { Store } from 'react-notifications-component';


export const Contact = () => {
    //dakTheme
    const {theme} = useContext(ThemeContext)
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    //notification
    function notificationOK() {
        }
       
    //email
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        if(nom.length === 0 || prenom.length === 0 || email.length === 0|| message.length === 0 ){
            Store.addNotification({
                title: "Erreur",
                message: "Vous avez oublié de remplir un ou plusieurs champ(s) du formulaire...",
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                duration: 5000,
                onScreen: true
                }
            })
       }else{
        emailjs.sendForm('service_dwd0hhc', 'template_38jqpud', form.current, 'yH__73X88Jvz0mIvB')

        .then((result) => {
            console.log(result.text);
            Store.addNotification({
                title: "Succès",
                message: "Votre message a bien été envoyé ✅ !!! A bientôt 👋",
                type: "success",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                duration: 5000,
                onScreen: true
                }
            })
            setNom("");
        }, (error) => {
            console.log(error.text);
            Store.addNotification({
                title: "Erreur",
                message: "Erreur Crtique ❌ !!! Réessayez plus tard ",
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                duration: 5000,
                onScreen: true
                }
            })
        });
       }
    
       
    };

  return (
    <section className={theme ? 'contact section' : 'contact section dark'} id="contact">
        <h2 className={theme ? 'section__title' : 'section__title dark'}>Me contacter</h2>
        <div className='contact__container container grid'>
            <div>
                <div className="contact__information">
                    <FontAwesomeIcon icon={faPhone} className='contact__icon'/>

                    <div>
                        <h3 className={theme ? 'contact__title' : 'contact__title dark'}>Téléphone</h3>
                        <p className='contact__subtitle'>06 24 88 38 16</p>
                    </div>
                </div>
                <div className="contact__information">
                    <FontAwesomeIcon icon={faEnvelope} className='contact__icon'/>

                    <div>
                        <h3 className={theme ? 'contact__title' : 'contact__title dark'}>Email</h3>
                        <p className='contact__subtitle'>florian.lescribaa@gmail.com</p>
                    </div>
                </div>
                <div className="contact__information">
                    <FontAwesomeIcon icon={faLocationDot} className='contact__icon'/>

                    <div>
                        <h3 className={theme ? 'contact__title' : 'contact__title dark'}>Localisation</h3>
                        <p className='contact__subtitle'>Paris / La Rochelle</p>
                    </div>
                </div>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <div className='contact__inputs grid'>
                    <div className={theme ? 'contact__content' : 'contact__content dark'}>
                        <label htmlFor="" className={theme ? 'contact__label' : 'contact__label dark'}>Nom</label>
                        <input type="text" name="user_name" className={theme ? 'contact__input' : 'contact__input dark'} onChange={e =>setNom(e.target.value)}/>
                    </div>
                    <div className={theme ? 'contact__content' : 'contact__content dark'}>
                        <label htmlFor=""  className={theme ? 'contact__label' : 'contact__label dark'}>Prénom</label>
                        <input type="text" name="user_firstname" className={theme ? 'contact__input' : 'contact__input dark'} onChange={e =>setPrenom(e.target.value)}/>
                    </div>
                    <div className={theme ? 'contact__content' : 'contact__content dark'}>
                        <label htmlFor="" className={theme ? 'contact__label' : 'contact__label dark'}>Email</label>
                        <input type="email" name="user_email"className={theme ? 'contact__input' : 'contact__input dark'} onChange={e =>setEmail(e.target.value)}/>
                    </div>
                    <div className={theme ? 'contact__content' : 'contact__content dark'}>
                        <label htmlFor=""  className={theme ? 'contact__label' : 'contact__label dark'}>Message</label>
                        <textarea name="message" id="" cols="0" rows="7" className={theme ? 'contact__input' : 'contact__input dark'} onChange={e =>setMessage(e.target.value)}></textarea>
                    </div>
                </div>
                <input type="submit" value="Envoyer message" className='button button--flex send__message'/>
            </form>
        </div>
    </section>
  )
}
