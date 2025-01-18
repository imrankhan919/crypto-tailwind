import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import coinService from "./coinService";

const coinSlice = createSlice({
  name: "coins",
  initialState: {
    coins: [],
    trendingCoins: [],
    coin: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTrendingCoins.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getTrendingCoins.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.trendingCoins = action.payload;
      })
      .addCase(getTrendingCoins.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(searchCoins.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(searchCoins.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.coins = action.payload;
      })
      .addCase(searchCoins.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCoin.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getCoin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.coin = action.payload;
      })
      .addCase(getCoin.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default coinSlice.reducer;

// GET TRENDING COINS
export const getTrendingCoins = createAsyncThunk(
  "FETCH/TRENDING",
  async (_, thunkAPI) => {
    try {
      return await coinService.fetchTrendingCoins();
    } catch (error) {
      console.log(error);
    }
  }
);

export const searchCoins = createAsyncThunk(
  "SEARCH/COINS",
  async (query, thunkAPI) => {
    try {
      return await coinService.fetchSearchCoins(query);
    } catch (error) {
      console.log(error);
    }
  }
);

export const getCoin = createAsyncThunk("FETCH/COIN", async (id, thunkAPI) => {
  try {
    return await coinService.fetchCoin(id);
  } catch (error) {
    console.log(error);
  }
});
