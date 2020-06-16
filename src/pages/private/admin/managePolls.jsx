import React, { useState, useEffect } from 'react';
import axios from 'axios';
import http from '../../../services/httpService';
import { apiUrl } from '../../../config.json';
import ListQuestions from './questions/listQuestion';
import { NotifyAlert } from '../../../components';

const ManagePolls = () => {
  const [questions, setQuestions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [inputValidationAlert, setInputValidationAlert] = useState({
    apply: false,
    message: '',
  });
  // TODO: #36 Poll getting added after deleted token
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const { data } = await http.get(`${apiUrl}/api/admin/polls`);
        setQuestions(data);
      } catch (ex) {
        // if (ex.response && ex.response.status === 404) {
        // }
      }
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
    let updatedInputValidation = {
      apply: false,
      message: '',
    };
    if (inputValue.trim() === '') {
      updatedInputValidation = {
        apply: true,
        message: 'Nothing to add',
      };
      return setInputValidationAlert(updatedInputValidation);
    }

    const originalQuestions = questions;
    // setQuestions([
    //   { _id: 'fakeId', question: inputValue },
    //   ...originalQuestions,
    // ]);
    try {
      const { data } = await http.post(`${apiUrl}/api/admin/polls`, {
        question: inputValue,
      });
      NotifyAlert('Successfully added the question', 'top');
      setQuestions([data, ...questions]);
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
      await http.delete(`${apiUrl}/api/admin/polls/${questionId}`);
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
        buttonTitle="Add Poll"
        buttonColor="deep-purple"
        placeholder="Add a Poll"
        pageHeading="Poll Questions 📊"
        questions={questions}
        handleAdd={handleAdd}
        inputValue={inputValue}
        onDelete={handleDelete}
        handleChange={handleChange}
        handleKeyPress={handleKeyPress}
        inputValidationAlert={inputValidationAlert}
      />
    </>
  );
};

export default ManagePolls;
