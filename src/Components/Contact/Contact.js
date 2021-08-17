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
    }]
    return (
        <section id='contact' className='contact-container'>
            <h1>Contact Me</h1>
            <hr />
            {contactInfo.map((ci,i) => {
                return (
                <div className='contact-section'>
                <label><strong>{ci.type}</strong></label>
                <p><a className='social-link' href={ci.link}>{ci.text}</a></p>
                </div>
                )
            })}
        </section>
    )
}

export default Contact
