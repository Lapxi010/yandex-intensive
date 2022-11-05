import { reviewsSlice } from "./index.js";
import {prepareData} from '../utils'

export const loadReviewsIfNotExist = (bookId) => (dispatch, getState) => {
    dispatch(reviewsSlice.actions.startLoading())
    fetch(`http://localhost:4000/api/reviews?id=${bookId}`)
        .then((responce) => responce.json())
        .then((reviews) =>
            dispatch(reviewsSlice.actions.successLoading(prepareData(reviews)))
        )
        .catch(() => {
            dispatch(reviewsSlice.actions.failLoading());
        });
};
