import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListQuestions from './questions/listQuestion';

const ManagePolls = () => {
  const [questions, setQuestions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [inputValidationAlert, setInputValidationAlert] = useState({
    apply: false,
    message: '',
  });

  useEffect(() => {
    // const { data: questions } = await axios.get('https://yb-server.herokuapp.com/api/admin/polls');
    // setState({ questions });
  }, []);

  const handleChange = ({ currentTarget: input }) => {
    setInputValue(input.value);
  };

  const handleAdd = async (question) => {
    let updatedInputValidation = {
      apply: false,
      message: '',
    };
    if (question.trim() === '') {
      updatedInputValidation = {
        apply: true,
        message: 'Nothing to add',
      };
      return setInputValidationAlert(updatedInputValidation);
    }
    const questionObject = {
      question,
    };
    try {
      const { data } = await axios.post(
        'https://yb-server.herokuapp.com/api/admin/polls',
        questionObject,
      );
      setQuestions(data);
    } catch (err) {
      updatedInputValidation = {
        apply: true,
        message: err.response.data,
      };
      return setInputValidationAlert({
        apply: true,
        message: err.response.data,
      });
    }
    setInputValidationAlert(updatedInputValidation);
    return setInputValue('');
  };

  const handleKeyPress = (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) return handleAdd(e.currentTarget.value);
  };

  const handleDelete = async (questionId) => {
    try {
      const { data } = await axios.delete(
        `https://yb-server.herokuapp.com/api/admin/polls/${questionId}`,
      );
      setQuestions(data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <>
      <ListQuestions
        buttonTitle="Add"
        pageHeading="Polls Questions"
        placeholder="Add a Poll Question"
        questions={questions}
        inputValue={inputValue}
        inputValidationAlert={inputValidationAlert}
        handleAdd={handleAdd}
        onDelete={handleDelete}
        handleKeyPress={handleKeyPress}
        handleChange={handleChange}
      />
    </>
  );
};

export default ManagePolls;
