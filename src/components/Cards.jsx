/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import React from 'react';

function Cards(props) {

  return (

    <div className="cards_container">

      {props.list.map((joke, index) => {
        return (
          <div id="card" className="card">
            <div id="cardHeader" className="card_header">
              <h3 id="jokeSource">{joke.source}</h3>
            </div>
            <div id="cardBody" className="card_body">
              <p id="joke">{joke.joke}</p>
            </div>
          </div>
        )
      })}

    </div>

  )

}

export default Cards;

