import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  const currentHour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = currentHour >= openHour && currentHour < closeHour;

  return (
    <div className="container">
      <Header isOpen={isOpen} />
      <Menu />
      <Footer isOpen={isOpen} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;