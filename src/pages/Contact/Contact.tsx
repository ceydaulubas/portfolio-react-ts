import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {
  StyledContactcontainer,
  StyledContactTitle,
  StyledContactForm,
  StyledContactFormInput,
  StyledContactFormTextarea,
  StyledButton,
} from './Contact.sc';
import PopUp from '../../assets/common/PopUp/PopUp';
import Modal from 'react-bootstrap/Modal';

const Contact = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const form = React.useRef() as React.MutableRefObject<HTMLFormElement>;

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_x7flxg3', 'template_wus7lel', form.current, 'LjWepx4SxjRaI-FqO').then(
      (result) => {
        console.log('result.text', result.text);
        alert('Mesage successfully sent!');
        // return (
        //   <div className='modal show' style={{ display: 'block', position: 'initial' }}>
        //     <Modal.Dialog>
        //       <Modal.Header closeButton>
        //         <Modal.Title>Modal title</Modal.Title>
        //       </Modal.Header>

        //       <Modal.Body>
        //         <p>Modal body text goes here.</p>
        //       </Modal.Body>

        //       <Modal.Footer>
        //         <Button variant='secondary'>Close</Button>
        //         <Button variant='primary'>Save changes</Button>
        //       </Modal.Footer>
        //     </Modal.Dialog>
        //   </div>
        // );
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
      /* isLoading==true ? "": "" */ /* isGetData==true ? "": "" */
    </StyledContactcontainer>
  );
};

export default Contact;
