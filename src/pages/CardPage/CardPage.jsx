import React, {useEffect} from 'react'
import styles from './CardPage.module.css'
import { CardBook } from '../../components/CardBook/CardBook.jsx'
import {Reviev} from "../../components/Reviev/Reviev";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectBookById} from "../../store/books/selectors";
import {loadReviewsIfNotExist} from "../../store/reviews/loadReviewsIfNotExist";
import {selectReviewIsLoading} from "../../store/reviews/selectors";
import Loading from '../../assets/loading.svg'

export const CardPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {id} = useParams()
  const dataBook = useSelector((state) => selectBookById(state, id))
  const status = useSelector((state) => selectReviewIsLoading(state))

  useEffect(()=>{
    dispatch(loadReviewsIfNotExist(id))
  },[id])


  if (!dataBook) {
    return <span>{navigate('/')}</span>
  }

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
              isLink={false}
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
          status ?
          dataBook.comments.map((val) => <Reviev
              id={val}
              key={val}/>)
              : <div className={styles.load}><img className={styles.load__img} src={Loading} alt="loading"/></div>
        }
      </div>
    </div>
  )
} 
