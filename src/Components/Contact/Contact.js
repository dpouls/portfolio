import React from 'react'
import './Contact.css'

function Contact() {
    const contactInfo = [{
        type: 'Email',
        text: 'dallinpoulson@gmail.com',
        link: 'mailto: dallinpoulson@gmail.com'
    },{
        type: 'Phone',
        text: '385-200-4172',
        link: 'tel:3852004172'
    },
    {
        type: 'GitHub',
        text: 'github.com/dpouls',
        link: 'https://github.com/dpouls'
    },
    {
        type: 'LinkedIn',
        text: 'linkedin.com/in/dallinpoulson',
        link: 'www.linkedin.com/in/dallinpoulson'
    },
    {
        type: 'CodeWars',
        text: 'codewars.com/users/dpouls',
        link: 'https://www.codewars.com/users/dpouls'
    },
    {
        type: 'Facebook',
        text: 'facebook.com/dpouls/',
        link: 'https://www.facebook.com/dpouls/'
    },
    {
        type: 'Instagram',
        text: 'instagram.com/dpouls/',
        link: 'https://www.instagram.com/dpouls/'
    },]
    return (
        <section id='contact' className='contact-container'>
            <h1>Contact Me</h1>
            <hr />
            {contactInfo.map((ci,i) => {
                return (
                <div className='contact-section'>
                <label className='contact-type'><strong>{ci.type}:</strong></label>
                <p className='contact-text'><a target="_blank" rel="noreferrer" className='social-link' href={ci.link}>{ci.text}</a></p>
                </div>
                )
            })}
        </section>
    )
}

export default Contact
