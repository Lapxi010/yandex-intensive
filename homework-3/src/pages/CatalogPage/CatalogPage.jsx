import React from 'react'
import {CardBook} from '../../components/CardBook/CardBook.jsx'
import styles from './CatalogPage.module.css'

export const CatalogPage = () => {
  return (
    <>
      <aside className={styles.categories}>
          <ul className={styles.categories__list}>
            <li className={styles.categories__itemActive}><a className={styles.categories__link} href="/#">Художественная литература</a></li>
            <li className={styles.categories__item}><a className={styles.categories__link} href="/#">Нехудожественная литература</a></li>
            <li className={styles.categories__item}><a className={styles.categories__link} href="/#">Книги для детей</a></li>
            <li className={styles.categories__item}><a className={styles.categories__link} href="/#">Переодические издания</a></li>
            <li className={styles.categories__item}><a className={styles.categories__link} href="/#">Религия</a></li>
            <li className={styles.categories__item}><a className={styles.categories__link} href="/#">Учебная литература</a></li>
            <li className={styles.categories__item}><a className={styles.categories__link} href="/#">Комиксы</a></li>
          </ul>
      </aside>
      <section className={styles.books}>
        <CardBook/>          
      </section>
    </>
  )
}
