import React, { useState } from 'react';
import { nanoid } from 'nanoid';

function Banner({ onNewTask }) {
  const [text, setText] = useState('');
  const [category, setCatogory] = useState('Outros');
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onNewTask({ id: nanoid(), text, category, logs: [] });
        }}
      >
        <select value={category} onChange={(e) => setCatogory(e.target.value)}>
          <option>Outros</option>
          <option>Casa</option>
          <option>Trabalho</option>
          <option>Esportes</option>
        </select>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default Banner;
