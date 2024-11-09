import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    userProfile: {},
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = {};
    },
    addUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    editUserProfile: (state, action) => {
      state.userProfile = {
        ...state.userProfile,
        ...action.payload
      }
    }
  }
})

export const { addUser, clearUser, addUserProfile, editUserProfile } = userSlice.actions;
export default userSlice.reducer;