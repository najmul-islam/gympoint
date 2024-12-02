import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = undefined;
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
