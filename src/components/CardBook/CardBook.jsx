import React, { useState } from 'react'
import styles from './CardBook.module.css'
import Minus from '../../assets/Icons-Vectorminus.svg'
import Plus from '../../assets/Icons-Vectorplus.svg'
import {StarsBlock} from "../StarsBlock/StarsBlock";


export const CardBook = ({ title, author, genre, rating, price, positionCounter }) => {
  const [counter, setCounter] = useState(0)

  return (
    <div className={styles.book}>
      <h3 className={styles.book__header}>{title}</h3>
      <div className={styles.book__wrapper}>
        <div className={styles.book__leftSide}>
          <div className={styles.book__description}>
            <span className={styles.book__description__author}>{author}</span>
            <span className={styles.book__description__genre}>{genre}</span>
            <StarsBlock rating={rating}/>
          </div>
          <span className={styles.book__price}>{price} ₽</span>
        </div>
        <div className={styles.book__rightSide} style={positionCounter === 'top' ? { alignItems: 'center', marginBottom: '25px' } : { alignItems: 'flex-end' }}>
          <div className={styles.book__counter}>
            <button disabled={counter === 0} onClick={() => {counter !== 0 ? setCounter(counter - 1) : setCounter(counter)}} className={styles.book__counter__btn}><img src={Minus} alt="minus" /></button>
            <span className={styles.book__counter__text}>{counter}</span>
            <button onClick={() => {setCounter(counter + 1)}} className={styles.book__counter__btn}><img src={Plus} alt="plus" /></button>
          </div>
        </div>
      </div>
    </div >
  )
}
