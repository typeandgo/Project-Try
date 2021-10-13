export const _increment = (state) => {
  state.value += 1;
};

export const _decrement = (state) => {
  state.value -= 1;
};

export const _incrementByAmount = (state, action) => {
  state.value += action.payload;
};