import React, { useState } from 'react'
import Scored from './Scored';

function Quiz() {
  const [ selected , setSelected] = useState("")
  const [submitted, setSubmitted] = useState(false);
  const [scored, setScored] = useState(false);

  if(scored){
    return <Scored />
  }
  return (
    <>
      <div className='quiz'>
        <div className='quizBox'>
            <p>Question 6 of 10</p>
            <h3>Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?</h3>
            <div className='bar'><div></div></div>
        </div>
        <form className='quizForm'
        onSubmit={
          (e)  =>{ 
            e.preventDefault();
            setSubmitted(true);
          }}
        >
            <button 
            type='button'
            className={
              submitted ? 
              selected === "A" ? "correct" : ""
              :selected ==="A" ? "selected" : ""
            }
            onClick={() => setSelected("A")}
            >
                <p>A</p>
                <h6>4.5 : 1</h6>
            </button>
            <button 
            type='button'
            className={
              submitted ? 
              selected === "B" ? "wrong" : ""
              :selected ==="B" ? "selected" : ""
            }
            onClick={() => setSelected("B")}
            >
                <p>B</p>
                <h6>3 : 1 </h6>
            </button>
            <button
            type='button'
            className={
              submitted ? 
              selected === "C" ? "wrong" : ""
              :selected ==="C" ? "selected" : ""
            }
            onClick={() => setSelected("C")}            
            >
                <p>C</p>
                <h6>2.5 : 1</h6>
            </button>
            <button
            type='button'
            className={
              submitted ? 
              selected === "D" ? "wrong" : ""              
              :selected ==="D" ? "selected" : ""
            }
            onClick={() => setSelected("D")}            
            >
                <p>D</p>
                <h6>5 : 1</h6>
            </button>
            {!submitted ? (
              <button className='formSbmt'>
                Submit Answer
              </button>              
            ):
            (
              <button 
               className='formSbmt'
               onClick={() => setScored(true)}
              >
                Next Question
              </button>
            )}
        </form>
      </div>
    </>
  )
}

export default Quiz
