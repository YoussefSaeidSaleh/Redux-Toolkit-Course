const createSlice = require("@reduxjs/toolkit").createSlice;
const axios = require("axios");
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
});
