import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  StyledContactcontainer,
  StyledContactTitle,
  StyledContactForm,
  StyledContactFormInput,
  StyledContactFormTextarea,
  StyledButton,
} from './Contact.sc';

const Contact = () => {
  const form = React.useRef() as React.MutableRefObject<HTMLFormElement>;
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_x7flxg3', 'template_wus7lel', form.current, 'LjWepx4SxjRaI-FqO').then(
      (result) => {
        alert('Mesage successfully sent!');
        console.log('result.text', result.text);
      },
      (error) => {
        alert('Failed to send the message, please try again');
        console.log('error.text', error.text);
      }
    );
    e.target.reset();
  };

  return (
    <StyledContactcontainer>
      <StyledContactTitle>Contact Me</StyledContactTitle>
      <StyledContactForm ref={form} onSubmit={sendEmail}>
        <StyledContactFormInput type='text' placeholder='Name' name='user_name' required />
        <StyledContactFormInput type='email' placeholder='Enter email' name='user_email' required />
        <StyledContactFormInput type='text' placeholder='Subject' name='subject' required />
        <StyledContactFormTextarea rows={10} cols={60} name='message' placeholder='Your message' />
        <StyledButton type='submit'>Send</StyledButton>
      </StyledContactForm>
    </StyledContactcontainer>
  );
};

export default Contact;
