import { configureStore } from '@reduxjs/toolkit';
import reposReducer from './repos/reposSlice';

const reducer = {
  repos: reposReducer,
};

const store = configureStore({
  reducer,
});

export default store;
