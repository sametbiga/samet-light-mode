import React, { useState } from 'react'
import App from './App.jsx'
function Scored() {
    const [play,setPlay] = useState(false)
    if(play){
        return <App />
    }
  return (
    <section className='scorsec'>
        <div className='scoredWr'>
            <p>Quiz completed</p>
            <h1>You scored...</h1>
        </div>
        <div className='scoredBox'>
            <div className='minibox' >
                <div>
                    <div className='headerWr' style={{display:'flex'}}>
                        <img src="src/assets/img/Group 83.png" alt="" />
                        <h5>Accessibility</h5>
                    </div>
                </div>
                <div>
                    <h2>8</h2>
                    <p>out of 10</p>
                </div>
            </div>
            <div>
                <button 
                className='scordbtn'
                onClick={() => setPlay(true)}
                >
                    Play Again
                </button>
            </div>
        </div>
    </section>
  )
}

export default Scored
