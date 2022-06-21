import React from 'react'
import {Link} from "react-router-dom"

function ContactUsPage({mailto}) {
  return (
    <div className='contactUsPage'>
        <div className='area1'>
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis </p>
        <form>
            <input type="text" placeholder='Your full name'></input>
            <input type="text" placeholder='Your email address'></input>
            <textarea type="textArea" placeholder="Write a note about your request"></textarea>
            <button type='submit'>Send</button>
        </form>
        </div>

        <div className='area2'>
            <div>
                <h2>Get in Touch</h2>
                <div>
                    <img src="/icon/mail.png" alt="mail"></img>
                    <a href="mailto:miraccumbur@gmail.com">miraccumbur@gmail.com</a>
                </div>
                <div>
                <img src="/icon/phone.png" alt="phone"></img>
                <p>+234 806 774 735</p>
                </div>
            </div>
            <div>
                <h2>Location</h2>
                <div>
                    <img src="/icon/location.png" alt="location"></img>
                    <p>88/89 Peter Odili Road, Port Harcourt, Rivers State.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ContactUsPage