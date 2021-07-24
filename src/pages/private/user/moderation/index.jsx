import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ListQuestions from './manageQuestion';
import { http } from '../../../../services';
import { apiUrl, endPoints } from '../../../../config.json';

const ModerateMessages = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await http.get(
        `${apiUrl}/${endPoints.messages.forLoggedInUser}`,
      );
      setMessages(data);
    };
    fetchMessages();
  }, [messages.length]);

  const handleDelete = async (messageId) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this message?\nYou wont be able to revert this later.',
    );
    if (confirmDelete) {
      const messagesArr = [...messages];
      try {
        const filteredMessages = messages.filter(
          (message) => message._id !== messageId,
        );
        setMessages([...filteredMessages]);
        toast.success('Successfully Deleted Message');
        await http.delete(
          `${apiUrl}/${endPoints.messages.deleteByMessageId}/${messageId}`,
        );
      } catch (ex) {
        setMessages(messagesArr);
        toast.error('Oops, please try again later!');
      }
    }
  };

  return (
    <>
      <ListQuestions messages={messages} handleDelete={handleDelete} />
      <Toaster />
    </>
  );
};

export default ModerateMessages;
