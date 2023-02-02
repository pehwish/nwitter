import React, { useState } from 'react';
import { NweetProps } from 'types';
import EditNweet from './EditNweet';
import NweetItem from './NweetItem';


const Nweet = ({ nweetObj, isOwner = false, isInfo=false }: NweetProps) => {
  const [editing, setEditing] = useState(false);

  const toggleEditing = () => setEditing((prev) => !prev);

  return (
    <div>
      {editing ? (
        <EditNweet id={nweetObj.id} originText={nweetObj.text} toggleEditing={toggleEditing} />
      ) : (
          <NweetItem nweetObj={nweetObj} isOwner={isOwner} isInfo={ isInfo} toggleEditing={toggleEditing} />
      )}
    </div>
  );
};

export default Nweet;
