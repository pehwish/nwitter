import React from 'react';
import { BottomBarBox } from '../styles';
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';


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
          <SignUpModal />
        </div>
      </div>
    </BottomBarBox>
  );
};

export default BottomBar;
