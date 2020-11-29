import { useParams }  from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useInstance } from '@vesselize/react';

function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const userService = useInstance('UserService');
  const authService = useInstance('AuthService');

  useEffect(() => {
    userService.getUser(id).then((data) => {
      setUser(data);
      setIsAdmin(authService.isAdmin(data));
    });
  }, [id, userService, authService]);

  return (
    <div>
      <span>{JSON.stringify(user)}</span>
      <p>Role: {isAdmin ? 'Administrator' : 'User'}</p>
    </div>
  );
}

export default Profile;
