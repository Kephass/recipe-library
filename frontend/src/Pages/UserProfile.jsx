import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserProfile } from '../Components/User';
import axios from 'axios';

function ScreenUserProfile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUserFromBackend() {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/users/${userId}`
        );
        console.log(response.data);
        setUser(response.data);
      } catch (error) {
        console.log('Error fetching user: ', error);
      }
    }

    getUserFromBackend();
  }, []);

  return (
    <div>
      User Profile Screen for User ID {userId}
      {user && <UserProfile user={user} />}
    </div>
  );
}

export default ScreenUserProfile;
