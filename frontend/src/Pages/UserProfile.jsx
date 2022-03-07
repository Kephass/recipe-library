import React from 'react';
import { useParams } from 'react-router-dom';
import { UserProfile } from '../Components/User';
import { users } from '../utils/mockData';

function ScreenUserProfile() {
  const { userId } = useParams();

  return (
    <div>
      User Profile Screen for User ID {userId}
      <UserProfile user={users[userId - 1]} />
    </div>
  );
}

export default ScreenUserProfile;
