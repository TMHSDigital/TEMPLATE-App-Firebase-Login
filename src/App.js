import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import firebase from './utils/firebase';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './styles/App.css';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => (
            user ? <Redirect to="/dashboard" /> : <Login />
          )} />
          <Route path="/dashboard" render={() => (
            user ? <Dashboard user={user} /> : <Redirect to="/" />
          )} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
