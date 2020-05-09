import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cookies from 'react-cookies';
import Box from './questions/self';
import PersonalCard from './profileCard/card';
import OthersWrite from './questions/others';

const Profile = () => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    document.title = 'Profile';
    const fetchUserAnswers = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/user/answers', {
          headers: { 'x-auth-token': cookies.load('x-auth-token') },
        });
        setAnswers(data);
      } catch (ex) {}
    };
    fetchUserAnswers();
  }, []);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-sm-8 order-2 order-lg-1" style={{ backgroundColor: 'white' }}>
            <h3 className="h3-responsive text-center">Answers about yourself</h3>
            <div className="card-group">
              {answers.map((item) => (
                <Box question={item.questionId.question} answer={item.answer} key={item._id} />
              ))}
            </div>
            <h3 className="h3-responsive text-center">Answers others have written for you</h3>
            <OthersWrite />
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

//   async componentDidMount() {
//     const { data: questions } = await axios.get(
//       'https://yb-server.herokuapp.com/api/answer/5e956c060fda390017da67b7',
//     );
//     const selfAnswers = _.map(questions, _.partialRight(_.pick, ['answer', 'questionId']));
//     this.setState({ selfAnswers });
//   }
