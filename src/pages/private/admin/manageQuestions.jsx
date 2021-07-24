import React, { useState, useEffect } from 'react';
import http from '../../../services/httpService';
import { apiUrl, endPoints } from '../../../config.json';
import ListQuestions from './questions/listQuestion';
import { NotifyAlert } from '../../../components';

const ManageQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [NoQuestions, setNoQuestions] = useState(true);
  const [inputValidationAlert, setInputValidationAlert] = useState({
    apply: false,
    message: '',
  });

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const { data } = await http.get(`${apiUrl}/${endPoints.slamBook.allQuestions}`);
        setQuestions(data);
        setNoQuestions(false);
      } catch (ex) {}
    };
    fetchQuestions();
  }, []);

  const handleChange = (input) => {
    if (input !== '') {
      setInputValidationAlert({ apply: false, message: '' });
    }
    setInputValue(input);
  };

  const handleAdd = async () => {
    const previousInputValue = inputValue;
    setInputValue('');
    let updatedInputValidation = {
      apply: false,
      message: '',
    };
    if (previousInputValue.trim() === '') {
      updatedInputValidation = {
        apply: true,
        message: 'Nothing to add',
      };
      return setInputValidationAlert(updatedInputValidation);
    }

    const originalQuestions = [...questions];
    try {
      const { data } = await http.post(`${apiUrl}/${endPoints.slamBook.createQuestion}`, {
        title: previousInputValue,
      });
      NotifyAlert('Successfully added the question', 'top');
      setQuestions([data, ...questions]);
      setNoQuestions(false);
    } catch (ex) {
      // if (ex.response && ex.response.status === 400)
      setQuestions(originalQuestions);
      updatedInputValidation = {
        apply: true,
        message: ex.response.data,
      };
    }
    setInputValidationAlert(updatedInputValidation);
  };

  const handleDelete = async (questionId) => {
    const originalQuestions = questions;
    setQuestions(questions.filter((q) => q._id !== questionId));
    try {
      await http.delete(`${apiUrl}/api/admin/questions/${questionId}`);
      setNoQuestions(true);
      NotifyAlert('Successfully deleted the question', 'top');
    } catch (ex) {
      setQuestions(originalQuestions);
    }
  };

  const handleKeyPress = ({ keyCode }) => {
    if (keyCode === 13) handleAdd();
  };

  return (
    <>
      <ListQuestions
        buttonTitle="Add Question"
        pageHeading="Know Me Better Questions"
        placeholder="Add a question"
        questions={questions}
        handleAdd={handleAdd}
        inputValue={inputValue}
        onDelete={handleDelete}
        handleChange={handleChange}
        handleKeyPress={handleKeyPress}
        inputValidationAlert={inputValidationAlert}
      />
      {NoQuestions && (
        <p className="mx-3 my-3 text-muted text-center">
          Looks like there are not questions, why not try adding some?
        </p>
      )}
    </>
  );
};

export default ManageQuestions;
