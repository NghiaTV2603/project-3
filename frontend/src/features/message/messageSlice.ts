import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserInterface } from '../authen/authSlice';

export interface Message {
   id?: number;
   sender: UserInterface;
   ChannelId: string;
   content: string;
   serverId: string;
}

interface StateMessage {
   messages: Message[];
   loading: boolean;
   status: string;
}

const initialState: StateMessage = {
   messages: [],
   loading: false,
   status: '',
};
const messageSlice = createSlice({
   name: 'message',
   initialState,
   reducers: {
      create: (state, action) => {
         const data = action.payload;
         const exists = state.messages.find((item) => item.id === data.id);
         if (!exists) {
            state.messages.unshift(data);
         }
      },
   },
   extraReducers: (builder) => {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      builder.addCase(fetchMessage.pending, (state) => {
         state.loading = true;
      });
      builder.addCase(fetchMessage.fulfilled, (state, action) => {
         state.messages = action.payload.data;
         state.status = 'success';
         state.loading = false;
      });
      builder.addCase(fetchMessage.rejected, (state) => {
         state.status = 'error';
         state.loading = false;
      });
      builder.addCase(AddMessage.pending, (state) => {
         state.loading = true;
      });
      builder.addCase(AddMessage.fulfilled, (state, action) => {
         state.messages.push(action.payload.data);
         state.status = 'success';
         state.loading = false;
      });
      builder.addCase(AddMessage.rejected, (state) => {
         state.status = 'error';
         state.loading = false;
      });
   },
});

export default messageSlice;

export const fetchMessage = createAsyncThunk(
   'message/get',
   async (params, { rejectWithValue }) => {
      try {
         const res = await axios.get(
            `http://localhost:5000/api/message?serverId=${params}`
         );
         return res.data;
      } catch (e) {
         return rejectWithValue(e.response.data);
      }
   }
);

export const AddMessage = createAsyncThunk(
   'message/add',
   async (params, { rejectWithValue }) => {
      try {
         const res = await axios.post(
            'http://localhost:5000/api/message',
            params
         );
         return res.data;
      } catch (e) {
         return rejectWithValue(e.response.data);
      }
   }
);
