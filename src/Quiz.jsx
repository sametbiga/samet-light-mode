import React, { useState } from 'react'
import Scored from './Scored';

function Quiz() {
  const [ selected , setSelected] = useState("")
  const [submitted, setSubmitted] = useState(false);
  const [scored, setScored] = useState(false);
  const answer = [
    {
      option:1,
      name:"What does ARIA stand for in web accessibility?",
      a:"Advanced Resource Internet Application",
      b:"Accessible Rich Internet Applications",
      c:"Automated Reading Interface Access",
      d:" Application Resource Integration API",
    },
    {
      option:2,
      name:"Which HTML element should be used for the main navigation of a website?",
      a:"<div id= 'nav'>",
      b:"<navigation>",
      c:"<nav>",
      d:"<menu>",
    },
    {
      option:3,
      name:"What is the minimum touch target size recommended by WCAG for mobile accessibility?",
      a:"24x24 pixels",
      b:"44x44 pixels",
      c:"32x32 pixels",
      d:"48x48 pixels",
    },
    {
      option:4,
      name:"Which attribute provides alternative text for images?",
      a:"title",
      b:"alt",
      c:"caption",
      d:"description",
    },
    {
      option:5,
      name:"What does semantic HTML help improve?",
      a:"Page loading speed only",
      b:"Screen reader navigation and SEO",
      c:"Visual design",
      d: "JavaScript performance",     
    },
    {
      option:6,
      name:"Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
      a:"4.5 : 1",
      b:"3 : 1",
      c:"2.5 : 1",
      d: "5 : 1",   
    },
    {
      option:7,
      name:"Which color combination has the best contrast?",
      a:"Light gray on white",
      b:"Yellow on white",
      c:"Black on white",
      d: "Blue on green",     
    },
    {
      option:8,
      name:"What is the purpose of skip navigation links?",
      a:"To load pages faster",
      b:"To allow keyboard users to bypass repetitive content",
      c:"To improve SEO ranking",
      d:"To reduce server load",
    },
    {
      option:9,
      name:"Which heading level should come after <h2>?",
      a:"<h4>",
      b:"<h1>",
      c:"<h3>",
      d: " Any heading level is fine",     
    },
    {
      option:10,
      name:"What does keyboard accessibility ensure?",
      a:"Faster typing speed",
      b:"All functionality is available without a mouse",
      c:"Better password security",
      d: "Reduced keyboard wear",     
    }
  ]
  if(scored){
    return <Scored />
  }
  return (
    <>
      <div className='quiz'>
        <div className='quizBox'>
            <p>Question {answer[5].option} of 10</p>
            <h3>{answer[5].name}</h3>
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
            onClick={() =>{
               setSelected("A");
               setShowQuiz(true);
              }}
            >
                <p>A</p>
                <h6>{answer[5].a}</h6>
                {!submitted ? ("") : (<img src="src/assets/img/true.png" className='truebox' />)}
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
                <h6>{answer[5].b} </h6>
                {!submitted ? ("") : (<img src="src/assets/img/false.png" className='falsebox' />)}
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
                <h6>{answer[5].c}</h6>
                {!submitted ? ("") : (<img src="src/assets/img/false.png" className='falseboxo' />)}
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
                <h6>{answer[5].d}</h6>
                {!submitted ? ("") : (<img src="src/assets/img/false.png" className='falseboxoo' />)}
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
