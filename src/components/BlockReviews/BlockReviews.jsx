import React, {useEffect} from 'react'
import styles from "./BlockReviews.module.css";
import {Reviev} from "../Reviev/Reviev";
import {useDispatch, useSelector} from "react-redux";
import {
    selectReviewIsLoading,
} from "../../store/reviews/selectors";
import {loadReviewsIfNotExist} from "../../store/reviews/loadReviewsIfNotExist";
import {selectBookById} from "../../store/books/selectors";

export const BlockReviews = ({id}) => {
    const dispatch = useDispatch()
    const status = useSelector((state) => selectReviewIsLoading(state))
    const book = useSelector((state)=> selectBookById(state, id))

    useEffect(()=>{
        dispatch(loadReviewsIfNotExist(id))
    },[id])

    if(!status){
        return <span>Загрузка ...</span>
    }

    if (!book) {
        return null
    }

    return (
        <div className={styles.revievs}>
            {
                    book.comments.map((val) => <Reviev
                        id={val}
                        key={val}/>)
            }
        </div>
    )
}