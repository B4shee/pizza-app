import React from 'react';
import Order from './Order';

function Footer({ isOpen }) {
  return (
    <footer className="footer">
      {isOpen ? (
        <Order />
      ) : (
        <p>Sorry, we&apos;re closed</p>
      )}
    </footer>
  );
}

export default Footer;