import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    RemoveUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, RemoveUser } = userSlice.actions;
export default userSlice.reducer;
