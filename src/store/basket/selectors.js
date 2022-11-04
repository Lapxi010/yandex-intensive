import {selectBookById} from "../books/selectors";

export const selectBasketModule = (state) => state.basket

export const selectBasketCount = (state, id) => selectBasketModule(state)[id]

export const selectAllBooks = (state) => {
    let entities = Object.keys(selectBasketModule(state))
    return entities.map((val) => selectBookById(state, val))
}

export const selectPriceAllBooks = (state) => {
    let books = selectAllBooks(state)
    let total = 0
    books.forEach(val => {
        total += val.price * selectBasketCount(state, val.id)
    })
    return total
}