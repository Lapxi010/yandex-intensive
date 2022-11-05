import React from 'react'
import styles from './Reviev.module.css'
import {StarsBlock} from "../StarsBlock/StarsBlock";
import {useSelector} from "react-redux";
import {getReviewById} from "../../store/reviews/selectors";

export const Reviev = ({id}) => {
    const data = useSelector((state) => getReviewById(state, id))


    if(!data) {
        return null
    }

    return (
        <div className={styles.reviev}>
            <div className={styles.reviev__header}>
                <span className={styles.reviev__header__name}>{data.name}</span>
                <StarsBlock rating={data.rating}/>
            </div>
            <p className={styles.reviev__text}>{data.text}</p>
        </div>
    )
} 
