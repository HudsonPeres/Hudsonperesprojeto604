import React, { useState } from "react";

function StartScreen({ onStart }) {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) onStart(name.trim());
    };

    return (
<div className="container text-center mt-5" style={{ maxWidth: '500px' }}>
      <h1 className="display-4 text-success">PatYdiomas</h1>
      <p className="lead">Aprenda inglês de uma forma divertida</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg w-100">
          VAMOS COMEÇAR
        </button>
      </form>
    </div>
  );





}

export default StartScreen