import React, { useState } from 'react'
import Scored from './Scored';

function Quiz() {
  const [selected, setSelected] = useState("")
  const [submitted, setSubmitted] = useState(false);
  const [scored, setScored] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const totalQuestions = 10;
  const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;

  const answer = [
    {
      option: 1,
      name: "What does ARIA stand for in web accessibility?",
      a: "Advanced Resource Internet Application",
      b: "Accessible Rich Internet Applications",
      c: "Automated Reading Interface Access",
      d: "Application Resource Integration API",
      correct: "B"
    },
    {
      option: 2,
      name: "Which HTML element should be used for the main navigation of a website?",
      a: "<div id='nav'>",
      b: "<navigation>",
      c: "<nav>",
      d: "<menu>",
      correct: "C"
    },
    {
      option: 3,
      name: "What is the minimum touch target size recommended by WCAG for mobile accessibility?",
      a: "24x24 pixels",
      b: "44x44 pixels",
      c: "32x32 pixels",
      d: "48x48 pixels",
      correct: "B"
    },
    {
      option: 4,
      name: "Which attribute provides alternative text for images?",
      a: "title",
      b: "alt",
      c: "caption",
      d: "description",
      correct: "B"
    },
    {
      option: 5,
      name: "What does semantic HTML help improve?",
      a: "Page loading speed only",
      b: "Screen reader navigation and SEO",
      c: "Visual design",
      d: "JavaScript performance",
      correct: "B"
    },
    {
      option: 6,
      name: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
      a: "4.5 : 1",
      b: "3 : 1",
      c: "2.5 : 1",
      d: "5 : 1",
      correct: "A"
    },
    {
      option: 7,
      name: "Which color combination has the best contrast?",
      a: "Light gray on white",
      b: "Yellow on white",
      c: "Black on white",
      d: "Blue on green",
      correct: "C"
    },
    {
      option: 8,
      name: "What is the purpose of skip navigation links?",
      a: "To load pages faster",
      b: "To allow keyboard users to bypass repetitive content",
      c: "To improve SEO ranking",
      d: "To reduce server load",
      correct: "B"
    },
    {
      option: 9,
      name: "Which heading level should come after <h2>?",
      a: "<h4>",
      b: "<h1>",
      c: "<h3>",
      d: "Any heading level is fine",
      correct: "C"
    },
    {
      option: 10,
      name: "What does keyboard accessibility ensure?",
      a: "Faster typing speed",
      b: "All functionality is available without a mouse",
      c: "Better password security",
      d: "Reduced keyboard wear",
      correct: "B"
    }
  ]

  if (scored) {
    return <Scored score={score} total={answer.length} />
  }

  const handleSubmit = () => {
    setSubmitted(true)
    if (selected === answer[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < answer.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected("");
      setSubmitted(false);
    } else {
      setScored(true);
    }
  };

  const currentQ = answer[currentQuestion];

  return (
    <>
      <div className='quiz'>
        <div className='quizBox'>
          <p>Question {currentQuestion + 1} of 10</p>
          <h3>{currentQ.name}</h3>

          <div className="progressbar">
            <div
              className="progressbarfill"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <form
          className='quizForm'
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {["A", "B", "C", "D"].map((key) => (
            <button
              key={key}
              type='button'
              className={
                submitted
                  ? selected === key
                  ? currentQ.correct === key ? "correct" : "wrong" : "" : selected === key ? "selected" : ""
              }
              onClick={() => !submitted && setSelected(key)}
            >
              <p>{key}</p>
              <h6>{currentQ[key.toLowerCase()]}</h6>
            </button>
          ))}

          {!submitted ? (
            <button className='formSbmt' type='submit' disabled={!selected}>
              Submit Answer
            </button>
          ) : (
            <button
              className='formSbmt'
              type='button'
              onClick={handleNext}
            >
              {currentQuestion < answer.length - 1 ? "Next Question" : "See Results"}
            </button>
          )}
        </form>
      </div>
    </>
  )
}

export default Quiz
