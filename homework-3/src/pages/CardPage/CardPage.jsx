import React from 'react'
import { CardBook } from '../../components/CardBook/CardBook.jsx'
import { Reviev } from '../../components/Reviev/Reviev.jsx'
import styles from './CardPage.module.css'

export const CardPage = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__top}>
        <div className={styles.card__CardBookWrapper}>
          <CardBook />
        </div>
        <div className={styles.card__annotation}>
          <h3 className={styles.card__annotation__header}>Аннотация</h3>
          <p className={styles.card__annotation__text}>Не знаешь, что делать дальше? Сломала мозг в попытках ответить на вопрос, где заработать честной девушке-артефактору? Устала от однообразных предложений изготовить "что-нибудь для вечной любви"? Подумай о некромантии!
            Присоединяйся к дружной компании черных магов и просто любителей гулять по ночным кладбищам. Ведь с ними твоя жизнь заиграет всеми оттенками черного. Вперед, Тесса Грей!
           </p>
          </div>
              </div>
      <div className={styles.revievs}>
        <Reviev/>
        <Reviev />
        <Reviev /> 
        <Reviev />
        <Reviev />
        <Reviev />
        <Reviev />
        <Reviev />
        <Reviev />
        <Reviev />
        <Reviev />
      </div>
    </div>
  )
} 
