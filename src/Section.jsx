import React, { useState } from 'react'
import Quiz from './Quiz'

export default function Section() {
    const [quiz , setQuiz] = useState(false)

    if(quiz){
        return <Quiz />
    }
  return (
    <>
        <section>           
            <div className='sectBox'>
                <p>Welcome to the</p>
                <h2>Frontend Quiz!</h2>
                <i>Pick a subject to get started.</i>
            </div>
            <div className='btnBox'>
                <button>
                    <img src="src/assets/img/html.png" alt="" />
                    <h4>HTML</h4>
                </button>
                <button
                onClick={() => setQuiz(true)}
                >
                    <img src="src/assets/img/css (2).png" alt="" />
                    <h4>CSS</h4>                    
                </button>
                <button>
                    <img src="src/assets/img/js.png" alt="" />
                    <h4>Javascript</h4>
                </button>
                <button>
                    <img src="src/assets/img/Group 83.png" alt="" />
                    <h4>Accessibility</h4>
                </button>
            </div>

        </section> 
    </>
  )
}
