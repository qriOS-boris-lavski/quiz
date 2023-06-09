import { useContext } from 'react';
import Context from './Context';
import Question from './Question';

function Quiz() {
  const { currentQuestionIndex, questions } = useContext(Context);
  const currentQuestion = questions[currentQuestionIndex];

  return currentQuestion ? <Question {...currentQuestion} /> : null;
}

export default Quiz;