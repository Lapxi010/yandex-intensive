import {Statuses} from "../../constants/Statuses";

export const selectReviewsModule = (state) => state.reviews;

export const selectReviewIsLoading = (state) => selectReviewsModule(state).status === Statuses.success

export const getReviewById = (state, id) => selectReviewsModule(state).entities[id]