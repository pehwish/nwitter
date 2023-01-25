import React, { useState, useEffect } from 'react';
import { DropdownMenu, IconButton, MyInfoWrap } from 'styles'

import { useHistory } from 'react-router-dom';
import { StoreType } from 'types';
import useStore from 'store';

import { Avatar } from 'components/Avatar';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { authService } from 'fbase';


const MyInfo = () => {
  const { userObj }: StoreType = useStore();
  const [isOpened, setIsOpend] = useState(false);
  const history = useHistory();
  const toggleMenu = () => setIsOpend((prev) => !prev);


  
  const onLogOutClick = () => {
    authService.signOut();
    history.push('/');
  };


  return (
    <MyInfoWrap>
      {userObj && 
        <div className='myinfo__aligner'>
          <Avatar
            src={userObj.photoURL || ''}
            size={3}
          />
          <div className='myinfo__align'>
            <em>
              { userObj.displayName}
            </em>
            <span>
              { userObj.email}
            </span>
          </div>
          <IconButton onClick={toggleMenu} className='myinfo__menu'>
            <DotsHorizontalIcon />
          </IconButton>
          {isOpened && (
            <DropdownMenu className='dropdown-menu'>
              <button
                onClick={onLogOutClick}
                className='dropdown-menu__item'
              >
                로그아웃
              </button>               
            </DropdownMenu>
          )}
       </div>
    }
       
    </MyInfoWrap>
  )
}

export default MyInfo;