import React from 'react'
import { MyInfoWrap } from 'styles'

import { StoreType } from 'types';
import useStore from 'store';

import { Avatar } from 'components/Avatar';


const MyInfo = () => {
  const { userObj }: StoreType = useStore();
  
  return (
    
    <MyInfoWrap>
      {userObj && 
        <>
          <Avatar
            src={userObj.photoURL || ''}
            size={3}
          />
          <span>
            { userObj.displayName}
          </span>
       </>
    }
       
    </MyInfoWrap>
  )
}

export default MyInfo;