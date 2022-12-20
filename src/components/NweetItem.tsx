import { dbService, storageService } from 'fbase';
import React, { useState } from 'react';
import { Avatar } from './Avatar';
import { styled } from '../stitches.config';
import ImagesBox from './ImagesBox';
import { timeForToday } from 'utills/date';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { IconButton } from './Buttons';
import { NweetType } from 'types';

const NweetItemBox = styled('div', {
  borderTop: '1px solid rgb(239, 243, 244)',
  px: 16,
  py: 12,
  display: 'flex',
  fd: 'row',
  '&:hover': {
    bc: '$mauve3',
  },
  '.nweetitem__content': {
    ml: 12,
  },
  '.nweetitem__header': {
    ai: 'center',
    display: 'flex',
    fd: 'row',
    fontSize: '$3',
    lh: '20px',
  },
  '.nweetitem__date': {
    color: '$gray9',

    '&::before': {
      content: ' · ',
    },
  },
  '.nweetitem__menu': {
    ml: 'auto',
    position: 'relative',
  },
  '.nweetitem__nweet': {
    fontSize: '$4',
    fontWeight: '400',
    mb: 12,
  },
  '.dropdown-menu': {
    position: 'absolute',
    bc: '#fff',
    zIndex: 1,
    right: 0,
    width: 200,
    br: '$2',
    display: 'flex',
    fd: 'column',
    bs: 'rgb(101 119 134 / 20%) 0px 0px 15px, rgb(101 119 134 / 15%) 0px 0px 3px 1px',
  },
});

interface NweetItemProps {
  nweetObj: NweetType;
  isOwner: boolean;
  toggleEditing: () => void;
}

const NweetItem = ({ nweetObj, isOwner, toggleEditing }: NweetItemProps) => {
  const [isOpened, setIsOpend] = useState(false);
  const onDeleteClick = async () => {
    const ok = window.confirm('Are you sure you want to delete this nweet?');
    if (ok) {
      await dbService.doc(`nweets/${nweetObj.id}`).delete();
      if (nweetObj.attachmentUrl !== '') {
        await storageService.refFromURL(nweetObj.attachmentUrl).delete();
      }
    }
  };

  const toggleMenu = () => setIsOpend((prev) => !prev);

  return (
    <NweetItemBox>
      <Avatar src={nweetObj.photoURL || nweetObj.displayName} size={4} />
      <div className="nweetitem__content">
        <div className="nweetitem__header">
          <h3 className="nweetitem__name">{nweetObj.displayName}</h3>
          <span className="nweetitem__date">{timeForToday(nweetObj.createdAt)}</span>

          {isOwner && (
            <div className="nweetitem__menu">
              <IconButton onClick={toggleMenu}>
                <DotsHorizontalIcon />
              </IconButton>
              {isOpened && (
                <div className="dropdown-menu">
                  <button onClick={onDeleteClick}>Delete Nweet</button>
                  <button onClick={toggleEditing}>Edit Nweet</button>
                </div>
              )}
            </div>
          )}
        </div>
        <h4 className="nweetitem__nweet">{nweetObj.text}</h4>
        {nweetObj.attachmentUrl && <ImagesBox attachment={nweetObj.attachmentUrl} />}
      </div>
    </NweetItemBox>
  );
};

export default NweetItem;
