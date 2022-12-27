import React from 'react';
import { Button } from './Buttons';
import { styled } from '../stitches.config';
import { Box } from './Box';
import { StoreType } from 'types';
import SignInModal from './SignInModal';

const BottomBarBox = styled(Box, {
  bc: '$blue',
  bottom: 0,
  color: '#fff',
  fontSize: '$4',
  position: 'fixed',
  left: 0,
  right: 0,
  h2: {
    fontSize: '$7',
    lh: 1.5,
  },
  '.bottom-bar__aligner': {
    ai: 'center',
    display: 'flex',
    fd: 'row',
    jc: 'space-between',
    m: '0 auto',
    pl: 88,
    py: 12,
    width: '100%',
    '@bp3': {
      pl: 275,
      width: 990,
    },
  },
});

const BottomBar = () => {
  

  return (
    <BottomBarBox>
      <div className="bottom-bar__aligner">
        <div className="bottom-bar__align">
          <h2>최신 소식을 놓치지 마세요</h2>
          <p>트위터를 사용하면 가장 먼저 알게 됩니다.</p>
        </div>
        <div className="bottom-bar__buttons">
          <SignInModal />
          <Button>가입하기</Button>
        </div>
      </div>
    </BottomBarBox>
  );
};

export default BottomBar;
