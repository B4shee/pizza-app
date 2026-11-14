import React from 'react';

function Pizza({ pizzaObj, isFavourite, onToggleFavourite }) {
  const { name, ingredients, price, photoName, soldOut } = pizzaObj;

  return (
    <article className={`pizza ${soldOut ? 'sold-out' : ''}`}>
      <img src={photoName} alt={name} />
      <div className="pizza-details">
        <div className="pizza-header">
          <h3>{name}</h3>
          <button
            type="button"
            className={`fav-btn ${isFavourite ? 'active' : ''}`}
            onClick={() => onToggleFavourite(name)}
            aria-label={`Mark ${name} as favourite`}
          >
            {isFavourite ? '♥' : '♡'}
          </button>
        </div>
        <p className="ingredients">{ingredients}</p>
        <span className="price">{soldOut ? 'SOLD OUT' : `$${price}`}</span>
      </div>
    </article>
  );
}

export default Pizza;