import React from 'react';
import profilePic from '../assets/ProfilePic.JPG';

function ProfilePicture(props) {
  const { alt } = props;
  return (
    <img src={profilePic} alt={alt} />
  );
}

export default ProfilePicture;
