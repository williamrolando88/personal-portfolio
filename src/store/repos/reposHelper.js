import { createAsyncThunk } from '@reduxjs/toolkit';

export const getRepo = createAsyncThunk(
  'repo/get',

  async ({ name, featured }) => {
    const url = `https://api.github.com/repos/williamrolando88/${name}`;
    const response = await fetch(url, {
      headers: {
        Authorization: import.meta.env.VITE_GITHUB_TOKEN,
      },
    });
    return response.json();
  }
);

export const getRepoLanguages = createAsyncThunk(
  'repoLanguages/get',
  async ({ name }) => {
    const url = `https://api.github.com/repos/williamrolando88/${name}/languages`;
    const response = await fetch(url, {
      headers: {
        Authorization: import.meta.env.VITE_GITHUB_TOKEN,
      },
    });
    return response.json();
  }
);
