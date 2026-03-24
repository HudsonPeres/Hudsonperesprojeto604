import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import level1 from './data/level1';
import level2 from './data/level2';
import level3 from './data/level3';

const levelBank = {
  0: level1,
  1: level2,
  3: level3
};

function App() {
  const [playerName, SetPlayerName] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [completePhases, setCompletePhases] = useState([]);
  const [lives, setLives] = useState(5);
  const [phaseQuestion, setPhaseQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQueswtionIndex] = useState(0);
  const [answerLocked, setAnswerLocked] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);

  const loadPhaseQuestions = (level) => {
    const bank = levelBank[level] => {

    }
  }
 
}

export default App;
