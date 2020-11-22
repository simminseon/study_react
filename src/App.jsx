import React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import { Main } from '@/features/main';
import { Header } from '@/features/header';
import { Home } from './components/Home';
import { Tictactoe } from '@/features/tictactoe';
import { Product } from '@/features/Product';
import { Tictactoe2 } from './tictactoe2/Tictactoe2';
import store from '@/app/store';

function App() {
  return (
    <Provider store={store}>
      <div>React beginner</div>
      <Main />
      <Header />
      <Home />
      <Tictactoe />
      <Product />
      <Tictactoe2 />
    </Provider>
  );
}

export default App;
