import React, { useState, useEffect } from 'react';
import { Pagination } from '@material-ui/lab';
import cookies from 'react-cookies';
import AnswerBox from './box';
import http from '../../../../services/httpService';
import { apiEndPoint } from '../../../../config.json';
import paginate from '../../../../utils/paginate';

const SelfAnswers = () => {
  const [answeredQuestions, setAnsweredQuestions] = useState([]); // Questions Answered by users
  const [totalQuestionsList, setTotalQuestionsList] = useState([]); // Overall Questions List
  const [totalQuestions, setTotalQuestions] = useState(0); // Total Number of Questions
  const [CurrentPage, setCurrentPage] = useState(1); // The current pagination page
  // eslint-disable-next-line no-unused-vars
  const [postsPerPage, setpostsPerPage] = useState(1); // No. of posts per page

  useEffect(() => {
    document.title = 'Self Questions';
    const fetchTotalQuestions = async () => {
      const { data } = await http.get(`${apiEndPoint}/api/admin/questions`, {
        headers: { 'x-auth-token': cookies.load('x-auth-token') },
      });
      setTotalQuestionsList(data);
      setTotalQuestions(data.length);
    };
    const fetchAnsweredQuestions = async () => {
      const { data } = await http.get(`${apiEndPoint}/api/user/answers`, {
        headers: { 'x-auth-token': cookies.load('x-auth-token') },
      });
      setAnsweredQuestions(data);
    };
    fetchTotalQuestions();
    fetchAnsweredQuestions();
    answeredQuestions.sort();
    totalQuestionsList.sort();
  }, []);

  const getAnswer = (questionId) => {
    const result = answeredQuestions.find((e) => e.questionId._id === questionId);
    return result ? { answer: result.answer, _id: result._id } : {};
  };

  const getTotalAnswersClass = () => {
    let classes = 'text-center mt-2 mb-3 ';
    const percentage = (answeredQuestions.length / totalQuestionsList.length) * 100;

    if ((percentage >= 0 && percentage <= 30) || Number.isNaN(percentage)) classes += 'red-text';
    else if (percentage >= 31 && percentage <= 60) classes += 'blue-grey-text';
    else if (percentage >= 61 && percentage <= 90) classes += 'purple-text';
    else if (percentage >= 91 && percentage < 100) classes += 'deep-orange-text';
    else if (percentage === 100) classes += 'green-text';

    return classes;
  };

  const handlePage = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <div className="mt-5">
        <h3 className="h3-responsive text-center my-3">Questions For You</h3>
        <p className={getTotalAnswersClass()}>
          <small>{`You've answered ${answeredQuestions.length} answers out of ${totalQuestions} questions`}</small>
        </p>

        {paginate(totalQuestionsList, CurrentPage, postsPerPage).map((item) => (
          <AnswerBox
            question={item.question}
            questionId={item._id}
            answer={getAnswer(item._id).answer}
            answerId={getAnswer(item._id)._id}
            key={item._id}
          />
        ))}

        <div style={{ display: 'flex' }} className="my-4 text-center justify-content-center">
          <Pagination
            count={totalQuestions}
            color="primary"
            boundaryCount={1}
            showFirstButton
            showLastButton
            onChange={handlePage}
          />
        </div>
      </div>
    </>
  );
};

export default SelfAnswers;
