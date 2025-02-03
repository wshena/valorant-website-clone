import { configureStore } from "@reduxjs/toolkit";
import utilityReducer from './Slice/UtilitySlice'

export const store = configureStore({
  reducer: {
    utility: utilityReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;