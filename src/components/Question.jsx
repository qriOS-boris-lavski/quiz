import { useContext } from 'react';
import Context from './Context';

function Question({ question, choices, answer }) {
  const { score, setScore, currentQuestionIndex, setCurrentQuestionIndex, hasEnded, setHasEnded, questions } =
    useContext(Context);

  const handleGuess = (choice) => {
    if (answer.includes(choice)) setScore(score + 1);
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setHasEnded(true);
    }
  };

  if (hasEnded) {
    return null;
  }

  return (
    <div className="question">
      <p>{question}</p>
      <div className='variants'>
      {choices.map((choice, index) => (
        <button className="variant" key={index} onClick={() => handleGuess(choice)}>
            {choice}
        </button>
      ))}
      </div>
    </div>
  );
}

export default Question;
