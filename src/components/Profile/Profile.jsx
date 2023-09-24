import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../img/defaultImage.webp';
import {
  ProfileSection,
  Description,
  Avatar,
  UserName,
  Tag,
  Location,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled.js';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileSection>
      <Description>
        <Avatar src={avatar || defaultImage} alt="User avatar" />
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </ProfileSection>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

Profile.defaultProps = {
  avatar: defaultImage,
};

export default Profile;