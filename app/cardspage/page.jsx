"use client"
import axios from 'axios';
import styles from './page.module.css';
import React, { useEffect, useState } from 'react';
import { getCards, getLocations } from '@/data/cards'; 
function CardsRoute() {
  const [cards, setCards] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getCards()
      .then((cardsData) => setCards(cardsData))
      .catch((error) => console.error('Error cards:', error));

    getLocations()
      .then((locationsData) => setLocations(locationsData))
      .catch((error) => console.error('Error locations:', error));
  }, []);

  return (
    <div>
      <h2>Cards</h2>
      {cards.map((card) => (
        <div className={styles.cardcontainer} key={card.id}>
          <p>Id: {card.id}</p>
          <p>Name: {card.name}</p>
          <p>Max Level: {card.maxLevel}</p>
          <p>Icon Url: {card.iconUrls.medium}</p>
          <hr />
        </div>
      ))}

      <h2>Locations</h2>
      {locations.map((location) => (
        <div key={location.id}>
          <p>Id: {location.id}</p>
          <p>Name: {location.name}</p>
          <p>Is Country: {location.isCountry}</p>
          <hr />
        </div>
      ))}
    </div>
  )
};

export default CardsRoute;
