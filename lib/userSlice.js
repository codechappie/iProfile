import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Jhone Doe",
  loading: true,
};

const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    getUserData: (state, action) => {
      state = action.payload;
    },
  },
});

export const { getUserData } = userSlice.actions;

export default userSlice;