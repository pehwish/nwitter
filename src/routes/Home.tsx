import Nweet from 'components/Nweet';
import NweetFactory from 'components/NweetFactory';
import { dbService } from 'fbase';
import React, { useEffect, useState } from 'react';
import { NweetType, StoreType } from 'types';
import useStore from 'store';
import { styled } from '../stitches.config';

const Main = styled('main', {
  flex: 1,
  borderLeft: '1px solid rgb(239, 243, 244)',
  borderRight: '1px solid rgb(239, 243, 244)',
  maxWidth: 600,
  '.main-header': {
    px: 16,
  },
  '.main-header__text': {
    fontSize: '$6',
    py: 16,
  },
});

const Home = () => {
  const { userObj }: StoreType = useStore();
  const [nweets, setNweets] = useState<NweetType[]>([]);

  useEffect(() => {
    dbService.collection('nweets').orderBy('createdAt', "desc").onSnapshot((snapshot) => {
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setNweets(nweetArray as NweetType[]);
    });
  }, []);

  return (
    <Main>
      <div className="main-header">
        <h2 className="main-header__text">홈</h2>
      </div>
      {userObj && <NweetFactory userObj={userObj} />}

      <div>
        {nweets.map((nweet) => (
          <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId === userObj?.uid} />
        ))}
      </div>
    </Main>
  );
};
export default Home;
