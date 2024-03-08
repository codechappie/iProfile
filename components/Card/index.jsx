"use client";
import React, { useState } from 'react';
import styles from './card.module.scss'

const Card = ({ profile, handleSwipe }) => {
  const [dragging, setDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);

  const handleTouchStart = (e) => {
    setDragging(true);
    setOffsetX(0);
    setOffsetY(0);
    e.target.dataset.touchStartX = e.touches[0].clientX;
    e.target.dataset.touchStartY = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (dragging) {
      const touchEndX = e.touches[0].clientX;
      const touchEndY = e.touches[0].clientY;
      const touchStartX = e.target.dataset.touchStartX * 1;
      const touchStartY = e.target.dataset.touchStartY * 1;

      setOffsetX(touchEndX - touchStartX);
      setOffsetY(touchEndY - touchStartY);

      if (Math.abs(touchEndX - touchStartX) > Math.abs(touchEndY - touchStartY)) {
        if (touchEndX < touchStartX - 50) {
          console.log("left")
          setSwipeDirection('left');
        } else if (touchEndX > touchStartX + 50) {
          console.log("right")
          setSwipeDirection('right');
        } else {
          setSwipeDirection(null);
        }
      } else {
        if (touchEndY < touchStartY - 50) {
          setSwipeDirection('down');
        } else if (touchEndY > touchStartY + 50) {
          setSwipeDirection('up');
        } else {
          setSwipeDirection(null);
        }
      }
    }
  };

  const handleTouchEnd = () => {
    if (dragging) {
      setDragging(false);

      if (Math.abs(offsetX) > Math.abs(offsetY)) {
        if (offsetX < -50) {
          handleSwipe('left');
          setSwipeDirection("leftremove")
          // return;
        } else if (offsetX > 50) {
          handleSwipe('right');
          setSwipeDirection("rightremove")
        }
      } else {
        if (offsetY < -50) {
          handleSwipe('down');
        } else if (offsetY > 50) {
          handleSwipe('up');
        }
      }

      setOffsetX(0);
      setOffsetY(0);
      // setSwipeDirection(null);
    }
  };

  return (
    <div
      className={`${styles.card} ${styles[swipeDirection]}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ transform: `rotateZ(${offsetX * 0.03}deg) translate(${offsetX}px, ${offsetY}px)` }}
    >
      <img src={profile.url} alt={profile.name} />
      <h3>{profile.name}</h3>
      <div className={styles.swipeIndicator}>X:{offsetX} - Y: {offsetY}</div>
    </div>
  );
};

export default Card;
