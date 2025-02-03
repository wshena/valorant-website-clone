// src/features/counter/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Definisikan tipe untuk state awal
interface UtilityState {
  hamburgerClick: boolean
}

// State awal
const initialState: UtilityState = {
  hamburgerClick: false
};

// Buat slice
const utilitySlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggleHamburger: (state, action:PayloadAction<boolean>) => {
      state.hamburgerClick = action.payload
    }
  },
});

// Export actions
export const { toggleHamburger } = utilitySlice.actions;

// Export reducer
export default utilitySlice.reducer;