import React, {useEffect} from "react";
import {Category} from "../../components/Category/Category.jsx";
import styles from "./CatalogPage.module.css";
import {useDispatch, useSelector} from "react-redux";
import {loadCategoryIfNotExist} from "../../store/category/loadCategoryIfNotExist";
import {selectActiveCategory, selectCategories} from "../../store/category/selectors";
import {categorySlice} from '../../store/category/index'
import {loadBooksIfNotExist} from "../../store/books/loadBooksIfNotExist";
import {BlockCards} from "../../components/BlockCards/BlockCards";

export const CatalogPage = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => selectCategories(state));
    const activeCategory = useSelector((state) => selectActiveCategory(state))
    useEffect(() => {
        dispatch(loadCategoryIfNotExist)
    }, []);

    useEffect(() => {
        if (activeCategory.id !== '' && activeCategory.id !== undefined) {
            dispatch(loadBooksIfNotExist(activeCategory.id))
        }
    }, [activeCategory])

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
             activeCategory !== undefined ? <BlockCards/> : <span>Загрузка ...</span>
            }
        </>
    );
};
