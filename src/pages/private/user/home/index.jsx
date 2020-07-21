import React, { useEffect, useState, useContext } from 'react';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';
import MessageFeed from './messageFeed';
import { Emoji } from '../../../../components';
import { PrivateContext } from '../../../../contexts';
import { apiUrl, endPoints } from '../../../../config.json';
import http from '../../../../services/httpService';
import ModalBox from '../messages/modal';

const HomePage = () => {
  const [User, setUser] = useState('');
  const [Messages, setMessages] = useState([]);
  const { history } = useContext(PrivateContext);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await http.get(`${apiUrl}/${endPoints.user.loggedInUser}`);
        setUser(data.credentials.name);
      } catch (ex) {}
    };
    const fetchFeed = async () => {
      try {
        const { data } = await http.get(`${apiUrl}/${endPoints.messages.feed}`);
        setMessages(data);
        console.log(data);
      } catch (ex) {}
    };
    fetchUserData();
    fetchFeed();
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
              2. You can write about other people from the{' '}
              <Link to="/write">write</Link> section.
            </li>
            <li>
              3. Do not forget to <Link to="/polls">vote</Link> for the people of
              your class.
            </li>
            <li>
              4. Also, add some of the answers for yourself, from{' '}
              <Link to="/answers">here</Link>.
            </li>
            <li>
              5. Visit your <Link to="/profile">Profile</Link> to see, what others
              have written for you.
            </li>
          </ul>
        </div>
        {Messages.map((item) => (
          <MessageFeed
            sentBy={item.sentBy.credentials.name}
            sentTo={item.sendTo.credentials.name}
            messageBody={item.message}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
