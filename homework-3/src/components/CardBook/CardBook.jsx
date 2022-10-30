import React from 'react'
import styles from './CardBook.module.css'
import Star from '../../star.svg'
import Minus from '../../Icons-Vectorminus.svg'
import Plus from '../../Icons-Vectorplus.svg'


export const CardBook = () => {
  return (
     <div className={styles.book}>
            <h3 className={styles.book__header}>Несносное проклятье некроманта</h3>
            <div className={styles.book__wrapper}>
            <div className={styles.book__leftSide}>
            <div className={styles.book__description}>
              <span className={styles.book__description__author}>Блинова Маргарита</span>
              <span className={styles.book__description__genre}>Фэнтези</span>
              <span className={styles.book__description__stars}>
                <img className={styles.book__description__stars__star} src={Star} alt="star"/>
                <img className={styles.book__description__stars__star} src={Star} alt="star"/>
                <img className={styles.book__description__stars__star} src={Star} alt="star"/>
                <img className={styles.book__description__stars__star} src={Star} alt="star"/>
                <img className={styles.book__description__stars__star} src={Star} alt="star"/>
              </span>
            </div>
            <span className={styles.book__price}>250 ₽</span>
            </div>
            <div className={styles.book__rightSide}>
              <div className={styles.book__counter}>
                <button className={styles.book__counter__btn}><img src={Minus} alt="minus"/></button>
                <span className={styles.book__counter__text}>0</span> 
                <button className={styles.book__counter__btn}><img src={Plus} alt="plus"/></button>
              </div>       
            </div>
            </div>
      </div>   
  )
}
