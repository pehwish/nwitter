import { dbService, storageService } from 'fbase';
import React, { useState } from 'react';
import { Avatar } from './Avatar';
import ImagesBox from './ImagesBox';
import { timeForToday } from 'utills/date';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { NweetItemProps } from 'types';
import { IconButton, NweetItemBox } from 'styles';


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
