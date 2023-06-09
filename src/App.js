import './App.css';
import Main from './components/Main';
import Quiz from './components/Quiz';
import Score from './components/Score';

function App() {
  return (
    <div className="App">
      <h1 className='title'>Marvel quiz</h1>
      <Main>
        <Quiz />
        <Score />
      </Main>
    </div>
  );
}

export default App;
