import React, { useState, useEffect } from 'react';
import AppRouter from 'components/Router';
import { authService } from 'fbase';
import { styled } from '../stitches.config';
import { StoreType } from 'types';
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
  const { onAuthState }:StoreType = useStore((state) => state);

  useEffect(() => { 
    onAuthState();
   
  },[])
  

  return (
    <Wrapper>
      <AppRouter />
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </Wrapper>
  );
}

export default App;
