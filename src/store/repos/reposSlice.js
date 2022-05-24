import { createSlice } from '@reduxjs/toolkit';
import { getRepo } from './reposHelper';

const initialState = {
  getRepoStatus: '',
  reposInfo: {},
};

const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {},
  extraReducers: {
    [getRepo.pending]: (state) => {
      state.getRepoStatus = 'pending';
    },
    [getRepo.rejected]: (state) => {
      state.getRepoStatus = 'rejected';
    },
    [getRepo.fulfilled]: (state, action) => {
      state.getRepoStatus = 'fulfilled';
      state.reposInfo = action.payload;
    },
  },
});

export default reposSlice.reducer;
