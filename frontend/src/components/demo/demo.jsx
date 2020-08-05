import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { Button, Header, Image, Modal } from 'semantic-ui-react';

import demoLanding from '../../images/demo-landing.png';

const Demo = ({ location }) => {
  const [open, setOpen] = useState(false);

  // Trigger for the modal
  const trigger = (
    <Button
      className="demo-button"
      circular
      color="violet"
      icon="help"
    />
  );

  const modalDetails = {};
  
  // eslint-disable-next-line
  switch(location.pathname) {
    case "/landing":
      modalDetails.title = "Home Help";
      modalDetails.image = demoLanding;
      modalDetails.description = (
        <p>The home page is the heart of the app. Here you can complete tasks, redeem rewards, and more.</p>
      );
      break;
  }
  
  return (
    <>
      <Modal
        onClose={ () => setOpen(false) }
        onOpen={ () => setOpen(true) }
        open={ open }
        trigger={ trigger }
      >
        <Modal.Header>Bloom Demo</Modal.Header>
        <Modal.Content image>
          <Image size="medium" src={ modalDetails.image } wrapped />
          <Modal.Description>
            <Header>{ modalDetails.title }</Header>
            { modalDetails.description }
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default withRouter(Demo);
