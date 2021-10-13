import { createSlice } from '@reduxjs/toolkit';
import { _increment, _decrement, _incrementByAmount } from './counter.action';

const initialState = {
  value: 0
};

export const counterReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: _increment,
    decrement: _decrement,
    incrementByAmount: _incrementByAmount
  }
});

export const { increment, decrement, incrementByAmount } = counterReducer.actions;
export default counterReducer.reducer;