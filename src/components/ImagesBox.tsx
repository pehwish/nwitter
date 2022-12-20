import React from 'react';
import { Box } from './Box';
import { Cross1Icon } from '@radix-ui/react-icons';
import { styled } from '../stitches.config';

const ImgBox = styled(Box, {
  br: '$4',
  overflow: 'hidden',
  position: 'relative',
  mt: 12,
  '.nweet-attachment': {
    width: '100%',
  },
  '.nweet-attachment__btn-clear': {
    bc: '$hiContrast',
    br: '$pill',
    height: 32,
    left: 4,
    position: 'absolute',
    top: 4,
    width: 32,
    svg: {
      color: '$loContrast',
    },
  },
});

interface ImagesBoxProps {
  attachment: string;
  onClearAttachment?: () => void;
}

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
