import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import Profile from 'routes/Profile';
import Navigation from 'components/Navigation';
import { userObjType } from 'types';
import BottomBar from './BottomBar';

interface AppRouterProps {
  refreshUser: () => any;
  isLoggedIn: boolean;
  userObj: userObjType | null;
}

const AppRouter = ({ refreshUser, isLoggedIn, userObj }: AppRouterProps) => {
  return (
    <Router>
      <Navigation userObj={userObj} />
      <Switch>
        <Route exact path="/">
          <Home userObj={userObj} />
        </Route>
        {userObj && (
          <Route exact path="/profile">
            <Profile refreshUser={refreshUser} userObj={userObj} />
          </Route>
        )}
      </Switch>
      {!isLoggedIn && <BottomBar />}
    </Router>
  );
};

export default AppRouter;
