export const selectCategoryModule = (state) => state.category;

export const selectActiveCategory = (state) => selectCategoryModule(state).activeCategory

export const selectCategories = (state) => Object.values(selectCategoryModule(state).entities);


