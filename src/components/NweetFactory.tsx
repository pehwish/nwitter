import { dbService, storageService } from 'fbase';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { Avatar } from 'components/Avatar';
import FileButton from 'components/FileButton';
import ImagesBox from 'components/ImagesBox';
import { StoreType, onSubmitData } from 'types';
import { Button, NweetForm, NweetInput } from 'styles';
import useStore from 'store';

const NweetFactory = () => {
  const { userObj }: StoreType = useStore();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isDirty, isValid },
  } = useForm<onSubmitData>();
  const [attachment, setAttachment] = useState('');

  const onSubmit = async (data: onSubmitData): Promise<void> => {
    let attachmentUrl = '';
    if (userObj) {
      if (attachment !== '') {
        const attachmentRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
        const response = await attachmentRef.putString(attachment, 'data_url');
        attachmentUrl = await response.ref.getDownloadURL();
      }
      const nweetObj = {
        text: data.nweet,
        createdAt: Date.now(),
        creatorId: userObj.uid,
        displayName: userObj.displayName,
        photoURL: userObj.photoURL,
        attachmentUrl,
      };

      await dbService.collection('nweets').add(nweetObj);
      setValue('nweet', '');
      setAttachment('');
    }
  };

  const onFileChange = (result: any) => {
    setAttachment(result);
  };

  const onClearAttachment = () => setAttachment('');

  return (
    <NweetForm onSubmit={handleSubmit(onSubmit)}>
      {userObj && <Avatar src={userObj.photoURL || userObj.displayName || ''} size={4} />}
      <div className="nweet-from__aligner">
        <NweetInput
          type="text"
          placeholder="무슨 일이 일어나고 있나요?"
          maxLength={120}
          {...register('nweet', { required: true, maxLength: 120 })}
        />

        {attachment && <ImagesBox attachment={attachment} onClearAttachment={onClearAttachment} />}

        <div className="nweet-from__align">
          <FileButton onChange={onFileChange} />

          <Button type="submit" color="blue" disabled={!isDirty && !isValid}>
            트윗하기
          </Button>
        </div>
      </div>
    </NweetForm>
  );
};

export default NweetFactory;
