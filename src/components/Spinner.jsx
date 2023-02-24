/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import React from 'react';

function Spinner() {

  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
      document.body.removeChild("loader");
    })

  })

  return (

    <div className="loader">Spinner</div>

  )

}

export default Spinner;
