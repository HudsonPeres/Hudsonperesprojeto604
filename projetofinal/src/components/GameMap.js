import React from 'react';

function GameMap({ currentLevel, currentPhase, completedPhases, onPhaseSelect }) {
  const levels = ['Fácil', 'Médio', 'Difícil'];

  const isUnlocked = (level, phase) => {
    if (level === 0 && phase === 0) return true;
    const phaseKey = `${level}-${phase}`;
   
    // Aqui vai verificar se a fase anterior está completa
    if (phase > 0 && !completedPhases.includes(`${level}-${phase-1}`)) return false;
    if (level > 0 && phase === 0 && !completedPhases.includes(`${level-1}-2`)) return false;
    return !completedPhases.includes(phaseKey);
  };

  const isCompleted = (level, phase) => {
    return completedPhases.includes(`${level}-${phase}`);
  };

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-success text-white">
        <h5 className="mb-0">Seu progresso</h5>
      </div>
      <div className="card-body">
        {levels.map((levelName, lvl) => (
          <div key={lvl} className="mb-4">
            <h6>{levelName}</h6>
            <div className="d-flex gap-2 flex-wrap">
              {[0, 1, 2].map(phase => {
                const unlocked = isUnlocked(lvl, phase);
                const completed = isCompleted(lvl, phase);
                return (
                  <button
                    key={phase}
                    className={`btn ${
                      completed
                        ? 'btn-success'
                        : unlocked
                        ? 'btn-outline-success'
                        : 'btn-secondary disabled'
                    }`}
                    onClick={() => unlocked && onPhaseSelect(lvl, phase)}
                    disabled={!unlocked}
                  >
                    Fase {phase+1}
                    {completed && ' ✓'}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameMap;