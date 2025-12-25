import React, { useState } from 'react'

function Header() {
      const [active, setActive] = useState(false);
  return (
    <>
      <header>
        <div className='headerWr'>
            <img src="src/assets/img/Group 83.png" alt="" />
            <h5>Accessibility</h5>
        </div>
        <div className='headerBox'>
            <img src="src/assets/img/sum.png" alt="" />

            <div 
            className={`slin ${active ? "active" : ""}`}
            onClick={() => setActive(!active)}
            >
                <div className='slinn'></div>
            </div>

            <img src="src/assets/img/Vector.png" alt="" />                
        </div>
      </header>
    </>
  )
}

export default Header
