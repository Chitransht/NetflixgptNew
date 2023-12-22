import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieName: null,
    MovieResult: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptResult: (state, action) => {
      const { movieName, MovieResult } = action.payload;
      state.movieName = movieName;
      state.MovieResult = MovieResult;
    },
  },
});

export const { toggleGptSearch, addGptResult } = gptSlice.actions;
export default gptSlice.reducer;
