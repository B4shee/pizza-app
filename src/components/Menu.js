import React, { useState } from 'react';
import Pizza from './Pizza';
import { pizzaData } from '../data';

function Menu() {
  const [searchQuery, setSearchQuery] = useState('');
  const [favourites, setFavourites] = useState([]);
  const [showOnlyFavourites, setShowOnlyFavourites] = useState(false);

  const handleToggleFavourite = (pizzaName) => {
    setFavourites((prev) =>
      prev.includes(pizzaName)
        ? prev.filter((name) => name !== pizzaName)
        : [...prev, pizzaName]
    );
  };

  const filteredPizzas = pizzaData.filter((pizza) => {
    const matchesSearch =
      pizza.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pizza.ingredients.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFav = showOnlyFavourites
      ? favourites.includes(pizza.name)
      : true;

    return matchesSearch && matchesFav;
  });

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* Extended Feature: Search & Favourites Filter */}
      <div className="menu-controls">
        <input
          type="text"
          placeholder="Search by pizza or ingredient..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
          aria-label="Search menu"
        />
        <button
          type="button"
          className={`filter-btn ${showOnlyFavourites ? 'active' : ''}`}
          onClick={() => setShowOnlyFavourites((prev) => !prev)}
        >
          {showOnlyFavourites ? 'Show All' : `Favourites (${favourites.length})`}
        </button>
      </div>

      {filteredPizzas.length > 0 ? (
        <section className="pizzas" aria-label="Pizza list">
          {filteredPizzas.map((pizza) => (
            <Pizza
              key={pizza.name}
              pizzaObj={pizza}
              isFavourite={favourites.includes(pizza.name)}
              onToggleFavourite={handleToggleFavourite}
            />
          ))}
        </section>
      ) : (
        <p className="empty-message">
          No pizzas match your filter. Try adjusting your search!
        </p>
      )}
    </main>
  );
}

export default Menu;