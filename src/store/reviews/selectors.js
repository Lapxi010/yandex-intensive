export const selectReviewsModule = (state) => state.reviews;

export const selectReviewIsLoading = (state) => selectReviewsModule(state).status === 'success'

export const getReviewById = (state, id) => selectReviewsModule(state).entities[id]