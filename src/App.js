import React from 'react';
import BookingPage from './components/Home/bookingPage';
import Home from './components/Home';
import './App.css';
import './components/auth/style.css';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/router/privateRoute';
import AuthRootComponent from './components/auth';

function App() {
  return (
    <div className='root'>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
        </Route>
        {/*<Route path='login' element={<AuthRootComponent />} />
        <Route path='register' element={<AuthRootComponent />} />*/}
        <Route path='comp' element={<BookingPage />} />
      </Routes>
    </div>
  );
}

export default App;
