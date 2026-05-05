import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDeals } from "@/services/dealService";

// 🔄 Async action
export const loadDeals = createAsyncThunk(
  "deals/loadDeals",
  async (params, { rejectWithValue }) => {
    try {
      const res = await fetchDeals(params);
      return res;
    } catch (err) {
      return rejectWithValue("Failed to fetch deals");
    }
  }
);

const dealsSlice = createSlice({
  name: "deals",
  initialState: {
    data: [],
    total: 0,
    loading: false,
    error: null,
    params: {
      search: "",
      risk: "",
      industry: "",
      minROI: 0,
      page: 1,
      limit: 5,
    },
  },
  reducers: {
    setParams: (state, action) => {
      state.params = { ...state.params, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadDeals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadDeals.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.total = action.payload.total;
      })
      .addCase(loadDeals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setParams } = dealsSlice.actions;
export default dealsSlice.reducer;