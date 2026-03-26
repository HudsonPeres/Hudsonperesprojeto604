import React from 'react';

function GameStatus({ playerName, level, phase, lives, completedPhases }) {
  const levelNames = ['Fácil', 'Médio', 'Difícil'];

  return (
    <div className="bg-light py-3 border-bottom">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <strong>{playerName}</strong>
        </div>
        <div>
          <span className="badge bg-success me-2">
            {levelNames[level]} • Fase {phase+1}/3
          </span>
          <span>
            {[...Array(lives)].map((_, i) => (
              <img
                key={i}
                src="https://cdn-icons-png.flaticon.com/512/753/753252.png"
                alt="vida"
                width="24"
                className="me-1"
              />
            ))}
          </span>
        </div>
        <div>
          Concluídas: {completedPhases.length}/9
        </div>
      </div>
    </div>
  );
}

export default GameStatus;