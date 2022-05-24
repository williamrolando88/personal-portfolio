import { createAsyncThunk } from '@reduxjs/toolkit';

export const getRepo = createAsyncThunk(
  'repo/get',
  async ({ name, featured }) => {
    const url = `https://api.github.com/repos/williamrolando88/${name}`;
    const response = await fetch(url);
    return response.json();
  }
);
