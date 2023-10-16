"use client"
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import { getCards, getLocations } from '@/data/cards';
function CardsRoute() {
  const [cards, setCards] = useState([]);
  const [locations, setLocations] = useState([]);

  const locationsFetch = async () => {
    try {
      const infos = await getLocations();
      setLocations(infos);
    } catch (error) {
      console.error(error);
    }
  };


  const agentsFetch = async () => {
    try {
      const infos = await getCards();
      setCards(infos);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    agentsFetch();
    locationsFetch();
  }, []);



  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Todas as Cartas</h2>
      {cards.map((card) => (
        <div className={styles.cardcontainer} key={card.id}>
          <img className={styles.cardimage} src= {card.iconUrls.medium}></img>
          <p className={styles.cardname}>Name: {card.name}</p>
          <p className={styles.cardlevel}>Max Level: {card.maxLevel}</p>
          <hr />
        </div>
      ))}
    </div>
  )
};

export default CardsRoute;
