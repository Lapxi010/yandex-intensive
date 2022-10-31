import React, {useState} from 'react'
import {CardBook} from '../../components/CardBook/CardBook.jsx'
import styles from './BasketPage.module.css'
import {mock} from '../../constants/mock'

export const BasketPage = () => {
    const [dataBook, setDataBook] = useState(mock[0])

    return (
        <>
            <aside className={styles.basket}>
                <span className={styles.basket__title}>Ваш заказ:</span>
                <ul className={styles.basket__list}>
                    <li className={styles.basket__list__item}><span className={styles.basket__list__text}>Несносное проклятье некроманта</span><span
                        className={styles.basket__list__price}>250 ₽</span></li>
                    <li className={styles.basket__list__item}><span className={styles.basket__list__text}>Несносное проклятье некроманта</span><span
                        className={styles.basket__list__price}>250 ₽</span></li>
                    <li className={styles.basket__list__item}><span className={styles.basket__list__text}>Несносное проклятье некроманта</span><span
                        className={styles.basket__list__price}>250 ₽</span></li>
                    <li className={styles.basket__list__item}><span className={styles.basket__list__text}>Несносное проклятье некроманта</span><span
                        className={styles.basket__list__price}>250 ₽</span></li>
                </ul>
                <div className={styles.basket__bottom}>
                    <span className={styles.basket__bottom__price}>Итого:    1 000 ₽</span>
                    <button className={styles.basket__bottom__btn}>Купить</button>
                </div>
            </aside>
            <div className={styles.books}>
                <CardBook
                    rating={dataBook.rating}
                    author={dataBook.author}
                    price={dataBook.price}
                    genre={dataBook.genres[0]}
                    title={dataBook.title}
                    key={dataBook.id}
                    positionCounter='bottom'
                />
                <CardBook
                    rating={dataBook.rating}
                    author={dataBook.author}
                    price={dataBook.price}
                    genre={dataBook.genres[0]}
                    title={dataBook.title}
                    key={dataBook.id}
                    positionCounter='bottom'
                />
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
        </>
    )
} 
