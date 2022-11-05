import { createSlice } from "@reduxjs/toolkit";
import { Statuses } from "../../constants/Statuses.js";

const initialState = {
  entities: {},
  ids: [],
  status: Statuses.idle,
  activeCategory: {
    id: '',
    name: ''
  }
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    startLoading: (state, action) => {
      state.status = Statuses.inProgress;
      state.entities = {};
      state.ids = [];
      state.activeCategory = {};
    },
    successLoading: (state, action) => {
      state.status = Statuses.success;
      state.entities = action.payload.entities;
      state.ids = action.payload.ids;
      state.activeCategory.id = action.payload.ids[0]
      state.activeCategory.name = action.payload.entities[state.activeCategory.id].name
    },
    failLoading: (state, action) => {
      state.status = Statuses.failed;
      state.entities = {};
      state.ids = [];
      state.activeCategory = {};
    },
    changeActiveCategory: (state, action) => {
      state.activeCategory = {
        id: action.payload,
        name: state.entities[action.payload].name
      }
    }
  },
});
