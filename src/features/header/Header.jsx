// import { createSelector, createSlice } from '@reduxjs/toolkit';
import * as React from "react";
import * as Redux from 'react-redux';
import { tictactoeAction, tictactoeSelector } from '@/features/tictactoe/Tictactoe.slice';


export function Header() {
  return <div>header</div>;
  const dispatch = Redux.useDispatch();
  // const resetSelector = Redux.useSelector(tictactoeSelector.resetSelector);


  const handleReset = () => {
    // console.log("resetSelector", resetPlay());
    dispatch(tictactoeAction.resetPlay());
  }
  return (
    <button onClick={handleReset}>reset</button>
  );
}
