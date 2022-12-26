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

import Spinner from '../../assets/common/Spinner/Spinner';

import Modal from 'react-bootstrap/Modal';
import Button from '../../assets/common/Button/Button';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isGetData, setIGetData] = useState(false);
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);

  const form = React.useRef() as React.MutableRefObject<HTMLFormElement>;

  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.sendForm('service_x7flxg3', 'template_wus7lel', form.current, 'LjWepx4SxjRaI-FqO').then(
      (result) => {
        setIGetData(true);
        console.log('result.text', result.text);
        setIsLoading(false);
        setIsOpenPopUp(true);
      },

      (error) => {
        alert('Failed to send the message, please try again');
        console.log('error.text', error.text);
        setIsLoading(false);
      }
    );
    e.target.reset();
  };

  return (
    <StyledContactcontainer>
      {isLoading ? <Spinner></Spinner> : ''}
      {isGetData && isOpenPopUp ? (
        <div className='modal show' style={{ display: 'block', position: 'initial' }}>
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Your message has just send</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
              <Button color={'grey'} text={'Close'} onClick={() => setIsOpenPopUp(false)} />
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      ) : (
        ''
      )}
      {!isGetData && isOpenPopUp ? (
        <div className='modal show' style={{ display: 'block', position: 'initial' }}>
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title> Your message was not sent, try again</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
              <Button color={'grey'} text={'Close'} onClick={() => setIsOpenPopUp(false)} />
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      ) : (
        ''
      )}
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
