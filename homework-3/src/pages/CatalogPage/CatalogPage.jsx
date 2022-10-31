import React, { useState } from 'react'
import { CardBook } from '../../components/CardBook/CardBook.jsx'
import { Category } from '../../components/Category/Category.jsx'
import styles from './CatalogPage.module.css'
import { data } from '../../books.js'

export const CatalogPage = () => {

  const dataN = Object.keys(data)

  const dataN2 = []

  for (let [key, value] of Object.entries(data)) {
    dataN2.push([key, value])
  }

  const [activeCategory, setActiveCategory] = useState(dataN[0])

  const changeCategory = (val) => {
    setActiveCategory(val)
  }

  return (
    <>
      <aside className={styles.categories}>
        <ul className={styles.categories__list}>
          {
            dataN.map(val => <Category func={changeCategory} text={val} key={val} activeItem={activeCategory === val} />)
          }
        </ul>
      </aside>
      <section className={styles.books}>
        {
          dataN2.map(val => val[0] === activeCategory ? val[1].map(val2 =>
            <CardBook
              rating={val2.rating}
              author={val2.author}
              price={val2.price}
              genre={val2.genres[0]}
              title={val2.title}
              key={val2.id}
              positionCounter='top'
            />) : '')
        }
      </section>
    </>
  )
}
