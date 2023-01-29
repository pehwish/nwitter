import React from 'react';
import { DropdownMenu, IconButton, MyInfoWrap } from 'styles'

import { useHistory } from 'react-router-dom';
import { StoreType } from 'types';
import useStore from 'store';

import { Root, Trigger, Portal, Content } from '@radix-ui/react-dropdown-menu';
import { Avatar } from 'components/Avatar';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { authService } from 'fbase';


const MyInfo = () => {
  const { userObj }: StoreType = useStore();
  const history = useHistory();

  
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
          <Root>
            <Trigger asChild>
                <IconButton className='myinfo__menu'>
                  <DotsHorizontalIcon />
                </IconButton>
            </Trigger>
            <Portal>
              <Content>
                <DropdownMenu className='dropdown-menu'>
                  <button
                    onClick={onLogOutClick}
                    className='dropdown-menu__item'
                  >
                    로그아웃
                  </button>               
                </DropdownMenu>
              </Content>
            </Portal>
          </Root>
       </div>
    }  
    </MyInfoWrap>
  )
}

export default MyInfo;