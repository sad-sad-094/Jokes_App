/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';

function Cards(props) {

  return (

    <div className="cards_container">

      {props.list.map((joke, index) => {
        return (
          <div className="card">
            <div className="card_header">
              <h3>{joke.source}</h3>
            </div>
            <div className="card_body">
              <p>{joke.joke}</p>
            </div>
          </div>
        )
      })}

    </div>

  )

}

export default Cards;

