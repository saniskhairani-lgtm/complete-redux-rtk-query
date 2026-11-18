import { createSlice } from '@reduxjs/toolkit';
const userIncomeSlice = createSlice({
  name: 'userIncome',
  initialState: { income: 10000 },
  reducers: {
    addIncome: (state, action) => {
      state.income = state.income + action.payload;
    },
    subtractIncome: (state, action) => {
      state.income = state.income - action.payload;
    },
  },
});

export const { addIncome, subtractIncome } = userIncomeSlice.actions;
export default userIncomeSlice.reducer;