import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Server {
   id: string;
   name: string;
   background: string;
   userIds?: string[];
}
interface StateServer {
   servers: Server[];
   status: string;
   loading: boolean;
   currentServer?: Server;
}

const initialState: StateServer = {
   servers: [],
   status: '',
   loading: false,
};

const serverSlice = createSlice({
   name: 'server',
   initialState,
   reducers: {
      selectServer: (state, action) => {
         state.currentServer = action.payload;
      },
   },
   extraReducers: (builder) => {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      builder.addCase(fetchServer.pending, (state) => {
         state.loading = true;
      });
      builder.addCase(fetchServer.fulfilled, (state, action) => {
         state.servers = action.payload.data;
         state.status = 'success';
         state.loading = false;
      });
      builder.addCase(fetchServer.rejected, (state) => {
         state.status = 'error';
         state.loading = false;
      });
      builder.addCase(AddServer.pending, (state) => {
         state.loading = true;
      });
      builder.addCase(AddServer.fulfilled, (state, action) => {
         state.servers.push(action.payload.data);
         state.status = 'success';
         state.loading = false;
      });
      builder.addCase(joinServer.fulfilled, (state, action) => {
         state.servers.push(action.payload.data);
         state.status = 'success';
         state.loading = false;
      });
      builder.addCase(AddServer.rejected, (state) => {
         state.status = 'error';
         state.loading = false;
      });
   },
});

export default serverSlice;

export const fetchServer = createAsyncThunk(
   'server/get',
   async (params, { rejectWithValue }) => {
      try {
         const res = await axios.get(
            `http://localhost:5000/api/server?userId=${params}`
         );
         return res.data;
      } catch (e) {
         return rejectWithValue(e.response.data);
      }
   }
);

export const AddServer = createAsyncThunk(
   'server/add',
   async (params, { rejectWithValue }) => {
      try {
         const res = await axios.post(
            'http://localhost:5000/api/server',
            params
         );
         return res.data;
      } catch (e) {
         return rejectWithValue(e.response.data);
      }
   }
);
export const joinServer = createAsyncThunk(
   'server/join',
   async (params, { rejectWithValue }) => {
      try {
         const res = await axios.post(
            'http://localhost:5000/api/server/join',
            params
         );
         return res.data;
      } catch (e) {
         return rejectWithValue(e.response.data);
      }
   }
);
