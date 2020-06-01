import React, { useState } from 'react';

function Banner() {
  const [text, setText] = useState('');
  const [category, setCatogory] = useState('Outros');
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
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
        <Button type="submit">Adicionar</Button>
      </form>
    </div>
  );
}

export default Banner;
