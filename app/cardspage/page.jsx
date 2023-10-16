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


  //card.id !== 26000071 || card.id !== 26000075 || card.id !== 26000081 &&
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Todas as Cartas</h2>
      <div className={styles.cardsbox}>
        {
          cards.map((card) =>

          card.id === 26000071 ? null : card.id === 26000075 ? null : card.id == 26000082 ? null : card.id === 26000081 ? null :
            (
              <div className={styles.cardcontainer} key={card.id}>
                <img className={styles.cardimage} src={card.iconUrls.medium}></img>
                <p className={styles.cardname}>Name: {card.name}</p>
                <p className={styles.cardlevel}>Max Level: {card.maxLevel}</p>
              </div>
            ))}
      </div>
    </div>
  )
};

export default CardsRoute;
