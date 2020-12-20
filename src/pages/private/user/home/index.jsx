import React, { useEffect, useState, useContext } from 'react';
import socketIOClient from 'socket.io-client';
import { Pagination } from '@material-ui/lab';
import MessageFeed from './messageFeed';
import { Emoji } from '../../../../components';
import { PrivateContext } from '../../../../contexts';
import { apiUrl, endPoints } from '../../../../config.json';
import http from '../../../../services/httpService';
import { paginate } from '../../../../utils';

const HomePage = () => {
  const [User, setUser] = useState('');
  const [Messages, setMessages] = useState([]);
  const [totalMessages, setTotalMessages] = useState(0);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(5);
  const { history } = useContext(PrivateContext);

  useEffect(() => {
    /**
     * * Centralised place to not re request data every time
     */
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
        setTotalMessages(Math.ceil(data.length / 5));
        // const socket = socketIOClient(apiUrl);
        // socket.on('FromAPI', (data) => {
        //   console.log(data);
        //   fetchFeed();
        //   // setResponse(data);
        // });
      } catch (ex) {}
    };
    fetchUserData();
    fetchFeed();
  }, []);

  const handlePage = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <div className="text-center justify-content-center my-5">
        <h2 className="h2-responsive">
          Hello {User} <Emoji symbol="👋" />
        </h2>
        <h3 className="h3-responsive">Welcome to Yearbook</h3>
        {/* <div className="justify-content-center">
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
        </div> */}
        {paginate(Messages, CurrentPage, postsPerPage).map((item) => (
          <MessageFeed
            sentBy={item.sentBy.credentials.name}
            sentTo={item.sendTo.credentials.name}
            messageBody={item.message}
            key={item._id}
          />
        ))}

        {Messages.length ? (
          <div
            style={{ display: 'flex' }}
            className="my-4 text-center justify-content-center"
          >
            <Pagination
              count={totalMessages}
              color="primary"
              variant="outlined"
              shape="rounded"
              boundaryCount={1}
              showFirstButton
              showLastButton
              onChange={handlePage}
            />
          </div>
        ) : (
          <h4>See the Live Messages</h4>
        )}
      </div>
    </>
  );
};

export default HomePage;
