import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cookies from 'react-cookies';
import { Link } from 'react-router-dom';
import { Emoji } from '../../components';

const HomePage = () => {
  const [User, setUser] = useState('');
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/user/info', {
          headers: { 'x-auth-token': cookies.load('x-auth-token') },
        });
        setUser(data.credentials.name);
      } catch (ex) {}
    };
    fetchUserData();
  }, []);

  return (
    <>
      <div className="text-center justify-content-center my-5">
        <h2 className="h2-responsive">
          Hello {User} <Emoji symbol="👋" />
        </h2>
        <h3 className="h3-responsive">Welcome to Yearbook</h3>
        <div className="justify-content-center">
          <ul className="text-center">
            <li>
              1. Do not forget to update your <Link to="/details">details</Link>.
            </li>
            <li>
              2. You can write about other people from the <Link to="/write">write</Link> section.
            </li>
            <li>
              3. Do not forget to <Link to="/polls">vote</Link> for the people of your class.
            </li>
            <li>
              4. Also, add some of the answers for yourself, from <Link to="/answers">here</Link>.
            </li>
            <li>
              5. Visit your <Link to="/profile">Profile</Link> to see, what others have written for
              you.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomePage;
