import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css'
import click from '../audio/click.wav'
//import ina from '../images/ina.png'

function playClick() {
    var snd = new Audio(click)
    snd.play();
    snd.currentTime=0;
  }

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm('service_wwtjo08', 'template_s28wrcj', form.current, {
            publicKey: 'D9RL1P0KIG3FnksTi',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            e.target.reset();
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };


    return (
        <div className="padding">
            <p className='bold font'>WORK EMAIL:&nbsp;&nbsp; <span className='font accent underline'>vovincent32@gmail.com</span></p>

            <div className='contact-container'>
                <p className='bold font'>QUICK CONTACT:</p>

                <form className='contact' ref={form} onSubmit={sendEmail}>
                    <div className='inputs'>
                        <input name='from_name' placeholder='your name' className='input' required></input>
                        <input name='email_id' placeholder='your email' className='input' required></input>
                        <input name='message' placeholder='your subject' className='input' required></input>
                    </div>
                    <textarea placeholder="what's up?" className='input area' required></textarea>
                    <input type='submit' className='button' value='submit' onClick={playClick}></input>
                </form>
            </div>
        </div>

    )
}