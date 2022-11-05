import {Statuses} from "../../constants/Statuses";

export const selectCategoryModule = (state) => state.category;

export const selectActiveCategory = (state) => selectCategoryModule(state).activeCategory

export const selectCategoryIsSuccess = (state) => selectCategoryModule(state).status === Statuses.success

export const selectCategories = (state) => Object.values(selectCategoryModule(state).entities);


