/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';
import { Typography } from '@mui/material';

function Cards() {

  return (

    <div className="cards_container">
          <div className="card">
            <div className="card_header">
              <h3>Source</h3>
            </div>
            <div className="card_body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit in diam</p>
            </div>
          </div>

          <div className="card">
            <div className="card_header">
              <h3>Source</h3>
            </div>
            <div className="card_body">
              <p>Joke</p>
            </div>
          </div>

          <div className="card">
            <div className="card_header">
              <h3>Source</h3>
            </div>
            <div className="card_body">
              <p>Joke</p>
            </div>
          </div>

          <div className="card">
            <div className="card_header">
              <h3>Source</h3>
            </div>
            <div className="card_body">
              <p>Joke</p>
            </div>
          </div>
          <Typography variant='h1'>
            Hello, world!
          </Typography>
        </div>

  )

}

export default Cards;

