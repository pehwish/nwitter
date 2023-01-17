import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from 'components/Navigation';
import { StoreType } from 'types';
import useStore from 'store';
import BottomBar from './BottomBar';
import { Auth, Home } from 'routes';

const AppRouter = () => {
  const { userObj, isLoggedIn }: StoreType = useStore();

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        {userObj && (
          <Route exact path='/myPage'>
            <Auth />
          </Route>
        )}
      </Switch>
      {!isLoggedIn && <BottomBar />}
    </Router>
  );
};

export default AppRouter;
