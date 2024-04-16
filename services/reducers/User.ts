import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IUser from "@/interfaces/IUser";
import fetchCurrentUser from "../actions/fetchCurrentUser";

// Начальное состояние
const initialState: {
  user: IUser | null;
  status: string;
} = {
  user: null,
  status: "loading",
};

// Создание слайса
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    logout(state) {
      localStorage.clear();
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.status = "done";
        state.user = action.payload;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

// Экспорт actions
export const { login, logout } = userSlice.actions;

// Экспорт reducer
export default userSlice.reducer;
