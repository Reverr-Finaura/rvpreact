import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deals: [],
  deal: [],
};

export const dealSlice = createSlice({
  name: "deal",
  initialState,
  reducers: {
    setDeals: (state, action) => {
      state.deals = action.payload;
    },
    setDeal: (state, action) => {
      state.deal = action.payload;
    },
    removeDeal: (state, action) => {
      state.deal = null;
    },
  },
});

export const { setDeal, removeDeal, setDeals } = dealSlice.actions;

export default dealSlice.reducer;
