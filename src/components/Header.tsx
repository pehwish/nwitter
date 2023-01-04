import { ArrowLeftIcon } from '@radix-ui/react-icons'
import React from 'react'
import { HeaderProps, StoreType } from 'types';
import useStore from 'store';
import { useHistory } from 'react-router-dom';
import { HeaderWrap } from 'styles';

const Header = ({ children}:HeaderProps) => {
  const { userObj }: StoreType = useStore();
  const history = useHistory();

  const onClick = () => {   
    history.goBack();
  }

  return (
    <HeaderWrap>
      <div className='header__align'>
        <button onClick={onClick}>
            <ArrowLeftIcon></ArrowLeftIcon>
        </button>
        <h2 className='header__display-name'>
          {userObj?.displayName || ''}       
        </h2>
      </div>        
      {children}
    </HeaderWrap>
  )
}

export default Header;