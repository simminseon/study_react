// import { createSelector, createSlice } from '@reduxjs/toolkit';
import * as React from "react";
import * as Redux from 'react-redux';
import { tictactoeAction, tictactoeSelector } from '@/features/tictactoe/Tictactoe.slice';


export function Header() {
  const dispatch = Redux.useDispatch();
  const resetSelector = Redux.useSelector(tictactoeSelector.resetSelector);


  const handleReset = () => {
    console.log("resetSelector", resetSelector);
    dispatch(tictactoeAction.resetPlay(handleReset));
  }
  return (
    <button onClick={handleReset}>reset</button>
  );
}
