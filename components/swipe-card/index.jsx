"use client";
import React, { useState } from 'react';
import Card from '../Card';
import styles from './swipe-card.module.scss';

const SwipeableCards = ({ profiles }) => {
  const [index, setIndex] = useState(0);

  const handleSwipe = (direction) => {
    console.log("DIR", direction, profiles)
    if (direction === 'left') {
      console.log("left")
      setIndex(index + 1);
    } else if (direction === 'right') {
      console.log("right")
      setIndex(index - 1);
    }
  };


  return (
    <div className={styles.swipeableCards}>
      {profiles.map((profile) => (
        <Card key={profile.id} profile={profile} handleSwipe={handleSwipe} />
      ))}
    </div>
  );
};

export default SwipeableCards;
