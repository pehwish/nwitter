import React, { ChangeEvent } from 'react';
import { CameraIcon } from '@radix-ui/react-icons';
import { styled } from '../stitches.config';

export const FileButtonWrap = styled('div', {
  'input[type="file"]': {
    width: '0.1px',
    height: '0.1px',
    opacity: 0,
    overflow: 'hidden',
    position: 'absolute',
    zIndex: -1,
  },
  label: {
    ai: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    height: 30,
    jc: 'center',
    width: 30,
    br: 30,
    '&:hover': {
      bc: '#E8F5FD',
    },
  },
  svg: {
    color: '$blue',
    height: 17,
    width: 17,
  },
});

interface FileButtonProps {
  onChange: (e: any) => void;
}

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
    <FileButtonWrap>
      <input type="file" accept="image/*" onChange={onFileChange} id="file-input" />
      <label htmlFor="file-input">
        <CameraIcon scale={2} />
      </label>
    </FileButtonWrap>
  );
};

export default FileButton;
