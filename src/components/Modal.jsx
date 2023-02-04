/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Modal() {

  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (

    <div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        <DialogTitle id="alert-dialog-title">
          {"Welcome to 'Get Your Joke' app!"}
        </DialogTitle>

        <DialogContent>

          <DialogContentText id="alert-dialog-description">
            Here, you'll have two options to get your joke, one from ICanHazDadJoke and other one from ChuckNorris.io.
            If you want a Dad Joke one, you just need to click the 'Dad Joke' button. Instead you want a Chuck one, first click the 'Chuck Norris' button, then you'd choose if you wants a random joke, if you want random one from a specific category or if you want  a free text search for a joke. For this, please click the correct button and complete the actions.
          </DialogContentText>

        </DialogContent>

        <DialogActions>

          <Button onClick={handleClose}>
            Start
          </Button>

        </DialogActions>

      </Dialog>

    </div>

  )

}

export default Modal;

