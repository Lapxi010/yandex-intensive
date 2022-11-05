import React from 'react'
import styles from './CardBook.module.css'
import Minus from '../../assets/Minus.svg'
import Plus from '../../assets/Plus.svg'
import {StarsBlock} from "../StarsBlock/StarsBlock";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectBasketCount} from "../../store/basket/selectors";
import {basketSlice} from "../../store/basket";

export const CardBook = ({title, author, genre, rating, price, positionCounter, id, isLink}) => {
    const dispatch = useDispatch()
    const count = useSelector((state) => selectBasketCount(state, id))
    const navigate = useNavigate()

    return (
        <div className={styles.wrapper} style={isLink ? {marginBottom: '16px'} : {marginBottom: '0'} }>
            {
                !isLink ? (<div className={styles.book__simple}>
                    <h3 className={styles.book__header}>{title}</h3>
                    <div className={styles.book__wrapper}>
                        <div className={styles.book__leftSide}>
                            <div className={styles.book__description}>
                                <span className={styles.book__description__author}>{author}</span>
                                <span className={styles.book__description__genre}>{genre}</span>
                                <StarsBlock rating={rating}/>
                            </div>
                            <span className={styles.book__price}>{price} ₽</span>
                        </div>
                    </div>
                </div>) :
                    (<div onClick={()=> navigate(`/book/${id}`)} className={styles.book__link}>
                        <h3 className={styles.book__header}>{title}</h3>
                        <div className={styles.book__wrapper}>
                            <div className={styles.book__leftSide}>
                                <div className={styles.book__description}>
                                    <span className={styles.book__description__author}>{author}</span>
                                    <span className={styles.book__description__genre}>{genre}</span>
                                    <StarsBlock rating={rating}/>
                                </div>
                                <span className={styles.book__price}>{price} ₽</span>
                            </div>
                        </div>
                    </div>)
            }
            <div className={styles.book__rightSide} style={positionCounter === 'top' ? {
                alignItems: 'center', top: '0'
            } : {alignItems: 'flex-end', bottom: '20px'}}>
                <div className={styles.book__counter}>
                    <button
                        disabled={!count}
                        onClick={() => dispatch(basketSlice.actions.removeFilm(id))}
                        className={styles.book__counter__btn}
                    ><img src={Minus} alt="minus"/></button>
                    <span className={styles.book__counter__text}>{count || 0}</span>
                    <button
                        onClick={() => dispatch(basketSlice.actions.addFilm(id))}
                        className={styles.book__counter__btn}
                    ><img src={Plus} alt="plus"/></button>
                </div>
            </div>
        </div>
    )
}
