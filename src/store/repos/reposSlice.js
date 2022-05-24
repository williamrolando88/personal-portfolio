import { createSlice } from '@reduxjs/toolkit';
import { getRepo } from './reposHelper';

const initialState = {
  getRepoStatus: '',
  featuredRepo: {},
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
      if (action.meta.arg.featured) {
        state.featuredRepo = action.payload;
      } else if (!(action.meta.arg.name in state.reposInfo)) {
        state.reposInfo[action.meta.arg.name] = action.payload;
      }
    },
  },
});

export default reposSlice.reducer;
