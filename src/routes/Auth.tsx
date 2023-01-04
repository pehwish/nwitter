import React from 'react'
import { AuthWrap } from 'styles'
import { StoreType } from 'types';
import useStore from 'store';
import { Link } from 'react-router-dom';
import Header from 'components/Header';
import { Avatar } from 'components/Avatar';


const Auth = () => {
  const { userObj, refreshUser }: StoreType = useStore();


  return (
    <AuthWrap>
      <Header>
        <div className='header__inner'>
          {userObj && <Avatar src={userObj.photoURL || userObj.displayName} size={4} />}
            <Link to="/profile">
              <span>프로필 수정</span>
            </Link>
        </div>
      </Header>

    </AuthWrap>
  )
}

export default Auth