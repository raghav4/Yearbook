import React, { useState, useEffect } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import PollCard from './card';
import http from '../../../../services/httpService';
import { apiUrl, routes } from '../../../../config.json';
import { NotifyAlert } from '../../../../components';

const ListPolls = () => {
  const [persons, setPersons] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [ProgressBar, setProgressBar] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const { data } = await http.get(`${apiUrl}/${routes.getPolls}`);
        setQuestions(data);
      } catch (ex) {}
    };
    const fetchStudents = async () => {
      try {
        const { data } = await http.get(`${apiUrl}/${routes.getClassStudents}`);
        setPersons(data);
      } catch (ex) {}
    };
    fetchQuestions();
    fetchStudents();
    setProgressBar(false);
  }, []);

  return (
    <>
      {ProgressBar && <LinearProgress variant="indeterminate" color="primary" />}
      <h2 className="h2-responsive text-center mt-5">Class Polls</h2>
      <div className="mx-4 mb-5 row row-cols-1 row-cols-md-4">
        {questions.map((question) => (
          <PollCard
            key={question._id}
            questionTitle={question.title}
            question={question}
            persons={persons}
            handleClick={(message) => NotifyAlert(`Voted for ${message}`)}
          />
        ))}
      </div>
    </>
  );
};

export default ListPolls;
