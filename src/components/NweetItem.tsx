import { dbService, storageService } from 'fbase';
import React from 'react';
import { Avatar } from './Avatar';
import ImagesBox from './ImagesBox';
import { timeForToday } from 'utills/date';
import {
  DotsHorizontalIcon,
  Pencil1Icon,
  TrashIcon,
} from '@radix-ui/react-icons';
import { NweetItemProps } from 'types';
import { Root, Trigger, Portal, Content } from '@radix-ui/react-dropdown-menu';
import { DropdownMenu, IconButton, NweetItemBox } from 'styles';

const NweetItem = ({ nweetObj, isOwner, toggleEditing }: NweetItemProps) => {

  const onDeleteClick = async () => {
    const ok = window.confirm('트윗을 삭제할까요?');
    if (ok) {
      await dbService.doc(`nweets/${nweetObj.id}`).delete();
      if (nweetObj.attachmentUrl !== '') {
        await storageService.refFromURL(nweetObj.attachmentUrl).delete();
      }
    }
  };


  return (
    <NweetItemBox>
      <Avatar src={nweetObj.photoURL || nweetObj.displayName} size={4} />
      <div className='nweetitem__content'>
        <div className='nweetitem__header'>
          <h3 className='nweetitem__name'>{nweetObj.displayName}</h3>
          <span className='nweetitem__date'>
            {timeForToday(nweetObj.createdAt)}
          </span>

          {isOwner && (
            <Root>
              <div className='nweetitem__menu'>
                <Trigger asChild>
                  <IconButton>
                    <DotsHorizontalIcon />
                  </IconButton>
                </Trigger>
                <Portal>
                  <Content>
                    <DropdownMenu>
                      <button
                        onClick={onDeleteClick}
                        className='dropdown-menu__item dropdown-menu__item--red'
                      >
                        <TrashIcon />삭제하기
                      </button>
                      <button
                        onClick={toggleEditing}
                        className='dropdown-menu__item'
                      >
                        <Pencil1Icon />수정하기
                      </button>
                  </DropdownMenu>
                  </Content>
                </Portal>
              </div>
            </Root>
          )}
        </div>
        <h4 className='nweetitem__nweet'>{nweetObj.text}</h4>
        {nweetObj.attachmentUrl && (
          <ImagesBox attachment={nweetObj.attachmentUrl} />
        )}
      </div>
    </NweetItemBox>
  );
};

export default NweetItem;
