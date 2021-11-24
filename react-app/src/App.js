import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import HomePage from './components/HomePage';
import FourZeroFour from './components/fourzerofour';
import Playboard from './components/Playboard';
import GameContext from './store/GameContext';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }


  return (
    <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path='/login' exact={true}>
            <LoginForm />
          </Route>
          <ProtectedRoute path='/play' exact={true} >
            <HomePage/>
          </ProtectedRoute>
          <ProtectedRoute path='/playboard' exact={true} >
            <Playboard/>
          </ProtectedRoute>
          <Route path='/'>
            <FourZeroFour/>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
