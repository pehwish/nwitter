import { CalendarIcon } from '@radix-ui/react-icons';
import { Avatar } from 'components/Avatar';
import Header from 'components/Header';
import Nweet from 'components/Nweet';
import ProfileModal from 'components/ProfileModal';
import { dbService } from 'fbase';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useStore from 'store';
import { AuthWrap } from 'styles';
import { NweetType, StoreType, userType } from 'types';

type PageParams = {
  uid: string;
};


const Auth = () => {
  let { uid } = useParams<PageParams>();
  const { userObj }: StoreType = useStore();
  const [nweets, setNweets] = useState<NweetType[]>([]);
  const [userInfo, setUserInfo] = useState<userType | null >(null);

  useEffect(() => {
    if (uid) { 
      
      dbService
        .collection('nweets')
        .where('creatorId', '==', uid)
        .orderBy('createdAt', "desc")
        .onSnapshot((snapshot) => {
          const nweetArray = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setNweets(nweetArray as NweetType[]);
        });
      
        dbService.collection('users').where('uid', '==', uid).onSnapshot((snapshot) => {
          const response = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setUserInfo(response[0] as userType);
        });
    } 
  }, [uid, userInfo]);

  return (
    <AuthWrap>
      <Header displayName={userInfo?.displayName || ''} nwitterCnt={nweets.length}>
        <div
        className='header__cover'
        style={{ backgroundImage: `url(${userInfo?.coverImgURL || ''})` }}
         />
        <div className='header__inner'>
          <div className='header__avatar'>
            <Avatar
            src={userInfo?.photoURL || userInfo?.displayName || ''}
            size={7}
            />
          </div>
          {uid === userObj?.uid && (
            <ProfileModal />
          )}
          <div className='header__info'>
            <h3 className='header__displayName'>{userInfo?.displayName}</h3>
            <p className='header__createDate'>
              <CalendarIcon /> 가입일 : {userInfo?.createdAt}
            </p>
          </div>
        </div>
      </Header>

      <div className='auth-nwitter'>
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj?.uid}
            isInfo
          />
        ))}
      </div>
    </AuthWrap>
  );
};

export default Auth;
