import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface UserInterface {
   username?: string;
   email: string;
   id: string;
}
interface AuthInterface {
   user: UserInterface;
   isLogin: boolean;
   status: string;
   accessToken: string;
   loading: boolean;
}
// const initialState: AuthInterface = {
//    user: {
//       username: 'nghiatran',
//       email: 'nghiatran@gmail.com',
//       id: 'eDM2GgS3sZJNRS3du9mT',
//    },
//    isLogin: false,
//    status: '',
//    accessToken: '',
//    loading: false,
// };
const initialState = {};
const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      logout: (state: AuthInterface) => {
         // eslint-disable-next-line no-param-reassign
         state.isLogin = false;
         // eslint-disable-next-line no-param-reassign
         state.user = {};
      },
   },
   extraReducers: (builder) => {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      builder.addCase(login.pending, (state) => {
         state.loading = true;
      });
      builder.addCase(login.fulfilled, (state, action) => {
         state.isLogin = true;
         state.user = action.payload.data;
         state.status = 'success';
         state.loading = false;
      });
      builder.addCase(login.rejected, (state) => {
         state.isLogin = false;
         state.status = 'error';
         state.loading = false;
      });
   },
});

export default authSlice;

export const login = createAsyncThunk(
   'authen/login',
   async (params, { rejectWithValue }) => {
      try {
         const res = await axios.post(
            'http://localhost:5000/api/login',
            params
         );
         return res;
      } catch (e) {
         return rejectWithValue(e.response.data);
      }
   }
);
