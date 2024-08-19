import React, { useState } from 'react';
import './quiz.css';
import photos from "../data/photos";
import questions from '../data/photos';

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizOver, setQuizOver] = useState(false); 

  const currentQuestion = questions[currentQuestionIndex];

  const selectingAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const submittingAnswer = () => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const nextQuestion = () => {
    setShowResult(false);
    setSelectedAnswer(null);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizOver(true);
    }
  };

  return (
    <div className='quiz-Maincontainer'>
      {quizOver ? (
        <div className="final-score-container">
          <h1 className="final-score font-bold">Your score is {score}/{questions.length}</h1>
          <br />
          <h1>, Thank you for playing, Happy Birthday</h1>
        </div>
      ) : (
        <>
          <div className="question h-40 items-center justify-center flex">
            Who took this photo
          </div>

          <div className="container flex flex-grow space-x-5">
            <div className="photo flex-1  p-4 mt-4">
              <img
                key={currentQuestion._id}
                src={currentQuestion.address}
                alt={`Photo ${questions._id}`}
              />
            </div>

            <div className="options flex-1 flex p-4 mt-4 rounded-3xl">
              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  className={`option ${selectedAnswer === option ? 'selected' : ''}`}
                  onClick={() => selectingAnswer(option)}
                >
                  {option}
                </button>
              ))}

              <div className="responses flex rounded-3xl">
                <button
                  className='submitButton'
                  onClick={submittingAnswer}
                  disabled={selectedAnswer === null || showResult}
                >
                  Submit
                </button>

                {showResult && (
                  <button
                    onClick={nextQuestion}
                  >
                    {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
