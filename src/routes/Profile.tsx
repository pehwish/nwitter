import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { authService, storageService } from 'fbase';
import { StoreType } from 'types';
import { v4 as uuidv4 } from 'uuid';
import useStore from 'store';
import FileButton from 'components/FileButton';
import Header from 'components/Header';
import { Button, ProfileWrap } from 'styles';

const Profile = () => {
  const history = useHistory();
  const { userObj, refreshUser }: StoreType = useStore();
  const [newDisplayName, setNewDisplayName] = useState(userObj?.displayName || '');
  const [attachment, setAttachment] = useState('');

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

  const onSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    let photoURL = '';
    if (userObj && userObj?.displayName !== newDisplayName) {
      //photoURL
      if (attachment !== '') {
        const attachmentRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
        const response = await attachmentRef.putString(attachment, 'data_url');
        photoURL = await response.ref.getDownloadURL();
      }

      await userObj.updateProfile({
        displayName: newDisplayName,
        photoURL
      });
      refreshUser();
    }
  };

  
  const onFileChange = (result: any) => {
    setAttachment(result);
  };

  return (
    <ProfileWrap>
      <Header></Header>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" placeholder="Display name" value={newDisplayName} />
        <FileButton onChange={onFileChange} />
        <Button type="submit">저장</Button>
      </form>
      <Button onClick={onLogOutClick}>로그아웃</Button>
    </ProfileWrap>
  );
};

export default Profile;
