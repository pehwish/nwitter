import Nweet from 'components/Nweet';
import NweetFactory from 'components/NweetFactory';
import { dbService } from 'fbase';
import React, { useEffect, useState } from 'react';
import { NweetType, StoreType } from 'types';
import useStore from 'store';
import { Main } from 'styles';


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
      { userObj && <NweetFactory /> }     

      <div>
        {nweets.map((nweet) => (
          <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId === userObj?.uid} />
        ))}
      </div>
    </Main>
  );
};
export default Home;
