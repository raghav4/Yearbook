import React, { useState, useEffect } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import bulletTrain from 'bullet-train-client';
import PollCard from './card';
import http from '../../../../services/httpService';
import { apiUrl, endPoints } from '../../../../config.json';
import { NotifyAlert } from '../../../../components';
// import './index.css';

const ListPolls = () => {
  const [persons, setPersons] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [pollEnabled, setPollEnabled] = useState(true);
  const [ProgressBar, setProgressBar] = useState(true);

  useEffect(() => {
    bulletTrain.init({
      environmentID: '4zJRXfSCJNsX95qctABwsv',
      onChange: (oldFlags, params) => {
        // Occurs whenever flags are changed

        const { isFromServer } = params; // Determines if the update came from the server or local cached storage

        // Check for a feature
        if (bulletTrain.hasFeature('poll_voting')) {
          setPollEnabled(true);
          console.log('Feature flag enabled..');
        } else {
          setPollEnabled(false);
          console.log('feature flag disabled..');
        }

        // Or, use the value of a feature
        const bannerSize = bulletTrain.getValue('poll_voting');

        // Check whether value has changed
        const bannerSizeOld =
          oldFlags['poll_voting'] && oldFlags['poll_voting'].value;
        if (bannerSize !== bannerSizeOld) {
          console.log('Changed the value !!');
          // Value has changed, do something here
        }
      },
    });
    const fetchQuestions = async () => {
      try {
        const { data } = await http.get(`http://localhost:5000/api/polls/all`);
        setQuestions(data);
      } catch (ex) {}
    };
    const fetchStudents = async () => {
      try {
        const { data } = await http.get(
          `${apiUrl}/${endPoints.user.getClassStudents}`,
        );
        setPersons(data);
      } catch (ex) {}
    };
    fetchQuestions();
    fetchStudents();
    setProgressBar(false);
  }, []);

  return (
    <>
      {pollEnabled ? (
        <div>
          {ProgressBar && <LinearProgress variant="indeterminate" color="primary" />}
          <h2 className="h2-responsive text-center mt-5">Class Polls</h2>
          <div className="mx-4 mb-5 row row-cols-1 row-cols-md-4">
            {questions.map((question) => (
              <PollCard
                key={question._id}
                questionTitle={question.title}
                question={question}
                persons={persons}
                handleClick={(message) => NotifyAlert(`Voted for `)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="disabledPolls">
          <div className="col-sm px-5 py-5">
            <div
              className="card my-5 justify-content-center text-center"
              style={{ borderRadius: '8px' }}
            >
              <div
                className="card-body"
                style={{
                  border: 'solid 1px',
                  borderRadius: '8px',
                }}
              >
                <h5 className="card-title">Polls Not Enabled Yet</h5>
                <p className="card-text">
                  Dear User, The Polling has not been enabled yet by the
                  administrator, you will be e-mailed once it is enabled. Please
                  Check back in later. Thank you
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ListPolls;
