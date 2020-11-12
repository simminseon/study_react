import { createSelector, createSlice } from '@reduxjs/toolkit';

const name = 'TicTacToe';
const initialState = { playBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0] };

const tictactoeSlice = createSlice({
  name,
  initialState,
  reducers: {
    addPlay(state, action) {
      state.playBoard = action.payload;
    },
    resetPlay(state, action) {
      state.playBoard = action.payload;
    }
  },
});

const stateSelector = createSelector(
  (state) => state,
  (state) => {
    return state.tictactoeReducer.playBoard;
  },
);

export const tictactoeAction = tictactoeSlice.actions;
export const tictactoeReducer = tictactoeSlice.reducer;

export const tictactoeSelector = {
  stateSelector,
};
