import './App.css';
import Test from './test/Test';
import Greeting from './test/Greeting';


function App() {
  return (
    <div className="App">
      <Test />
      <Greeting isLoggedIn={false} />
    </div>
  );
}

export default App;
