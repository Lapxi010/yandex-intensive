import React, {useEffect} from 'react'
import { CardBook } from '../../components/CardBook/CardBook.jsx'
import styles from './CardPage.module.css'
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectBookById} from "../../store/books/selectors";
import {BlockReviews} from "../../components/BlockReviews/BlockReviews";

export const CardPage = () => {
  const {id} = useParams()
  const dataBook = useSelector((state) => selectBookById(state, id))

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
              id={dataBook.id}
              positionCounter='bottom'
          />
        </div>
        <div className={styles.card__annotation}>
          <h3 className={styles.card__annotation__header}>Аннотация</h3>
          <p className={styles.card__annotation__text}>{dataBook.annotation.substr(0, 400)}</p>
          </div>
        </div>
      <BlockReviews key={id} id={id}/>
    </div>
  )
} 
