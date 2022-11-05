import React from 'react'
import styles from './BasketPage.module.css'
import {CardBook} from '../../components/CardBook/CardBook.jsx'
import {useSelector} from "react-redux";
import {selectAllBooks, selectPriceAllBooks} from "../../store/basket/selectors";

export const BasketPage = () => {
    const books = useSelector((state) => selectAllBooks(state))
    const totalPrice = useSelector((state) => selectPriceAllBooks(state))

    if (books.length === 0) {
        return <div className={styles.books__undefined}>
            <h1>В корзине ничего нет!</h1>
        </div>
    }

    return (
        <>
            <aside className={styles.basket}>
                <span className={styles.basket__title}>Ваш заказ:</span>
                <ul className={styles.basket__list}>
                    {
                        books.map(val =>
                            <li key={val.id} className={styles.basket__list__item}>
                                <span className={styles.basket__list__text}>{val.title}</span>
                                <span className={styles.basket__list__price}>{val.price} ₽</span>
                            </li>)
                    }
                </ul>
                <div className={styles.basket__bottom}>
                    <span className={styles.basket__bottom__price}>Итого:    {totalPrice} ₽</span>
                    <button className={styles.basket__bottom__btn}>Купить</button>
                </div>
            </aside>
            <div className={styles.books}>
                {
                    books.map(val => <CardBook
                        rating={val.rating}
                        author={val.author}
                        price={val.price}
                        genre={val.genres[0]}
                        title={val.title}
                        key={val.id}
                        id={val.id}
                        isLink={true}
                        positionCounter='bottom'
                    />)
                }
            </div>
        </>
    )
} 
