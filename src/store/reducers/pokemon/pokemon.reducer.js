import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { store } from 'store/store';
import axios from 'axios';

const initialState = {
  data: {},
  isLoading: null,
  error: null
};

export const fetchPokemon = createAsyncThunk('fetchPokemon', async (pokemonName) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  return response.data;
});

export const reNamePokemonFromApi = async (pokemonName) => {
  await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  store.dispatch(updatePokemonName(pokemonName));
};

const pokemonReducer = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    updatePokemonName: (state, action) => {
      state.data.species.name = action.payload;
    },
  },
  extraReducers: builder => {
    
    builder.addCase(fetchPokemon.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(fetchPokemon.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });

    builder.addCase(fetchPokemon.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});

export default pokemonReducer.reducer;
export const { updatePokemonName } = pokemonReducer.actions;