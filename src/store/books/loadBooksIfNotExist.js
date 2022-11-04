import { booksSlice } from "./index.js";
import {prepareData} from '../utils'

export const loadBooksIfNotExist = (categoryId) => (dispatch, getState) => {

    fetch(`http://localhost:4000/api/books?categorie=${categoryId}`)
        .then((responce) => responce.json())
        .then((books) =>
            dispatch(booksSlice.actions.successLoading(prepareData(books)))
        )
        .catch(() => {
            dispatch(booksSlice.actions.failLoading());
        });
};
