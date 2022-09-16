import React from 'react';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import Home from './pages/Home';
import './scss/app.scss';

function App() {
  const name = useSelector((state) => state.userName);
  return (
    <div className="App">
      {name === '' && <Login />}
      {name !== '' && <Home />}
    </div>
  );
}

export default App;
