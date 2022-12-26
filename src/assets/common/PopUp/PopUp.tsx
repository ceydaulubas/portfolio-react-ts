import React, { useState } from 'react';
import { StyledPopup, StyledMessage } from './PopUp.sc';
import Button from '../Button/Button';

import Modal from 'react-bootstrap/Modal';

const PopUp = (props: any) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    // <StyledPopup>
    //   <StyledMessage>Your message has just send</StyledMessage>{' '}
    // </StyledPopup>

    <div className='modal show' style={{ display: 'block', position: 'initial' }}>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Your message has just send</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          {/* <Button color={'darkPink'} text={'Close'} onClick={() => props.setTrigger(false)} /> */}
          <button onClick={() => setIsOpen(false)}>close</button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default PopUp;
