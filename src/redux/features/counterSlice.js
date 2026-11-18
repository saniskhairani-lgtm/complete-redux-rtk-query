import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1; // Safe to mutate directly thanks to Immer
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

console.log("HAHAHA",counterSlice)

export const { increment, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;