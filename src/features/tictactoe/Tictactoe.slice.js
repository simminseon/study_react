import { createSelector, createSlice } from '@reduxjs/toolkit';

const name = 'TicTacToe';
const initialState = { 
  boardData: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  count: 0,
  boardHistory: [[0, 0, 0, 0, 0, 0, 0, 0, 0]],
 };

 // createSlice() : 감속기 함수의 객체, 슬라이스 이름, 초기 상태 값을 받아 해당 작업 생성자 및 작업 유형으로 슬라이스 감속기를 자동으로 생성
const tictactoeSlice = createSlice({
  name,
  initialState,
  reducers: {
    addPlay(state, action) {
      state.boardData = action.payload;
      state.count = action.payload;
      state.boardHistory = action.payload;
    },
    resetPlay(state, action) {
      state.boardData = initialState.boardData;
      state.count = initialState.count;
      state.boardHistory = initialState.boardHistory;
    }
  },
});


// createSelector() : 사용하기 쉽도록 다시 내 보낸 reselect 라이브러리의 
const stateSelector = createSelector(
  (state) => state,
  (state) => {
    return state.tictactoeReducer;
  },
);


export const tictactoeAction = tictactoeSlice.actions;
export const tictactoeReducer = tictactoeSlice.reducer;

export const tictactoeSelector = {
  stateSelector,
};
