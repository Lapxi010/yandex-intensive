import React from 'react'
import styles from "./StarsBlock.module.css";
import StarActive from "../../assets/star.svg";
import StarNonActive from "../../assets/starNonActive.svg";

export const StarsBlock = ({rating}) => {

    let stars = [];

    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<img key={i} className={styles.stars__star} src={StarActive} alt="star"/>)
        } else {
            stars.push(<img key={i} className={styles.stars__star} src={StarNonActive} alt="star"/>)
        }
    }
    return (
        <span className={styles.stars}>
            {
                stars
            }
        </span>
    )
}