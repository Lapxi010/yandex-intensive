import React, { useState } from 'react'
import { CardBook } from '../../components/CardBook/CardBook.jsx'
import { Category } from '../../components/Category/Category.jsx'
import styles from './CatalogPage.module.css'
import { mock, categories } from '../../constants/mock'

export const CatalogPage = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0])

  const changeCategory = (val) => {
    setActiveCategory(val)
  }

  return (
    <>
      <aside className={styles.categories}>
        <ul className={styles.categories__list}>
          {
            categories.map(val => <Category func={changeCategory} text={val} key={val} activeItem={activeCategory === val} />)
          }
        </ul>
      </aside>
      <section className={styles.books}>
        {
          mock.filter(categorie => categorie.categorie === activeCategory).map(val =>
            <CardBook
              rating={val.rating}
              author={val.author}
              price={val.price}
              genre={val.genres[0]}
              title={val.title}
              key={val.id}
              positionCounter='top'
            />
          )
        }
      </section>
    </>
  )
}
