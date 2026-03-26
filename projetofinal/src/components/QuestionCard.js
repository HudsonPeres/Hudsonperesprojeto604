import React from 'react';

function QuestionCard({ question, onAnswer, answerLocked, onContinue }) {
  const [selected, setSelected] = React.useState(null);

  const handleSelect = (option) => {
    if (answerLocked) return;
    setSelected(option);
    onAnswer(option);
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title text-center mb-4">{question.text}</h5>
        <div className="row g-3">
          {question.options.map((opt, idx) => (
            <div key={idx} className="col-6">
              <button
                className={`btn btn-outline-secondary w-100 py-3 ${
                  selected === opt ? 'btn-primary text-white' : ''
                }`}
                onClick={() => handleSelect(opt)}
                disabled={answerLocked}
              >
                {opt}
              </button>
            </div>
          ))}
        </div>
        {answerLocked && (
          <div className="text-center mt-4">
            <button className="btn btn-success px-4" onClick={onContinue}>
              Continuar →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionCard;