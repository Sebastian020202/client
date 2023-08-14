import React from 'react';
import Card from '../Card/Card.component';
import './Cards.style.css';

function Cards({ allUsers }) {
  const videoGamesList = Array.isArray(allUsers) ? allUsers : [];

  return (
    <div className="card-list">
      {videoGamesList.map((videoGame) => (
        <Card key={videoGame.id} {...videoGame} />
      ))}
    </div>
  );
}

export default Cards;