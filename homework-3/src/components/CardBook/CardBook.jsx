import React, { useState } from 'react'
import styles from './CardBook.module.css'
import Star from '../../assets/star.svg'
import Minus from '../../assets/Icons-Vectorminus.svg'
import Plus from '../../assets/Icons-Vectorplus.svg'


export const CardBook = () => {
  const [counter, setCounter] = useState(0)


  const minusCount = () => {
    if (counter !== 0) {
      setCounter(counter - 1)
    }
  }

  const plusCount = () => {
    setCounter(counter + 1)
  }

  return (
    <div className={styles.book}>
      <h3 className={styles.book__header}>Несносное проклятье некроманта</h3>
      <div className={styles.book__wrapper}>
        <div className={styles.book__leftSide}>
          <div className={styles.book__description}>
            <span className={styles.book__description__author}>Блинова Маргарита</span>
            <span className={styles.book__description__genre}>Фэнтези</span>
            <span className={styles.book__description__stars}>
              <img className={styles.book__description__stars__star} src={Star} alt="star" />
              <img className={styles.book__description__stars__star} src={Star} alt="star" />
              <img className={styles.book__description__stars__star} src={Star} alt="star" />
              <img className={styles.book__description__stars__star} src={Star} alt="star" />
              <img className={styles.book__description__stars__star} src={Star} alt="star" />
            </span>
          </div>
          <span className={styles.book__price}>250 ₽</span>
        </div>
        <div className={styles.book__rightSide}>
          <div className={styles.book__counter}>
            <button disabled={counter === 0} onClick={minusCount} className={styles.book__counter__btn}><img src={Minus} alt="minus" /></button>
            <span className={styles.book__counter__text}>{counter}</span>
            <button onClick={plusCount} className={styles.book__counter__btn}><img src={Plus} alt="plus" /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
