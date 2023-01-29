import AppRouter from 'components/Router';
import { authService } from 'fbase';
import React, { useEffect } from 'react';
import useStore from 'store';
import { StoreType } from 'types';
import { Footer, Wrapper } from '../styles';
import Loading from './Loading';

function App() {
  const { getUser, logout, isLoading }:StoreType = useStore((state) => state);

  useEffect(() => {
   authService.onAuthStateChanged((user) => {          
      if (user) {            
        getUser(user);            
        
      } else {
        logout();
      }
    });
   
  }, [getUser, logout]);  

  return (
    <Wrapper>
      <AppRouter />
      <Footer>&copy; {new Date().getFullYear()} Nwitter</Footer>
      <Loading isLoading={isLoading} /> 
    </Wrapper>
  );
}

export default App;
