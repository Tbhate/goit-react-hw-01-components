import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';
import { List } from './FriendList.styled.js';

function FriendList({ friends }) {
  return (
    <List>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </List>
  );
}

export default FriendList;