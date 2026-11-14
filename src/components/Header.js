import React from 'react';

function Header({ isOpen }) {
  return (
    <header className="header">
      <h1>Andy&apos;s Pizza Co.</h1>
      {isOpen && (
        <p className="tagline">
          Authentic Italian cuisine, all from our stone oven
        </p>
      )}
    </header>
  );
}

export default Header;