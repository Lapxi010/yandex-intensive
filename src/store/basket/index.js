import {createSlice} from '@reduxjs/toolkit'

export const basketSlice = createSlice({
    name: "basket",
    initialState: {},
    reducers: {
        addFilm: (state, action) => {
            state[action.payload] = (state[action.payload] || 0) + 1
        },
        removeFilm: (state, action) => {
            if (state[action.payload] === 1) {
                delete state[action.payload]
            }else {
                state[action.payload] = state[action.payload] - 1
            }
        }
    }
})