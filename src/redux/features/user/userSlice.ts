// src/app/redux/features/user/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string;
}

const initialState: UserState = {
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    clearUsername: (state) => {
      state.username = '';
    },
  },
});

export const { setUsername, clearUsername } = userSlice.actions;
export default userSlice.reducer;
