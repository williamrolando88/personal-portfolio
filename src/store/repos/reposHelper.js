import { createAsyncThunk } from '@reduxjs/toolkit';

export const getRepo = createAsyncThunk('repo/get', async (repoName) => {
  const url = `https://api.github.com/repos/williamrolando88/${repoName}`;
  const response = await fetch(url);
  return response.json();
});
