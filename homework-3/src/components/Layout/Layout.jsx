import React from 'react'
import styles from './Layout.module.css'
import Store from '../../store.svg'


export const Layout = (props) => {
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <div className={styles.header__wrapper}>
          <h1 className={styles.header__text}>Магазин</h1>
          <a href='http://google.com' target="_blink"><img src={Store} alt='store' /></a> 
        </div> 
      </header>
      <section className={styles.content}>
        <div className={styles.content__wrapper}>
          {props.children}
        </div>
      </section>
    </div>
  )
}
