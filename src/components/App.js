import React, { useState, useEffect } from 'react';
import AppRouter from 'components/Router';
import { authService } from 'fbase';
import { styled } from '../stitches.config.ts';

const Wrapper = styled('div', {
  display: 'flex',
  height:'100vh'
})

function App() {
  const [init, setInit] = useState(false);

  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };

  return (
    <Wrapper>
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
        />
      ) : (
        'Initializing...'
      )}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </Wrapper>
  );
}

export default App;
