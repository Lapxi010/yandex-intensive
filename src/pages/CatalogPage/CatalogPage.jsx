import React, {useEffect} from "react";
import styles from "./CatalogPage.module.css";
import {Category} from "../../components/Category/Category.jsx";
import {CardBook} from "../../components/CardBook/CardBook";
import {useDispatch, useSelector} from "react-redux";
import {loadCategoryIfNotExist} from "../../store/category/loadCategoryIfNotExist";
import {selectActiveCategory, selectCategories, selectCategoryIsSuccess} from "../../store/category/selectors";
import {categorySlice} from '../../store/category/index'
import {loadBooksIfNotExist} from "../../store/books/loadBooksIfNotExist";
import {selectBooksByCategory, selectBooksIsSuccess} from "../../store/books/selectors";
import Loading from "../../assets/loading.svg";


export const CatalogPage = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => selectCategories(state));
    const activeCategory = useSelector((state) => selectActiveCategory(state))
    const books = useSelector((state) => selectBooksByCategory(state, activeCategory.name))
    const statusCategory = useSelector((state) => selectCategoryIsSuccess(state))
    const statusBooks = useSelector((state) => selectBooksIsSuccess(state))

    useEffect(() => {
        dispatch(loadCategoryIfNotExist)
    }, []);

    useEffect(() => {
        if (activeCategory.id !== '' && activeCategory.id !== undefined) {
            if (books.length === 0) {
                dispatch(loadBooksIfNotExist(activeCategory.id))
            }
        }
    }, [activeCategory])

    if (!statusCategory) {
        return <div className={styles.load}><img className={styles.load__img} src={Loading} alt="loading"/></div>
    }

    return (
        <>
            <aside className={styles.categories}>
                <ul className={styles.categories__list}>
                    {categories.map((val) => (
                        <Category
                            func={() => {
                                dispatch(categorySlice.actions.changeActiveCategory(val.id))
                            }}
                            text={val.name}
                            key={val.id}
                            activeItem={activeCategory.id === val.id}
                        />
                    ))}
                </ul>
            </aside>
            {
                statusBooks  ?
                 <section className={styles.books}>
                     {books
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
                                 isLink={true}
                             />
                         ))}
                 </section>
                 : <div className={styles.load}><img className={styles.load__img} src={Loading} alt="loading"/></div>
            }
        </>
    );
};
