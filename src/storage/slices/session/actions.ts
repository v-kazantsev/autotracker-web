import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '@/api/auth';

type PasswordLoginParams = {
  credentials: {
    email: string;
    password: string;
  };
  code: string;
}

export const getToken = createAsyncThunk(
  'AUTH/GET_TOKEN',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await auth.generateLoginToken();
      return data;
    } catch (error) {
      return rejectWithValue(error)
    }
  },
);

export const passwordLogin = createAsyncThunk(
  'AUTH/PASSWORD_LOGIN',
  async (params: PasswordLoginParams, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await auth.passwordLogin(params.credentials, params.code);
      dispatch(getToken());
      return data;
    } catch (error) {
      return rejectWithValue(error)
    }
  },
);

export const tokenLogin = createAsyncThunk(
  'AUTH/TOKEN_LOGIN',
  async (token: string, { rejectWithValue }) => {
    try {
      const { data } = await auth.tokenLogin(token);
      return data;
    } catch (error) {
      return rejectWithValue(error)
    }
  },
);
