import React from 'react';
import { Cross1Icon } from '@radix-ui/react-icons';
import { ImagesBoxProps } from 'types';
import { ImgBox } from 'styles';


const ImagesBox = ({ attachment, onClearAttachment }: ImagesBoxProps) => {
  return (
    <ImgBox>
      <img src={attachment} className="nweet-attachment" alt="" />
      {onClearAttachment && (
        <button type="button" onClick={onClearAttachment} className="nweet-attachment__btn-clear">
          <Cross1Icon />
        </button>
      )}
    </ImgBox>
  );
};

export default ImagesBox;
