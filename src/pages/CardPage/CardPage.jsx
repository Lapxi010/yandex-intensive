import React, {useState} from 'react'
import { CardBook } from '../../components/CardBook/CardBook.jsx'
import { Reviev } from '../../components/Reviev/Reviev.jsx'
import styles from './CardPage.module.css'
import {mock} from '../../constants/mock'

export const CardPage = () => {
  const [dataBook, setDataBook] = useState(mock[0])

  return (
    <div className={styles.card}>
      <div className={styles.card__top}>
        <div className={styles.card__CardBookWrapper}>
          <CardBook
              rating={dataBook.rating}
              author={dataBook.author}
              price={dataBook.price}
              genre={dataBook.genres[0]}
              title={dataBook.title}
              key={dataBook.id}
              positionCounter='bottom'
          />
        </div>
        <div className={styles.card__annotation}>
          <h3 className={styles.card__annotation__header}>Аннотация</h3>
          <p className={styles.card__annotation__text}>{dataBook.annotation.substr(0, 400)}</p>
          </div>
        </div>
      <div className={styles.revievs}>
        {
          mock[0].comments.map(val => <Reviev text={val.text} key={val.id} name={val.name} rating={val.rating}/>)
        }
      </div>
    </div>
  )
} 
