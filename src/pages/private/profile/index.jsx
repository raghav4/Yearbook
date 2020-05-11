import React, { useState, useEffect } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import axios from 'axios';
import cookies from 'react-cookies';
import Box from './questions/self';
import PersonalCard from './profileCard/card';
import OthersWrite from './questions/others';
// import { NoResults } from '../../../components';

const Profile = () => {
  const [answers, setAnswers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [AnswersStatus, setAnswersStatus] = useState(false);
  const [MessagesStatus, setMessagesStatus] = useState(false);
  const [ProgressBar, setProgressBar] = useState(true);

  useEffect(() => {
    document.title = 'Profile';
    const fetchUserAnswers = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/user/answers', {
          headers: { 'x-auth-token': cookies.load('x-auth-token') },
        });
        setAnswers(data);
        if (!data.length) setAnswersStatus(true);
      } catch (ex) {}
    };

    const fetchMessages = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/user/messages', {
          headers: { 'x-auth-token': cookies.load('x-auth-token') },
        });
        setMessages(data);
        if (!data.length) setMessagesStatus(true);
      } catch (ex) {}
    };

    fetchUserAnswers();
    fetchMessages();
    setTimeout(() => {
      setProgressBar(false);
    }, 1000);
  }, []);

  return (
    <>
      {ProgressBar && <LinearProgress variant="indeterminate" color="primary" />}
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-sm-8 order-2 order-lg-1" style={{ backgroundColor: 'white' }}>
            <h4 className="h4-responsive text-center">Answers about yourself</h4>
            <div className="card-group">
              {answers.map((item) => (
                <Box question={item.questionId.question} answer={item.answer} key={item._id} />
              ))}
              {/* {AnswersStatus && (
                <NoResults fontSize="h4" message="You haven't added any answers for yourself" />
              )} */}
            </div>
            <h4 className="h4-responsive text-center">Answers others have written for you</h4>
            {messages.map((item) => (
              <OthersWrite message={item.message} person={item.sentBy} key={item._id} />
            ))}
            {/* {MessagesStatus && (
              <NoResults fontSize="h4" message="Looks like nobody has written for you yet" />
            )} */}
          </div>
          <div className="col-sm-4 order-1 order-lg-2">
            <div className="row" style={{ backgroundColor: 'white' }}>
              <PersonalCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
