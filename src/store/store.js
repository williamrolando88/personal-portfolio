import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reposReducer from './repos/reposSlice';

const reducer = {
  repos: reposReducer,
};

const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger),
});

export default store;
