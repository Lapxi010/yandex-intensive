import React from 'react'
import styles from "./BlockCards.module.css";
import {CardBook} from "../CardBook/CardBook";
import {useSelector} from "react-redux";
import {selectBooks} from "../../store/books/selectors";
import {selectActiveCategory} from "../../store/category/selectors";

export const BlockCards = () => {
    const books = useSelector((state) => selectBooks(state))
    const activeCategory = useSelector((state) => selectActiveCategory(state))

    return (
        <section className={styles.books}>
            {books
                .filter((categorie) => categorie.categorie === activeCategory.name)
                .map((val) => (
                    <CardBook
                        rating={val.rating}
                        author={val.author}
                        price={val.price}
                        genre={val.genres[0]}
                        title={val.title}
                        key={val.id}
                        id={val.id}
                        positionCounter="top"
                    />
                ))}
        </section>
    )
}