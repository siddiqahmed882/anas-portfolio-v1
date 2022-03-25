import React, { useState } from 'react';

import '../assets/css/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' });
  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className='contact__section'>
      <header className='contact__header'>
        <h3>Let's Talk</h3>
      </header>
      <div className='form__container'>
        <form
          className='contact__form'
          name="contact-form"
          data-netlify="true"
          method='POST'
        >
          <input type='hidden' name='form-name' value='contact-form' />
          <div className='field__wrapper first-name__wrapper'>
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              name='firstName'
              id='firstName'
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className='field__wrapper last-name__wrapper'>
            <label htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              name='lastName'
              id='lastName'
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className='field__wrapper email__wrapper'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='field__wrapper subject__wrapper'>
            <label htmlFor='subject'>Subject</label>
            <input
              type='text'
              name='subject'
              id='subject'
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className='field__wrapper message__wrapper'>
            <label htmlFor='message'>Message</label>
            <textarea
              name='message'
              id='message'
              cols='30'
              rows='5'
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <input type='submit' value='Send' className='btn btn--accent submit' />
        </form>
      </div>
    </div>
  );
};

export default Contact;
