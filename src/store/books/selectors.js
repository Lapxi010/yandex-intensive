import {Statuses} from "../../constants/Statuses";

export const selectBooksModule = (state) => state.books;

export const selectBooks = (state) => Object.values(selectBooksModule(state).entities);

export const selectBookById = (state, bookId) => selectBooksModule(state).entities[bookId]

export const selectBooksIsSuccess = (state) => selectBooksModule(state).status === Statuses.success