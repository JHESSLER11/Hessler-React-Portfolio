import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers'


function ContactForm() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const {name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
              }
          } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formState)
    }
    
    return (
        <section className="form">
          <h1 className="is-size-3">Contact me:</h1>
          <form className="box flex is-justify-content-center" id="contact-form" onSubmit={handleSubmit}>
            <div className="field">
                <label className="label" htmlFor="name">Name:</label>
                <input type="text" placeholder="Your Name" defaultValue={name} onBlur={handleChange} name="name" />
            </div>
            <div className="field">
                <label className="label" htmlFor="email">Email address:</label>
                <input type="email" placeholder="your@email.com" defaultValue={email} name="email" onBlur={handleChange} />
            </div>
            <div className="field">
                <label className="label" htmlFor="message">Message:</label>
                <textarea className="textarea" placeholder="Message" name="message" defaultValue={message} onBlur={handleChange} rows="5" />
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button className="button" type="submit">Submit</button>
          </form>
        </section>
      )

}

export default ContactForm;