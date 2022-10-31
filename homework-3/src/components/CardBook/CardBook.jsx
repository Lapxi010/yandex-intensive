import React, { useState } from 'react'
import styles from './CardBook.module.css'
import StarActive from '../../assets/star.svg'
import StarNonActive from '../../assets/starNonActive.svg'
import Minus from '../../assets/Icons-Vectorminus.svg'
import Plus from '../../assets/Icons-Vectorplus.svg'


export const CardBook = ({ title, author, genre, rating, price, positionCounter }) => {
  const [counter, setCounter] = useState(0)


  const minusCount = () => {
    if (counter !== 0) {
      setCounter(counter - 1)
    }
  }

  const plusCount = () => {
    setCounter(counter + 1)
  }

  let tmp1 = [];

  for (let i = 0; i < 5; i++) {
    if (i < Number(rating.substr(0, 1))) {
      tmp1.push(<img key={i} className={styles.book__description__stars__star} src={StarActive} alt="star" />)
    } else {
      tmp1.push(<img key={i} className={styles.book__description__stars__star} src={StarNonActive} alt="star" />)
    }
  }

  return (
    <div className={styles.book}>
      <h3 className={styles.book__header}>{title}</h3>
      <div className={styles.book__wrapper}>
        <div className={styles.book__leftSide}>
          <div className={styles.book__description}>
            <span className={styles.book__description__author}>{author}</span>
            <span className={styles.book__description__genre}>{genre}</span>
            <span className={styles.book__description__stars}>
              {
                tmp1
              }
            </span>
          </div>
          <span className={styles.book__price}>{price}₽</span>
        </div>
        <div className={styles.book__rightSide} style={positionCounter === 'top' ? { alignItems: 'center', marginBottom: '25px' } : { alignItems: 'flex-end' }}>
          <div className={styles.book__counter}>
            <button disabled={counter === 0} onClick={minusCount} className={styles.book__counter__btn}><img src={Minus} alt="minus" /></button>
            <span className={styles.book__counter__text}>{counter}</span>
            <button onClick={plusCount} className={styles.book__counter__btn}><img src={Plus} alt="plus" /></button>
          </div>
        </div>
      </div>
    </div >
  )
}
