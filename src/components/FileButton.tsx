import React, { ChangeEvent } from 'react';
import { CameraIcon } from '@radix-ui/react-icons';
import { FileButtonProps } from 'types';
import { FileButtonWrap } from 'styles';

const FileButton = ({ onChange }: FileButtonProps) => {
  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;
    if (files) {
      const theFile = files[0];
      const reader = new FileReader();
      reader.onloadend = (finishedEvent: any) => {
        console.log(finishedEvent);

        const {
          currentTarget: { result },
        } = finishedEvent;

        if (result) {
          onChange(result);
        }
      };
      reader.readAsDataURL(theFile);
    }
  };

  return (
    <FileButtonWrap className='file_btn'>      
      <label>
        <input
          type='file'
          accept='image/*'
          onChange={onFileChange}
          
        />
        <CameraIcon scale={2} />
      </label>
    </FileButtonWrap>
  );
};

export default FileButton;
