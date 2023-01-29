import React, { useState, ChangeEvent } from 'react';
import { dbService } from 'fbase';
import { EditNweetProps } from 'types';
import { Button, EditWrap, NweetInput } from 'styles';


const EditNweet = ({ id, originText, toggleEditing }: EditNweetProps) => {
  const [newNweet, setNewNweet] = useState(originText);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setNewNweet(value);
  };

  const onSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    await dbService.doc(`nweets/${id}`).update({
      text: newNweet,
    });

    toggleEditing();
  };

  return (
    <EditWrap>
      <form onSubmit={onSubmit}>
        <NweetInput
          type="text"
          placeholder="Edit your nweet"
          value={newNweet}
          required
          onChange={onChange}
          className="form__input"
        />
        <div className='form__buttons'>
          <Button type="submit" color={'blue'} >수정</Button>
          <Button onClick={toggleEditing}>취소</Button>
          </div>
      </form>
     
    </EditWrap>
  );
};

export default EditNweet;
