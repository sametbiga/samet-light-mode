import React, { useEffect, useState } from 'react'

function Header() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.classList.add("dark");
      setActive(true);
    }
  }, []);

  useEffect(() => {
    if (active) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [active]);

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
            onClick={() => setActive(prev => !prev)}
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
