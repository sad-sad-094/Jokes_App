/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import React, { useEffect, useState } from 'react';


function Footer() {

  const [currentYear, setCurrentYear] = useState(2022);

  useEffect(() => {
    let year = new Date().getFullYear();
    setCurrentYear(year);
  }, [setCurrentYear])

  return (

    <>

      <div>
        <div className="footer">
          <div>
            <h1>Sebastian Aguirre Duque</h1>
          </div>
          <div>
            <h1><span>&#169;</span></h1>
          </div>
          <div><h1>{currentYear}</h1></div>
        </div>
      </div>

    </>

  )

}

export default Footer;
