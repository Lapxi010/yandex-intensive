import React from 'react'
import styles from './Category.module.css'

export const Category = ({ text, activeItem, func }) => {
  return (
    <li className={activeItem ? styles.categories__itemActive : styles.categories__item}><a onClick={() => func(text)} className={styles.categories__link} href="/#">{text}</a></li>
  )
}
