import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { authService } from 'fbase';
import { userObjType } from 'types';

interface ProfileProps {
  userObj: userObjType;
  refreshUser: () => void;
}

const Profile = ({ refreshUser, userObj }: ProfileProps) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

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
    if (userObj?.displayName !== newDisplayName) {
      await userObj?.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" placeholder="Display name" value={newDisplayName} />
        <input type="submit" value="Update Profile" />
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
