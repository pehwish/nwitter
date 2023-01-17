import React, { useEffect, useState } from 'react';
import { AuthWrap } from 'styles';
import { NweetType, StoreType } from 'types';
import useStore from 'store';
import Header from 'components/Header';
import { Avatar } from 'components/Avatar';
import { CalendarIcon } from '@radix-ui/react-icons';
import { dbService } from 'fbase';
import Nweet from 'components/Nweet';
import ProfileModal from 'components/ProfileModal';

const Auth = () => {
  const { userObj }: StoreType = useStore();
  const [nweets, setNweets] = useState<NweetType[]>([]);

  useEffect(() => {
    if (userObj) {
      dbService
        .collection('nweets')
        .where('creatorId', '==', userObj.uid)
        .onSnapshot((snapshot) => {
          const nweetArray = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setNweets(nweetArray as NweetType[]);
        });
    }
  }, []);

  return (
    <AuthWrap>
      <Header nwitterCnt={nweets.length}>
        {userObj && (
          <>
            <div
              className='header__cover'
              style={{ backgroundImage: `url(${userObj?.coverImgURL || ''})` }}
            ></div>
            <div className='header__inner'>
              <div className='header__avatar'>
                <Avatar
                  src={userObj.photoURL || userObj.displayName}
                  size={7}
                />
              </div>
              <ProfileModal />
              <div>
                <h3 className='header__displayName'>{userObj.displayName}</h3>
                <p className='header__createDate'>
                  <CalendarIcon />
                  가입일 : {userObj.createdAt}
                </p>
              </div>
            </div>
          </>
        )}
      </Header>

      <div className='auth-nwitter'>
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj?.uid}
          />
        ))}
      </div>
    </AuthWrap>
  );
};

export default Auth;
