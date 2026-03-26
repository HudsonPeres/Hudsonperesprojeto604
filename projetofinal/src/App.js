import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import StartScreen from './components/StartScreen';
import GameMap from './components/GameMap';
import QuestionCard from './components/QuestionCard';
import GameStatus from './components/GameStatus';
import level1 from './data/level1';
import level2 from './data/level2';
import level3 from './data/level3';
import correctSound from './sounds/correct.mp3';
import wrongSound from './sounds/wrong.mp3';

const levelBank = {
  0: level1,
  1: level2,
  2: level3  
};

function App() {
  const [playerName, setPlayerName] = useState('');  
  const [gameStarted, setGameStarted] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [completedPhases, setCompletedPhases] = useState([]);  
  const [lives, setLives] = useState(5);
  const [phaseQuestions, setPhaseQuestions] = useState([]);  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answerLocked, setAnswerLocked] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);

  // Carrega as perguntas aleatórias do nível atual
  const loadPhaseQuestions = (level) => {
    const bank = levelBank[level];
    const shuffled = [...bank].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  };

  // Inicia uma fase
  const startPhase = (level, phase) => {
    const questions = loadPhaseQuestions(level);
    setPhaseQuestions(questions);
    setCurrentQuestionIndex(0);
    setAnswerLocked(false);
  };

  const handleStartGame = (name) => {
    setPlayerName(name);
    setGameStarted(true);
    setCurrentLevel(0);
    setCurrentPhase(0);
    setCompletedPhases([]);
    setLives(5);
    setGameOver(false);
    setGameComplete(false);
    startPhase(0, 0);
  };

  // Verifica se todas as fases foram concluídas
  useEffect(() => {
    const totalPhases = 9;
    if (completedPhases.length === totalPhases && totalPhases > 0) {
      setGameComplete(true);
    }
  }, [completedPhases]); 

  // Avança para a próxima pergunta ou próxima fase
  const goToNext = () => {
    if (currentQuestionIndex + 1 < phaseQuestions.length) {
      setCurrentQuestionIndex(prev => prev + 1);
      setAnswerLocked(false);
    } else {
      const phaseKey = `${currentLevel}-${currentPhase}`;
      if (!completedPhases.includes(phaseKey)) {
        setCompletedPhases(prev => [...prev, phaseKey]);
      }
      
      if (currentPhase + 1 < 3) {
        setCurrentPhase(prev => prev + 1);
        startPhase(currentLevel, currentPhase + 1);  
      } else if (currentLevel + 1 < 3) {
        setCurrentLevel(prev => prev + 1);
        setCurrentPhase(0);
        startPhase(currentLevel + 1, 0);
      }
    
    }
  };

  const handleAnswer = (selected) => {  
    if (answerLocked) return;
    const currentQuestion = phaseQuestions[currentQuestionIndex];
    const isCorrect = selected === currentQuestion.correct;

    
/*    const audio = new Audio();
    if (isCorrect) {
      audio.src = '/sounds/correct.mp3';  
    } else {
      audio.src = '/sounds/wrong.mp3';    
      setLives(prev => prev - 1);
    }
    audio.play();
*/
    setAnswerLocked(true);


const audio = new Audio();
if (isCorrect) {
  audio.src = correctSound;
} else {
  audio.src = wrongSound;
  setLives(prev => prev - 1);
}
audio.play().catch(error => {
  console.log('Erro ao tocar som:', error);
});
    // Verifica o contador de vidas e se não tiver mais nenhuma, dá game over
    if (!isCorrect && lives - 1 === 0) {
      setGameOver(true);
    }
  };

  // Reinicia o jogo
  const resetGame = () => {
    setGameStarted(false);
    setPlayerName('');
    setGameOver(false);
    setGameComplete(false);
  };

  if (gameOver) {
    return (
      <div className="container text-center mt-5">
        <h2>Boa sorte na próxima tentativa.</h2>
        <p>Quer ajuda? Chama a professora Paty:</p>
        <a
          href="https://www.instagram.com/patricial1nhares/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Instagram da Prof. Paty
        </a>
         <br />
        <button className="btn btn-success mt-3" onClick={resetGame}>
          Tentar novamente
        </button>
      </div>
    );
  }

  // Mensagem final ao completar tudo
  if (gameComplete) {
    return (
      <div className="container text-center mt-5">
        <h2>Parabéns, {playerName}!</h2>
        <p>Agora para mais aulas contacte a Professora Paty:</p>
        <a
          href="https://www.instagram.com/patricial1nhares/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Instagram da Prof. Paty
        </a>
        <br />
        <button className="btn btn-secondary mt-3" onClick={resetGame}>
          Jogar novamente
        </button>
      </div>
    );
  }

  if (!gameStarted) {
    return <StartScreen onStart={handleStartGame} />;
  }

  // Jogo em andamento
  return (
    <div className="App">
      <GameStatus
        playerName={playerName}
        level={currentLevel}
        phase={currentPhase}
        lives={lives}
        completedPhases={completedPhases}  
      />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4">
            <GameMap
              currentLevel={currentLevel}
              currentPhase={currentPhase}
              completedPhases={completedPhases}  
              onPhaseSelect={(level, phase) => {
                const phaseKey = `${level}-${phase}`;
                const previousPhasesCompleted = (level === 0 && phase === 0) ||
                  completedPhases.includes(`${level}-${phase-1}`) ||
                  (level > 0 && completedPhases.includes(`${level-1}-2`));
                if (previousPhasesCompleted && !completedPhases.includes(phaseKey)) {
                  setCurrentLevel(level);
                  setCurrentPhase(phase);
                  startPhase(level, phase);
                }
              }}
            />
          </div>
          <div className="col-md-8">
            {phaseQuestions.length > 0 && (  
              <QuestionCard
                question={phaseQuestions[currentQuestionIndex]}  
                onAnswer={handleAnswer}
                answerLocked={answerLocked}
                onContinue={goToNext}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;