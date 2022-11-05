import { categorySlice } from "./index.js";
import {selectCategories} from "./selectors"
import {prepareData} from '../utils'

export const loadCategoryIfNotExist = (dispatch, getState) => {
  if (selectCategories(getState()).length > 0) {
    return 0;
  }

  dispatch(categorySlice.actions.startLoading());
  fetch("http://localhost:4000/api/categories")
    .then((responce) => responce.json())
    .then((categories) =>
      dispatch(categorySlice.actions.successLoading(prepareData(categories)))
    )
    .catch(() => {
      dispatch(categorySlice.actions.failLoading());
    });
};
