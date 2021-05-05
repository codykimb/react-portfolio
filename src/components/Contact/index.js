import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('your email is invalid...');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required..`);
            } else {
              setErrorMessage('');
            }
          } 
        
          if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
        console.log('errorMessage', errorMessage);
    }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(formState);
    //     }
      
      
    return (
        <section class="contact-form-section">
          <form id="contact-form" action="mailto:codykimbell@gmail.com" target="_blank" method="POST" enctype="multipart/form-data">
          <h1>Contact me</h1>
            <div class="contact-item">
              <label htmlFor="Name">Name:</label>
              <input type="text" name="Name" defaultValue={name} onBlur={handleChange}/>
            </div>
            <div class="contact-item">
              <label htmlFor="Email">Email address:</label>
              <input type="Email" defaultValue={email} name="email" onBlur={handleChange} />
            </div>
            <div class="contact-item">
              <label class="textarea-label" htmlFor="Message">Message:</label>
              <br/>
              <textarea name="Message" defaultValue={message} onBlur={handleChange} rows="5" />
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button class="btn" type="submit">Submit</button>
          </form>
        </section>
        );
      
    }
    
    export default ContactForm;