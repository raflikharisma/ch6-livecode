import { useState, useCallback } from "react";
import QUESTION from "../questionList";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestionIndex = userAnswer.length;

  const handleSelectAnswers = useCallback(function handleSelectAnswers(selectedAnswer) {
    setUserAnswer((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(() => handleSelectAnswers(null), [handleSelectAnswers]);

  const quizIsComplete = activeQuestionIndex === QUESTION.length;

  if (quizIsComplete) {
    return (
      <>
        <div id="summary">
          <img src={quizCompleteImg} alt="" />
          <h2>Congrats You have done the Quiz!!</h2>
        </div>
      </>
    );
  }

  const shuffledAnswer = [...QUESTION[activeQuestionIndex].answers];
  shuffledAnswer.sort(() => Math.random() - 0.5);
  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer timeout={3000} onTimeout={() => handleSkipAnswer} />
        <p>{QUESTION[activeQuestionIndex].text}</p>
        <ul id="answers">
          {shuffledAnswer.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswers(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
