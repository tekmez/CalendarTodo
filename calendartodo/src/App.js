import React from 'react';
import { useSelector } from 'react-redux';
import Calendar from './components/Calendar';
import Login from './components/Login';
import UserInfo from './components/UserInfo';
import './scss/app.scss';

function App() {
  const name = useSelector((state) => state.userName);
  return (
    <div className="App">
      {name === '' && <Login />}
      {name !== '' && (
        <>
          <UserInfo />
          <Calendar />
        </>
      )}
    </div>
  );
}

export default App;
