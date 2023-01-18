import React, { ChangeEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import Modal from './Modal';
import { Trigger } from '@radix-ui/react-dialog';
import { Button, ProfileWrap } from 'styles';
import useStore from 'store';
import { StoreType, updateUserType } from 'types';
import { authService, storageService } from 'fbase';
import ImagesBox from './ImagesBox';
import FileButton from './FileButton';

const ProfileModal = () => {
  const history = useHistory();
  const { userObj, setUser }: StoreType = useStore();
  const [newDisplayName, setNewDisplayName] = useState(
    userObj?.displayName || ''
  );
  const [photoURL, setPhotoUrl] = useState(userObj?.photoURL || '');
  const [coverImgURL, setCoverImgURL] = useState(userObj?.coverImgURL || '');

  const onLogOutClick = () => {
    authService.signOut();
    history.push('/');
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const downloadUrl = async (imgUrl: string) => { 
    if (userObj) { 
      const attachmentRef = storageService
      .ref()
      .child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(
        imgUrl,
        'data_url'
      );
      const updateImgUrl = await response.ref.getDownloadURL();
      
      return updateImgUrl;
    }  
    return '';
  }

  const onSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userObj && userObj.id) {
      let displayName = userObj.displayName;
      let newPhotoURL = '';
      let newCoverImgURL ='';

      if (userObj.displayName !== newDisplayName) {
        displayName = newDisplayName;
      }

      if (photoURL !== '' && photoURL !== userObj?.photoURL) {      
        newPhotoURL = await downloadUrl(photoURL);                
      }

      if (coverImgURL !== '' && coverImgURL !== userObj?.coverImgURL) {
        newCoverImgURL = await downloadUrl(coverImgURL);
      }

      let updateNewProfile:updateUserType = {
        displayName
      }
      if (newPhotoURL !== '') { 
        updateNewProfile.photoURL = newPhotoURL;
      }
      if (newCoverImgURL !== '') { 
        updateNewProfile.coverImgURL = newCoverImgURL;
      }

      await setUser(userObj.id, userObj.uid, updateNewProfile);
     
    }
  };

  const onPhotoFileChange = (result: any) => {
    
    setPhotoUrl(result);
  };

  const onCoverFileChange = (result: any) => {
    setCoverImgURL(result);
  };

  const onClearPhotoURL = () => setPhotoUrl('');

  const onClearCpverURL = () => setCoverImgURL('');

  return (
    <Modal
      button={
        <Trigger asChild>
          <Button className='header__link'>프로필 수정</Button>
        </Trigger>
      }
    >
      <ProfileWrap>
        <form onSubmit={onSubmit}>
          <div className='profile__imgbox profile__cover'>
            <ImagesBox
              attachment={coverImgURL}
              onClearAttachment={onClearCpverURL}
            />

            <FileButton onChange={onCoverFileChange} />
          </div>
          <div className='profile__inner'>
            <div className='profile__imgbox profile__avatar'>
              <ImagesBox
                attachment={photoURL}
                onClearAttachment={onClearPhotoURL}
              />

              <FileButton onChange={onPhotoFileChange} />
            </div>

            <input
              onChange={onChange}
              type='text'
              placeholder='닉네임'
              value={newDisplayName}
              className='profile__input'
              
            />

            <Button type='submit' color='black'>저장</Button>
          </div>
        </form>
      </ProfileWrap>
      <Button onClick={onLogOutClick}>로그아웃</Button>
    </Modal>
  );
};

export default ProfileModal;