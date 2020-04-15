import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

const PublicRoutes = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </>
  );
};

export default PublicRoutes;
