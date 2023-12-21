import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    PopularMovies: null,
    UpcomingMovies: null,
    TopratedMovies: null,
  },
  reducers: {
    addnowplayingmovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },

    addPopularVideo: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.UpcomingMovies = action.payload;
    },
    addTopratedMovies: (state, action) => {
      state.TopratedMovies = action.payload;
    },
  },
});

export const {
  addnowplayingmovies,
  addTrailerVideo,
  addPopularVideo,
  addUpcomingMovies,
  addTopratedMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
