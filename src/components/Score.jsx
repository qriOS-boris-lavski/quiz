import { useContext } from 'react';
import Context from './Context';

function Score() {
  const { score, hasEnded, restartQuiz, questions } = useContext(Context);

  return hasEnded ? (
    <div className="score">
      <h2>
        Score: {score}/{questions.length}
      </h2>
      <button className="restart" onClick={restartQuiz}>
        Restart quiz
      </button>
    </div>
  ) : null;
}

export default Score;
