import React from 'react'
import styles from './Reviev.module.css'
import {StarsBlock} from "../StarsBlock/StarsBlock";

export const Reviev = ({name, text, rating}) => {
    return (
        <div className={styles.reviev}>
            <div className={styles.reviev__header}>
                <span className={styles.reviev__header__name}>{name}</span>
                <StarsBlock rating={rating}/>
            </div>
            <p className={styles.reviev__text}>{text}</p>
        </div>
    )
} 
