import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import Profile from 'routes/Profile';
import Navigation from 'components/Navigation';
import { StoreType } from 'types';
import useStore from 'store';
import BottomBar from './BottomBar';

const AppRouter = () => {
  const { userObj, isLoggedIn }: StoreType = useStore();

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {userObj && (
          <Route exact path="/profile">
            <Profile />
          </Route>
        )}
      </Switch>
      {!isLoggedIn && <BottomBar />}
    </Router>
  );
};

export default AppRouter;
