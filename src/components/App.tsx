import React, { useEffect } from 'react';
import AppRouter from 'components/Router';
import { Footer, Wrapper } from '../styles';
import { StoreType } from 'types';
import useStore from 'store';
import { authService } from 'fbase';
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
   
  }, []);  

  return (
    <Wrapper>
      <AppRouter />
      <Footer>&copy; {new Date().getFullYear()} Nwitter</Footer>
      <Loading isLoading={isLoading} /> 
    </Wrapper>
  );
}

export default App;
