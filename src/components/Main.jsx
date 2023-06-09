import { useState } from 'react';
import Context from './Context';

function Main({ children }) {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [hasEnded, setHasEnded] = useState(false);

  const questions = [
    {
      question: 'Where is Captain America from?',
      choices: ['New Jercey', 'Gothem', 'Brooklyn','Queens'],
      answer: ['Brooklyn'],
    },
    {
      question: `Who is Tony Stark’s father?`,
      choices: ['Antony Stark', 'Ronald Stark', 'Thomas Stark', 'Howard Stark'],
      answer: ['Howard Stark'],
    },
    {
      question: 'What type of doctor is Doctor Strange?',
      choices: [
        'A ophthalmologist',
        'A gynecologist',
        'A surgeon',
        'A neurosurgeon',
      ],
      answer: ['A neurosurgeon'],
    },
    {
      question: `Who was responsible for King T'Chaka's death?`,
      choices: ['Zemo', 'Zatara', 'Zola', 'Shtrooker'],
      answer: ['Zemo'],
    },
    {
      question: 'Hawkeye has how many children?',
      choices: ['Two', 'Three', 'Four', 'Five'],
      answer: ['Three'],
    },
    {
      question: `Star-Lord/Peter Quill's father Ego is a what?`,
      choices: ['Idiot', 'Celestial', 'Eternal', 'Odin'],
      answer: ['Celestial'],
    },
    {
      question: 'Who is the firstborn child of Odin?',
      choices: [
        'Thor',
        'Loki',
        'Hela',
        'Agamotto',
      ],
      answer: ['Hela'],
    },
    {
      question: "Thor played what video game in Avengers: Endgame?",
      choices: ['PUBG', 'Fortnite', 'The Last of Us', 'CS Go',],
      answer: ['Fortnite'],
    },
    {
      question: `Thor's Mjolnir is made from the metal of a dying ___?`,
      choices: ['Star', 'Stone', 'Rock', 'Dwarve',],
      answer: ['Star'],
    },
    {
      question: 'Where do warriors go after dying in battle?',
      choices: ['Hell', 'Valhalla', 'Vinytsia', 'Beerland'],
      answer: ['Valhalla'],
    },
  ];

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setHasEnded(false);
  };

  const value = {
    score,
    setScore,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    hasEnded,
    setHasEnded,
    questions,
    restartQuiz,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Main;
