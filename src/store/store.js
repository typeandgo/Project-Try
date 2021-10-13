import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from './reducers/auth/auth.reducer';
import counterReducer from './reducers/counter/counter.reducer';
import pokemonReducer from './reducers/pokemon/pokemon.reducer';
import { todoApi } from 'services/todo.service';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    pokemon: pokemonReducer,
    [todoApi.reducerPath]: todoApi.reducer
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware()
      .concat(todoApi.middleware);
  }

});

setupListeners(store.dispatch);
