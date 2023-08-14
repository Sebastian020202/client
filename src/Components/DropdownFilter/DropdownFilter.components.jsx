import React from 'react';
import './DropdownFilter.style.css';

const DropdownFilter = ({
  handleMaxRatingChange,
  maxRating,
  filterGameGenres,
  handleSortByName,
  handleSortByRating,
  sortBy,
  sortByRating,

}) => {
    const handleFilterByGenre = (event) => {
    filterGameGenres(event.target.value); // Pasar el valor del género seleccionado
  };
  return (
    <div className="dropdown-container">
      {/* Input para filtrar por Rating máximo */}
      <div className="dropdown-item">
        <div className="dropdown-title">Filtrar por Rating:</div>
        <input type="number" step="0.01" value={maxRating} onChange={handleMaxRatingChange} />
      </div>


      {/* Botón para ordenar alfabéticamente */}
      <div className="dropdown-item">
        <button className="dropdown-btn">Ordenar alfabéticamente</button>
        <div className="dropdown-content">
          <button onClick={handleSortByName}>
            {sortBy === 'asc' ? 'Juegos Decendente Z-A' : 'Juegos Acendente A-Z'}
          </button>
        </div>
      </div>

      {/* Botón para filtrar por busqueda en la api y en la base de datos */}
      <div className="dropdown-item">
        <button className="dropdown-btn">Creados Por Mi</button>
        <div className="dropdown-content">
          <button onClick={handleSortByRating}>
            {sortByRating ? 'Todos los juegos' : 'Creados por mi'}
          </button>
        </div>
      </div> 
    </div>
  );
};

export default DropdownFilter;
