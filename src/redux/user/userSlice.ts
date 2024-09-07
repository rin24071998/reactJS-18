import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserInfo } from './user.type';

const initialState: User = {
  userInfo: {
    accessToken: '',
    roles: [],
    authend: false,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
