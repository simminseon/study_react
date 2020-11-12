import {
  configureStore,
  combineReducers, // redux의 그것과 같다.
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { tictactoeReducer } from '@/features/tictactoe';

const rootReducer = combineReducers({
  tictactoeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
