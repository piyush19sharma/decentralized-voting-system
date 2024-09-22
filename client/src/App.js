// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout';
import CandidateList from './components/Voter/CandidateList';
import Dashboard from './components/Admin/Dashboard';

const App = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <Router>
      <div className="App">
        <h1>Decentralized Voting System</h1>
        {isAuthenticated ? (
          <>
            <p>Welcome, {user.name}</p>
            <Logout />
            <Switch>
              <Route path="/admin" component={Dashboard} />
              <Route path="/" component={CandidateList} />
            </Switch>
          </>
        ) : (
          <Login />
        )}
      </div>
    </Router>
  );
};

export default App;
