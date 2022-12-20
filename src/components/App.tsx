import React, { useState, useEffect } from 'react';
import AppRouter from 'components/Router';
import { authService } from 'fbase';
import { styled } from '../stitches.config';
import { StoreType, userObjType } from 'types';
import useStore from 'store';

const Wrapper = styled('div', {
  display: 'flex',
  height: '100%',
  width: '100%',
  m: '0 auto',
  '@bp3': {
    width: 990,
  },
});

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState<userObjType | null>(null);
  const { isSignUpModal }:StoreType = useStore(state =>state);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName || '',
          photoURL: user.photoURL || '',
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
    if (user) {
      setUserObj({
        displayName: user.displayName || '',
        photoURL: user.photoURL || '',
        uid: user.uid,
        updateProfile: (args) => user.updateProfile(args),
      });
    }
  };

  return (
    <Wrapper>
      {init ? (
        <AppRouter refreshUser={refreshUser} isLoggedIn={Boolean(userObj)} userObj={userObj} />
      ) : (
        'Initializing...'
      )}
      {isSignUpModal && 'signupmodal..'}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </Wrapper>
  );
}

export default App;
