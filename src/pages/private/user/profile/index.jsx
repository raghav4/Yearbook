import React, { useState, useEffect, useContext } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Link } from 'react-router-dom';
import PersonalCard from './profileCard/socialCard';
import Message from './messages';
import { NoResults, Emoji } from '../../../../components';
import { PrivateContext } from '../../../../contexts';
import { apiUrl, endPoints } from '../../../../config.json';
import http from '../../../../services/httpService';

const Profile = () => {
  const [answers, setAnswers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [NoAnswers, setNoAnswers] = useState(false);
  const [MessagesStatus, setMessagesStatus] = useState(false);
  const [ProgressBar, setProgressBar] = useState(true);

  const { history } = useContext(PrivateContext);

  useEffect(() => {
    document.title = 'Profile';
    const fetchUserAnswers = async () => {
      try {
        const { data } = await http.get(
          `${apiUrl}/${endPoints.slamBook.getUserAnswers}`,
        );
        // console.log(data);
        setAnswers(data);
        if (!data.length) setNoAnswers(true);
      } catch (ex) {}
    };

    const fetchMessages = async () => {
      try {
        const { data } = await http.get(
          `${apiUrl}/${endPoints.messages.forLoggedInUser}`,
        );
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
          <div className="col-sm-8 order-2 order-lg-1">
            <h4 className="h4-responsive text-center animated fadeIn slow">
              🔍 Know Me Better
            </h4>

            {NoAnswers ? (
              <p className="mx-3 my-3 text-muted text-center">
                You have not added any answer, try adding it from{' '}
                <Link to="/answers">answers</Link> page
              </p>
            ) : (
              <div className="card border-success mx-5 my-3">
                {answers.map((item, index) => (
                  <div
                    className="card-body text-dark animated fadeIn slow"
                    key={item._id}
                  >
                    <h6
                      className="card-title text-left h6-responsive mb-2"
                      style={{ textDecoration: 'underline' }}
                    >
                      {index + 1}. {item.questionId.title}
                    </h6>
                    <p className="card-text">{item.answer}</p>
                  </div>
                ))}
              </div>
            )}

            <h4 className="h4-responsive text-center animated fadeIn slow">
              <Emoji label="🖊" symbol="🖊" /> What others have written for you
            </h4>
            {messages.map((item, index) => (
              <Message
                message={item.message}
                person={item.sentBy}
                index={index}
                key={item._id}
              />
            ))}
            {MessagesStatus && (
              <p className="mx-3 my-3 text-muted text-center p-responsive">
                Looks like nobody has written for you anything yet or you're early
                here 😎 why don't you <Link to="/write">start</Link> first?{' '}
                <Emoji label="smile" symbol="😀" />
              </p>
            )}
          </div>
          <div className="col-sm-4 order-1 order-lg-2">
            <div className="row">
              <PersonalCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
