import React from 'react';

function Header({ onToggleDarkTheme }) {
  return (
    <div>
      Header <button onClick={onToggleDarkTheme}>Tema</button>{' '}
    </div>
  );
}

export default Header;
