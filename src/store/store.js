import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const reducer = {};

const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger),
});

export default store;
