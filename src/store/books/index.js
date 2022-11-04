import { createSlice } from "@reduxjs/toolkit";
import { Statuses } from "../../constants/Statuses.js";

const initialState = {
    entities: {},
    ids: [],
    status: Statuses.idle
};

export const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        startLoading: (state, action) => {
            state.status = Statuses.inProgress;
        },
        successLoading: (state, action) => {
            state.status = Statuses.success;
            state.entities = {...state.entities, ...action.payload.entities};
            state.ids = Array.from(new Set([...state.ids, ...action.payload.ids]));
        },
        failLoading: (state, action) => {
            state.status = Statuses.failed;
        }
    },
});
