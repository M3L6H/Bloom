import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { Button, Modal } from 'semantic-ui-react';

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
      modalDetails.title = "Landing Help";

  }
  
  return (
    <>
      <Modal
        onClose={ () => setOpen(false) }
        onOpen={ () => setOpen(true) }
        open={ open }
        trigger={ trigger }
      >
        <Modal.Header>{ modalDetails.title }</Modal.Header>

      </Modal>
    </>
  );
};

export default withRouter(Demo);
