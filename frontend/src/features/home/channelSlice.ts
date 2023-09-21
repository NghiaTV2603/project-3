import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { TYPE_TEXT, TYPE_VOCE } from '../../app/constants';
import { AddServer, fetchServer } from './serverSlice';

export interface Channel {
   id?: number;
   isPublish: boolean;
   type: string;
   name: string;
   description: string;
}

interface StateChannel {
   channels: Channel[];
   loading: boolean;
   status: string;
   currentChannel?: Channel;
}

const initialState: StateChannel = {
   channels: [],
   loading: false,
   status: '',
};
const channelSlice = createSlice({
   name: 'channel',
   initialState,
   reducers: {
      selectChannel: (state, action) => {
         state.currentChannel = action.payload;
      },
   },
   extraReducers: (builder) => {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      builder.addCase(fetchChannel.pending, (state) => {
         state.loading = true;
      });
      builder.addCase(fetchChannel.fulfilled, (state, action) => {
         state.channels = action.payload.data;
         state.status = 'success';
         state.loading = false;
      });
      builder.addCase(fetchChannel.rejected, (state) => {
         state.status = 'error';
         state.loading = false;
      });
      builder.addCase(AddChannel.pending, (state) => {
         state.loading = true;
      });
      builder.addCase(AddChannel.fulfilled, (state, action) => {
         state.channels.push(action.payload.data);
         state.status = 'success';
         state.loading = false;
      });
      builder.addCase(AddChannel.rejected, (state) => {
         state.status = 'error';
         state.loading = false;
      });
   },
});

export default channelSlice;

export const fetchChannel = createAsyncThunk(
   'channel/get',
   async (params, { rejectWithValue }) => {
      try {
         const res = await axios.get(
            `http://localhost:5000/api/channel?serverId=${params}`
         );
         return res.data;
      } catch (e) {
         return rejectWithValue(e.response.data);
      }
   }
);

export const AddChannel = createAsyncThunk(
   'channel/add',
   async (params, { rejectWithValue }) => {
      try {
         const res = await axios.post(
            'http://localhost:5000/api/channel',
            params
         );
         return res.data;
      } catch (e) {
         return rejectWithValue(e.response.data);
      }
   }
);
