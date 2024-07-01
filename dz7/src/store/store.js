import { configureStore, createSlice } from '@reduxjs/toolkit';

const requestSlice = createSlice({
  name: 'requests',
  initialState: {
    firstPageRequestSent: false,
    secondPageRequestSent: false,
    thirdPageRequestSent: false,
  },
  reducers: {
    sendFirstPageRequest(state) {
      state.firstPageRequestSent = true;
    },
    sendSecondPageRequest(state) {
      state.secondPageRequestSent = true;
    },
    sendThirdPageRequest(state) {
      state.thirdPageRequestSent = true;
    },
  },
});

export const {
  sendFirstPageRequest,
  sendSecondPageRequest,
  sendThirdPageRequest,
} = requestSlice.actions;

const store = configureStore({
  reducer: {
    requests: requestSlice.reducer,
  },
});

export default store;
