import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Status, Avatar, Name } from './FriendListItem.styled.js';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <ListItem>
      <Status $isOnline={isOnline}></Status>
      <Avatar src={avatar} alt={`${name} avatar`} />
      <Name>{name}</Name>
    </ListItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;