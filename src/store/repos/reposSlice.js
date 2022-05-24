import { createSlice } from '@reduxjs/toolkit';
import { getRepo } from './reposHelper';

const initialState = {
  getRepoStatus: '',
  featuredRepo: '',
  reposInfo: [],
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
      state.reposInfo.push(action.payload);
      if (action.meta.arg.featured) {
        state.featuredRepo = action.meta.arg.name;
      }
    },
  },
});

export default reposSlice.reducer;
