import React from 'react'
import Star from '../../assets/star.svg'
import styles from './Reviev.module.css'

export const Reviev = () => {
  return (
    <div className={styles.reviev}>
      <div className={styles.reviev__header}>
        <span className={styles.reviev__header__name}>Анна К.</span>
        <span className={styles.reviev__stars}>
          <img className={styles.reviev__stars__star} src={Star} alt="star" />
          <img className={styles.reviev__stars__star} src={Star} alt="star" />
          <img className={styles.reviev__stars__star} src={Star} alt="star" />
          <img className={styles.reviev__stars__star} src={Star} alt="star" />
          <img className={styles.reviev__stars__star} src={Star} alt="star" />
        </span>
      </div>
      <p className={styles.reviev__text}>С книгами Маргариты Блиновой я познакомилась , начиная с гарпии. И с тех пор ожидаю от них юмора, юмора и еще раз юмора. Не важно, какой мир, не важно кто -герои, некроманты, или неизвестные науки расы, главное - обстоятельства, дружба и юмор. Все это, и даже с лишком, воплотилось в книжке "Несносное проклятье некроманта".</p>
    </div>
  )
} 
