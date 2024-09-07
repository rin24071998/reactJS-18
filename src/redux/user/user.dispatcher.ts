import { createAsyncThunk } from '@reduxjs/toolkit';
import { UsersApi } from '@services/user/usersApi';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await UsersApi.getUsersList(null);
  return response;
});
