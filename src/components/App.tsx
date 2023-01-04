import React, { useEffect } from 'react';
import AppRouter from 'components/Router';
import { Wrapper } from '../styles';
import { StoreType } from 'types';
import useStore from 'store';

function App() {
    const { onAuthState }:StoreType = useStore((state) => state);

  useEffect(() => {
    onAuthState();
   
  }, []);  

  return (
    <Wrapper>
      <AppRouter />
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </Wrapper>
  );
}

export default App;
