import React, { useState, ChangeEvent } from 'react';
import { dbService } from 'fbase';

interface EditNweetProps {
  id: string;
  originText: string;
  toggleEditing: () => void;
}

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
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Edit your nweet"
          value={newNweet}
          required
          onChange={onChange}
        />
        <input type="submit" value="Update Nweet" />
      </form>
      <button onClick={toggleEditing}>Cancel</button>
    </>
  );
};

export default EditNweet;
